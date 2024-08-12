import React from "react";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GameBanner from "../GameBanner/GameBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  //runing | won | lost
  const [gameStatus, setGameStatus] = React.useState("running");
  const [guessList, setGuessList] = React.useState([]);

  function handleGuessSubmit(guess) {
    const nextGuessList = [...guessList, guess];
    setGuessList(nextGuessList);

    if (guess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessInput
        handleGuessSubmit={handleGuessSubmit}
        gameStatus={gameStatus}
      />
      <GameBanner
        numOfGuesses={guessList.length}
        gameStatus={gameStatus}
        answer={answer}
      />
    </>
  );
}

export default Game;
