import {React, useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';

import { DragDropContext } from 'react-beautiful-dnd'

import PanelContainer from './PanelContainer';
import SideMenu from './SideMenu';
import Data from './Data';

import './style/style.scss'
import './style/sideStyle.scss'
import './style/cardStyle.scss'

function App(){
    const [data, setData] = useState(Data)

    const moveColumn = (source, destination, draggableId) => {
        const newOrder = Array.from(data.panelOrder)
    
        if(newOrder[source.index] != draggableId) return;

        newOrder.splice(source.index, 1)
        newOrder.splice(destination.index, 0, draggableId)
        
        setData((prevData) => ({...prevData, panelOrder: newOrder}))
    }

    const moveOneCard = (source, destination, draggableId) => {
        
        const start = Array.from(data.panel[source.droppableId].cardsList)
                
        if(start[source.index].id != draggableId) return
        if(source.droppableId === destination.droppableId) return
        
        const cardToMove = start.splice(source.index, 1)[0]

        const finish = Array.from(data.panel[destination.droppableId].cardsList)

        const similar = finish.findIndex(card => card.cardId == cardToMove.cardId)
        
        if(cardToMove.count != 1){
            cardToMove.count -= 1
            start.splice(source.index, 0, cardToMove)
        }

        if(similar != -1){
            finish[similar].count += 1
        }
        else{
            let copyCardToMove = {... cardToMove}
            copyCardToMove.id += "_" + data.panel[destination.droppableId].id
            copyCardToMove.count = 1
            finish.splice(destination.index, 0, copyCardToMove)
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
    }

    const onDragEnd = result =>{
        const {destination, source, draggableId, type} = result;

        if(!destination){ return } 
        
        if(destination.droppableId === source.droppableId 
        && destination.index === source.index) {return}
            
        switch (type){
            case 'column':{
                moveColumn(source, destination, draggableId)
                break
            }
            
            case 'card' :{
                moveOneCard(source, destination, draggableId)
                break
            }
        }
    }

    return(
        <main>
            <DragDropContext onDragEnd={onDragEnd}>
                <SideMenu/>
                <PanelContainer data={data}/>
            </DragDropContext>
        </main>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);