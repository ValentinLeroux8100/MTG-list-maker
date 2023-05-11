import {React, useState} from 'react';
import ReactDOM from 'react-dom/client';

import { DragDropContext } from 'react-beautiful-dnd'

import PanelContainer from './PanelContainer';
import Data from './Data';

import './style.scss'
import { Logger } from 'sass';


function App(){
    const [data, setData] = useState(Data)

    const onDragEnd = result =>{
    
        const {destination, source, draggableId, type} = result;
        console.log(destination);
        console.log(source);
        if(!destination){ return } 

        if(destination.droppableId === source.droppableId 
        && destination.index === source.index) {return}
            
        if(type == 'column'){
            const newOrder = Array.from(data.panelOrder)
    
            newOrder.splice(source.index, 1)
            newOrder.splice(destination.index, 0, draggableId)
            
            setData((prevData) => ({...prevData, panelOrder: newOrder}))
            return
        }
 
        if(type == 'card'){
            if(source.droppableId === destination.droppableId){
                const newCardOrder = Array.from(data.panel[source.droppableId].cardsIds);
        
                newCardOrder.splice(source.index, 1)
                newCardOrder.splice(destination.index, 0, draggableId)
                
                setData((prevData) => ({
                    ...prevData, 
                    panel: {
                        ...prevData.panel,
                        [source.droppableId]:{ 
                            ...prevData.panel[source.droppableId],
                            cardsIds: newCardOrder
                        }
                    }
                }))
                return
            }

            const start = Array.from(data.panel[source.droppableId].cardsIds);
            const finish = Array.from(data.panel[destination.droppableId].cardsIds);
            
            start.splice(source.index, 1)
            finish.splice(destination.index, 0, draggableId)
            
            setData((prevData) => ({
                ...prevData, 
                panel: {
                    ...prevData.panel,
                    [source.droppableId]:{ 
                        ...prevData.panel[source.droppableId],
                        cardsIds: start
                    },
                    [destination.droppableId]: { 
                        ...prevData.panel[destination.droppableId],
                        cardsIds: finish
                    }
                }
            }))
        }
    }

    return(
        <main>
            <DragDropContext onDragEnd={onDragEnd}>
                <PanelContainer data={data}/>
            </DragDropContext>
        </main>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);