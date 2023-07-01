import React from "react";
import "./Pokecard.css";

const Pokecard = (props) => (
  <div className="Pokecard" key={props.id}>
    <h4 className="Pokecard-name">{props.name}</h4>
    <p className="Pokecard-id">Pokedex #: {props.id}</p>
    <img src={props.img} className="Pokecard-img" />
    <p className="Pokecard-type">Type: {props.type}</p>
    <p className="Pokecard-EXP">EXP: {props.base_experience}</p>
  </div>
);
export default Pokecard;
