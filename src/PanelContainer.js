import React from 'react'
import PanelElement from './PanelElement'
import { Droppable } from 'react-beautiful-dnd';

function PanelContainer(data) {

    return (
        <Droppable droppableId='test' direction="horizontal">
            {provider => (
                <section {...provider.droppableProps} ref={provider.innerRef}>
                    {data.data.panelOrder.map((id,index) => {
                        const panelInfo = data.data.panel[id].text

                        return (
                            <PanelElement key={id} id={id} index={index}>{panelInfo}</PanelElement>
                        )
                    })}
                </section>
            )}
        </Droppable>
    )
}

export default PanelContainer