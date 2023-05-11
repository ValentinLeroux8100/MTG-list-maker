import React from 'react'
import PanelElement from './PanelElement'
import { Droppable } from 'react-beautiful-dnd';

function PanelContainer({data}) {
    return (
        <Droppable 
            droppableId='all-panel' 
            direction="horizontal" 
            type="column"
        >
            {provider => (
                <section 
                    {...provider.droppableProps} 
                    ref={provider.innerRef}
                >
                    {data.panelOrder.map((id,index) => {
                        const panelData = data.panel[id]
                        
                        return (
                            <PanelElement 
                                key={id} 
                                id={id} 
                                data={panelData} 
                                cardMap={data.cards}
                                index={index}
                            >
                                {panelData.title}
                            </PanelElement>
                        )
                    })}

                    {provider.placeholder}

                </section>
            )}
        </Droppable>
    )
}

export default PanelContainer