import React from "react";
import PropTypes from "prop-types";

function CardImage({ link, ...other }) {
  return <img className="card-image" src={link} {...other} />;
}

CardImage.propTypes = {
  link: PropTypes.string,
};

export default CardImage;
