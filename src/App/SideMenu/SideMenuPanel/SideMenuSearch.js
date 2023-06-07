import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import CardList from "Component/Card/CardList";
import CustomForm from "Component/Form/CustomForm";

import { DataContext } from "App/App";
import { useScryfallApi } from "App/Hook";

import SideMenuIcon from "../SideMenuIcon";
import config from "config.json";

const form = {
  part1: {
    input: [
      {
        name: "search",
        id: "q",
        type: "SearchBar",
        placeholder: "Search for Magic cards...",
      },
    ],
  },
  part2: {
    input: [
      {
        name: "order",
        id: "order",
        type: "SelectBoxInput",
        multiple: false,
        option: config.order,
      },
      {
        name: "dir",
        id: "dir",
        type: "SelectBoxInput",
        multiple: false,
        option: config.dir,
      },
    ],
  },
};

function SideMenuSearch({ isVisible = true }) {
  const [request, setRequest] = useState({});
  const [resultCard, setResultCard] = useState([]);

  const [sendRequest, setMethod] = useScryfallApi("cards/search");

  const data = useContext(DataContext);

  const updateCardData = (result) => {
    console.log(result);
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
    const timer = setTimeout(() => {
      if (request.q) sendRequest(request, updateCardData);
    }, 2000);
    return () => clearTimeout(timer);
  }, [request]);

  const className = "side-menu-panel " + (isVisible ? "" : "hide");

  return (
    <li className={className}>
      <CustomForm form={form} onChange={setRequest} />
      <CardList
        id={"search"}
        cards={resultCard}
        isDisplayCount={false}
        isDropDisabled={true}
        isVirtual={true}
      ></CardList>
    </li>
  );
}
SideMenuSearch.propTypes = {
  isVisible: PropTypes.bool,
};

function SideIconSearch({ selected = false, ...props }) {
  return (
    <SideMenuIcon selected={selected} {...props}>
      Search
    </SideMenuIcon>
  );
}

SideIconSearch.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

export { SideMenuSearch, SideIconSearch };
