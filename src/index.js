import {React, useState} from 'react';
import PanelContainer from './PanelContainer';
import ReactDOM from 'react-dom/client';
import { DragDropContext } from 'react-beautiful-dnd'
import './style.scss'


function App(){
    const [data, setData] = useState({ 
        "panel" : {
            "panel-1" : {id: "panel-1", text: "text 1"}, 
            "panel-2" : {id: "panel-2", text: "text 2"},
        },
        "panelOrder" : ["panel-2", "panel-1"]
    })

    const onDragEnd = result =>{
        const {destination, source, draggableId} = result;

        if(!destination){ return } 

        if(destination.droppableId === source.droppableId 
        && destination.index === source.index) {return}

        const newOrder = Array.from(data.panelOrder)

        newOrder.splice(source.index, 1)
        newOrder.splice(destination.index, 0, draggableId)
        
        setData((prevData) => ({...prevData, panelOrder: newOrder}))
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