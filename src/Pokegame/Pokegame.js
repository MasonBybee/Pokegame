import React from "react";
import Pokedex from "../Pokedex/Pokedex";
import _ from "lodash";
import "./Pokegame.css";

const winner = (firstHandArr, secondHandArr) => {
  const total1 = firstHandArr.reduce((acc, next) => {
    return acc + next.base_experience;
  }, 0);
  const total2 = secondHandArr.reduce((acc, next) => {
    return acc + next.base_experience;
  }, 0);
  if (total1 > total2) {
    return 1;
  } else {
    return 2;
  }
};

const Pokegame = ({ pokemon }) => {
  let firstHand = [];
  const secondHand = pokemon.slice();

  for (let i = 0; i < 4; i++) {
    let randomPokemon = _.sample(secondHand);
    firstHand.unshift(randomPokemon);
    let idx = secondHand.indexOf(randomPokemon);
    secondHand.splice(idx, 1);
  }

  const winningPlayer = winner(firstHand, secondHand);

  return (
    <>
      <div className="Pokegame-player1">
        <Pokedex pokemon={firstHand} />
        {winningPlayer === 1 && (
          <h3 className="Pokegame-Winner">Player 1 wins!</h3>
        )}
      </div>
      <h1 className="Pokegame-VS">VS</h1>
      <div className="Pokegame-player2">
        <Pokedex pokemon={secondHand} />
        {winningPlayer === 2 && (
          <h3 className="Pokegame-Winner">Player 2 wins!</h3>
        )}
      </div>
    </>
  );
};

export default Pokegame;
