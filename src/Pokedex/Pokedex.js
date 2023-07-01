import React from "react";
import Pokecard from "../Pokecard/Pokecard";
import "./Pokedex.css";

const Pokedex = ({ pokemon }) => {
  // console.log(pokemon);
  return (
    <div className="Pokedex">
      <h1 className="Pokedex-title">Pokedex</h1>
      <div className="Pokedex-container">
        {pokemon.map((i) => {
          // console.log(i);
          return (
            <Pokecard
              key={i.id}
              id={i.id}
              name={i.name}
              type={i.type}
              img={i.img}
              base_experience={i.base_experience}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pokedex;
