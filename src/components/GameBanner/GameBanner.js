import React from "react";

function GameBanner({ numOfGuesses, gameStatus, answer }) {
  if (gameStatus === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {numOfGuesses} guesses</strong>.
        </p>
      </div>
    );
  } else if (gameStatus === "lost") {
    return (
      <div className="sad banner">
        <p>
          <strong>Sorry, the correct answer is {answer} </strong>
        </p>
      </div>
    );
  }
}

export default GameBanner;
