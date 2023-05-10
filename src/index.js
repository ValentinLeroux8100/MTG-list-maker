import {React, useState} from 'react';
import PanelContainer from './PanelContainer';
import ReactDOM from 'react-dom/client';
import { DragDropContext } from 'react-beautiful-dnd'
import './style.css'
/*
var selectedPanel;
var diffPos;

function MovePanelStart(panel, posX){
    selectedPanel = panel;
    diffPos = posX - panel.current.getClientRects()[0].x

    selectedPanel.current.style.position = "absolute";
    selectedPanel.current.style.left = posX-diffPos+"px";
    selectedPanel.current.style.visibility = "visible"

    window.addEventListener('mousemove', MovePanel);
    window.addEventListener('mouseup', MovePanelRelease);
}

function MovePanel(e){
    selectedPanel.current.style.left = e.clientX-diffPos+"px";
}

function MovePanelRelease(e){
    selectedPanel.current.style.left = e.clientX-diffPos+"px";
    selectedPanel.current.style.position = "inherit";

    window.removeEventListener('mousemove', MovePanel);
    window.removeEventListener('mouseup', MovePanelRelease);

}

function Panel({setText, visibility, copyPanel, children}){
    const panel = useRef();

    function startDrag(e){
        //setText((texts) => [... texts, children[1]]);
        MovePanelStart(copyPanel, e.clientX);
    }
    
}

function Principal({copyPanel}){
    const [texts, setText] = useState(["test 1", "test 2"]);

    const listPanel = (texts.map((text, id) =>
        <Panel key={id} setText={setText} copyPanel={copyPanel}> {text}</Panel>
    ));
    
    return(
        <main>
            {listPanel}
        </main>
    )
 }
*/

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