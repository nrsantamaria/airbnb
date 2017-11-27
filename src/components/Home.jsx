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
  roomType: PropTypes.string,
  beds: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number
};

export default Home;
