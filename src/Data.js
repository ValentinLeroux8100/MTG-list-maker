const Data = {
    cards : {
        "card-1" : {id: "card-1", text: "text 1", color: "R"}, 
        "card-2" : {id: "card-2", text: "text 2", color: "GB"},
        "card-3" : {id: "card-1", text: "text 1", color: "R"}, 
        "card-4" : {id: "card-2", text: "text 2", color: "GB"},
    },
    panel : {
        "panel-1" : {
            id: "panel-1",
            title: "text 1",
            type:"list",
            cardsIds: ["card-4", "card-3"]
            
        }, 
        "panel-2" : {
            id: "panel-2",
            title: "text 2", 
            type:"list",
            cardsIds: ["card-1", "card-2"]
        },
    },
    panelOrder : ["panel-2", "panel-1"]
}

export default Data