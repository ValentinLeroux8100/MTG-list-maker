const Data = {
    cards : {
        "card-1" : {id: "card-1", text: "Lightning Bolt", color: ["red"]}, 
        "card-2" : {id: "card-2", text: "Hellkite Overlord", color: ["green", "red", "black"]},
        "card-3" : {id: "card-1", text: "Opt", color: ["blue"]}, 
        "card-4" : {id: "card-2", text: "Sol Ring", color: []},
        "card-5" : {id: "card-1", text: "Cultivate", color: ["green"]}, 
        "card-6" : {id: "card-2", text: "Baleful Strix", color: ["blue", "black"]},
        "card-7" : {id: "card-1", text: "Swords to Plowshares", color: ["white"]}, 
        "card-8" : {id: "card-2", text: "Demonic Tutor", color: ["black"]},
    },
    panel : {
        "panel-1" : {
            id: "panel-1",
            title: "text 1",
            type:"list",
            cardsIds: ["card-4", "card-3", "card-8"]
            
        }, 
        "panel-2" : {
            id: "panel-2",
            title: "text 2", 
            type:"list",
            cardsIds: ["card-1", "card-2"]
        },
        "panel-3" : {
            id: "panel-3",
            title: "text 3", 
            type:"list",
            cardsIds: ["card-5", "card-6", "card-7"]
        },
    },
    panelOrder : ["panel-2", "panel-1", "panel-3"]
}

export default Data