import React from "react";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  function handleGuessSubmit(guess) {
    setGuessList([...guessList, guess]);
  }

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessInput handleGuessSubmit={handleGuessSubmit} />
    </>
  );
}

export default Game;
