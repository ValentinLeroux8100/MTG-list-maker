import React, {useContext} from 'react'
import { Panel } from './Panel'
import { Droppable } from 'react-beautiful-dnd'
import { DataContext } from "App/App"


function PanelContainer() {
    const data = useContext(DataContext)
    console.log(data);
    return (
        <Droppable droppableId='all-panel' direction="horizontal" type="column">
            {provider => (
                <section {...provider.droppableProps} ref={provider.innerRef}>
                    {data.data.panelOrder.map((id,index) => {
                        const panelData = data.data.panel[id]
                        
                        return (
                            <Panel key={id} id={id} index={index} type={panelData.type}>
                                {panelData.title}
                            </Panel>
                        )
                    })}

                    {provider.placeholder}

                </section>
            )}
        </Droppable>
    )
}

export default PanelContainer