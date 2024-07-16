import React from "react";

function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((item, index) => {
        return (
          <p className="guess" key={index}>
            {item.toString()}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
