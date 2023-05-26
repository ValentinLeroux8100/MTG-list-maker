import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import SideMenuIcon from "./SideMenuIcon";
import { DataContext } from "App/App";
import CardList from "Component/Card/CardList";
import CustomForm from "Component/Form/CustomForm";

const sortOption = [
  "Name",
  "Set",
  "Released",
  "Rarity",
  "Color",
  "Usd",
  "Tix",
  "Eur",
  "Cmc",
  "Power",
  "Toughness",
  "Edhrec",
  "Penny",
  "Artist",
  "Review",
];

const orderOption = ["Auto", "Asc", "Desc"];

const form = {
  part1: {
    input: [
      {
        name: "search",
        id: "search",
        type: "SearchBar",
        placeholder: "oui",
      },
    ],
  },
  part2: {
    input: [
      {
        name: "sort",
        id: "sort",
        type: "SelectBoxInput",
        multiple: false,
        option: sortOption,
      },
      {
        name: "order",
        id: "order",
        type: "SelectBoxInput",
        multiple: false,
        option: orderOption,
      },
    ],
  },
};

function SideMenuSearch() {
  const [request, setRequest] = useState({});
  const [resultCard, setResultCard] = useState([]);

  const data = useContext(DataContext);

  const updateCardData = (result) => {
    setResultCard([]);

    result.data?.map((element) => {
      const cardData = {
        [element.id]: {
          ...element,
        },
      };

      data.dispatch({ type: "addCardData", cardData: cardData });

      const newCard = { id: element.id, cardId: element.id, count: 2 };

      setResultCard((prevState) => [...prevState, newCard]);
    });
  };

  useEffect(() => {
    const searchCards = () => {
      const sort = sortOption
        .find((sort) => sort == request.sort)
        ?.toLowerCase();
      const order = orderOption
        .find((order) => order == request.order)
        ?.toLowerCase();

      if (request?.search) {
        fetch(
          "https://api.scryfall.com/cards/search" +
            "?order=" +
            sort +
            "&dir=" +
            order +
            "&q=" +
            request.search
        )
          .then((result) => result.json())
          .then((json) => updateCardData(json));
      }
    };

    const timer = setTimeout(() => {
      searchCards();
    }, 2000);
    return () => clearTimeout(timer);
  }, [request]);

  return (
    <div className="side-menu-panel">
      <CustomForm form={form} onChange={setRequest} />
      <CardList
        id={"search"}
        cards={resultCard}
        displayCount={false}
        isDropDisabled={true}
      ></CardList>
    </div>
  );
}

function SideIconSearch({ selected = true }) {
  return <SideMenuIcon selected={selected}>Search</SideMenuIcon>;
}

SideIconSearch.propTypes = {
  selected: PropTypes.bool,
};

export { SideMenuSearch, SideIconSearch };
