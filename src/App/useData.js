import { useReducer } from 'react'
import { PanelDataAction } from './PanelContainer/Panel'

const initData = {   
    cardsData: {
        "card-1" : {
            id: "card-1", 
            name: "Lightning Bolt", 
            color: ["red"],
            manaCost: "{R}", 
            image: "https://cards.scryfall.io/large/front/f/2/f29ba16f-c8fb-42fe-aabf-87089cb214a7.jpg"
        }, 
    },
    panel: {},
    panelOrder: []
}

const actionList = {
    ...PanelDataAction
}

const dataReducer = (data, action) => {
    return actionList[action.type](data, action)
}

export const useData = () => {  
    const [data, dispatch] = useReducer(dataReducer, initData)

    return [data, dispatch]
}