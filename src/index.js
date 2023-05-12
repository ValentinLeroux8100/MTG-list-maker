import {React, useState} from 'react';
import ReactDOM from 'react-dom/client';

import { DragDropContext } from 'react-beautiful-dnd'

import PanelContainer from './PanelContainer';
import Data from './Data';

import './style/style.scss'
import './style/cardStyle.scss'

function App(){
    const [data, setData] = useState(Data)

    const onDragEnd = result =>{
        const {destination, source, draggableId, type} = result;

        if(!destination){ return } 
        
        //If element didn't move
        if(destination.droppableId === source.droppableId 
        && destination.index === source.index) {return}
            
        switch (type){
            case 'column':{
                const newOrder = Array.from(data.panelOrder)
    
                if(newOrder[source.index] != draggableId) return;
    
                newOrder.splice(source.index, 1)
                newOrder.splice(destination.index, 0, draggableId)
                
                setData((prevData) => ({...prevData, panelOrder: newOrder}))
                break
            }
            
            case 'card' :{
                const start = Array.from(data.panel[source.droppableId].cardsList);
                
                if(start[source.index].id != draggableId) return;

                //Pop the card to move
                const cardToMove = start.splice(source.index, 1)[0] 

                if(source.droppableId === destination.droppableId){
                    start.splice(destination.index, 0, cardToMove)
    
                    setData((prevData) => ({
                        ...prevData, 
                        panel: {
                            ...prevData.panel,
                            [source.droppableId]:{ 
                                ...prevData.panel[source.droppableId],
                                cardsList: start
                            }
                        }
                    }))
                    return
                }
    
                const finish = Array.from(data.panel[destination.droppableId].cardsList);
                const similar = finish.findIndex(card => card.cardId == cardToMove.cardId)
                
                if(similar != -1){
                    finish[similar].count += cardToMove.count
                }else{
                    finish.splice(destination.index, 0, cardToMove)
                }
                
                setData((prevData) => ({
                    ...prevData, 
                    panel: {
                        ...prevData.panel,
                        [source.droppableId]:{ 
                            ...prevData.panel[source.droppableId],
                            cardsList: start
                        },
                        [destination.droppableId]: { 
                            ...prevData.panel[destination.droppableId],
                            cardsList: finish
                        }
                    }
                }))
                break
            }
        }
    }

    const onBeforeCapture = (result) =>{
        const {destination, source, draggableId, type} = result;
    }

    return(
        <main>
            <DragDropContext onDragEnd={onDragEnd} onBeforeCapture={onBeforeCapture}>
                <PanelContainer data={data}/>
            </DragDropContext>
        </main>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);