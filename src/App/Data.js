const Data = {
  cards: {
    "card-1": {
      id: "card-1",
      name: "Lightning Bolt",
      color: ["red"],
      manaCost: "{R}",
      image:
        "https://cards.scryfall.io/large/front/f/2/f29ba16f-c8fb-42fe-aabf-87089cb214a7.jpg",
    },

    "card-2": {
      id: "card-2",
      name: "Hellkite Overlord",
      color: ["green", "red", "black"],
      manaCost: "{4}{B}{R}{R}{G}",
      image:
        "https://cards.scryfall.io/large/front/d/9/d99869b4-0bb6-444a-bdc4-5916371c9d29.jpg",
    },

    "card-3": {
      id: "card-1",
      name: "Opt",
      color: ["blue"],
      manaCost: "{U}",
      image:
        "https://cards.scryfall.io/large/front/3/2/323db259-d35e-467d-9a46-4adcb2fc107c.jpg",
    },
    "card-4": {
      id: "card-2",
      name: "Sol Ring",
      color: [],
      manaCost: "{1}",
      image:
        "https://cards.scryfall.io/large/front/e/c/eca9ae7b-a6d9-43ea-92d4-0110fd6643a7.jpg",
    },
    "card-5": {
      id: "card-1",
      name: "Cultivate",
      color: ["green"],
      manaCost: "{2}{G}",
      image:
        "https://cards.scryfall.io/large/front/6/6/66a82a81-9b3e-421c-b916-15f40f359bf8.jpg",
    },
    "card-6": {
      id: "card-2",
      name: "Baleful Strix",
      color: ["blue", "black"],
      manaCost: "{U}{B}",
      image:
        "https://cards.scryfall.io/large/front/b/4/b451783a-8824-4eeb-8fd6-c9290ce7ccdb.jpg",
    },
    "card-7": {
      id: "card-1",
      name: "Swords to Plowshares",
      color: ["white"],
      manaCost: "{W}",
      image:
        "https://cards.scryfall.io/large/front/8/1/81c31217-7919-40fd-97e7-88431b7bd277.jpg",
    },
    "card-8": {
      id: "card-2",
      name: "Demonic Tutor",
      color: ["black"],
      manaCost: "{1}{B}",
      image:
        "https://cards.scryfall.io/large/front/3/b/3bdbc231-5316-4abd-9d8d-d87cff2c9847.jpg",
    },
  },
  panel: {
    "panel-1": {
      id: "panel-1",
      title: "text 1",
      type: "list",
      cardsList: [
        { id: "3", cardId: "card-4", count: 1 },
        { id: "4", cardId: "card-3", count: 2 },
        { id: "5", cardId: "card-8", count: 1 },
      ],
    },
    "panel-2": {
      id: "panel-2",
      title: "text 2",
      type: "list",
      cardsList: [
        { id: "0", cardId: "card-1", count: 1 },
        { id: "1", cardId: "card-2", count: 3 },
        { id: "2", cardId: "card-5", count: 3 },
      ],
    },
    "panel-3": {
      id: "panel-3",
      title: "text 3",
      type: "list",
      cardsList: [
        { id: "6", cardId: "card-5", count: 1 },
        { id: "7", cardId: "card-6", count: 4 },
        { id: "8", cardId: "card-7", count: 1 },
        { id: "9", cardId: "card-3", count: 1 },
      ],
    },
    "panel-4": {
      id: "panel-4",
      title: "text 4",
      type: "list",
      cardsList: [],
    },
    "panel-5": {
      id: "panel-5",
      title: "text 5",
      type: "list",
      cardsList: [],
    },
  },
  panelOrder: ["panel-2", "panel-1", "panel-3", "panel-5", "panel-4"],
};

export default Data;
