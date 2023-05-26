import {React, useState, createContext, useReducer, useEffect} from 'react';

import { DragDropContext } from 'react-beautiful-dnd'

import PanelContainer from './PanelContainer/PanelContainer';
import SideMenu from './SideMenu/SideMenu';
import { useData } from './useData';

import './Style.scss'

export const DataContext = createContext()

function App(){
    const [data, dispatch] = useData()

    const onDragEnd = result =>{
        const {destination, source, draggableId, type} = result;
        const info = {destination, source, draggableId}
        
        if(!destination){ return } 
        
        if(destination.droppableId === source.droppableId 
        && destination.index === source.index) {return}
        console.log(draggableId);
        switch (type){
            case 'column': {dispatch({type:"movePanel", ...info}); break; }
            case 'card' : 
                if(source.droppableId == "search") {
                    dispatch({type:"addCardToList", panelId: destination.droppableId, card:draggableId})
                }else{
                    dispatch({type:"moveCardToList", ...info})
                }
                break; 
        }
    }
    
    useEffect(() => {
        dispatch({type:"addPanel", panelType:"list"})
        dispatch({type:"addPanel", panelType:"list"})
        dispatch({type:"addPanel", panelType:"list"})
        dispatch({type:"removePanel", panelId:"panel-0"})
        
    }, [])

    return(
        <main>
            <DataContext.Provider value={{data: data, dispatch: dispatch}}>
                <DragDropContext onDragEnd={onDragEnd}>
                    <SideMenu/>
                    <PanelContainer/>
                </DragDropContext>
            </DataContext.Provider>
        </main>
    )
}

export default App