import React from "react";
import PropTypes from "prop-types";

function Home(props){
  return (
    <div>
      <span class="uppercase">{props.roomType} · {props.beds}</span>
      <h4>{props.name}</h4>
      <p>From ${props.price} per night</p>
      <p span="small-font">{props.rating} · Show Reviews</p>
    </div>
  );
}

Home.propTypes = {
  roomType = PropTypes.string,
  beds = PropTypes.integer,
  name = PropTypes.string,
  price = PropTypes.integer,
  rating = PropTypes.integer
};

export default Home;
