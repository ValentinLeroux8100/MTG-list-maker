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
            cardsList: [
                {id: "3", cardId: "card-4", count: 1}, 
                {id: "4", cardId: "card-3", count: 2},  
                {id: "5", cardId: "card-8", count: 1}
            ]
            
        }, 
        "panel-2" : {
            id: "panel-2",
            title: "text 2", 
            type:"list",
            cardsList: [
                {id: "0", cardId: "card-1", count: 1},  
                {id: "1", cardId: "card-2", count: 3}, 
                {id: "2", cardId: "card-5", count: 3}, 
            ]
        },
        "panel-3" : {
            id: "panel-3",
            title: "text 3", 
            type:"list",
            cardsList: [
                {id: "6",cardId: "card-5", count: 1},  
                {id: "7",cardId: "card-6", count: 4},  
                {id: "8",cardId: "card-7", count: 1},  
                {id: "9",cardId: "card-3", count: 1},  
            ]
        },
    },
    panelOrder : ["panel-2", "panel-1", "panel-3"]
}

export default Data