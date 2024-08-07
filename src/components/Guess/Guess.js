import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell() {
  const result = checkGuess(value, answer);
}

function Guess({ value, answer }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

//Alternative
// <p className="guess">
//   {value
//     ? value.split("").map((letter, index) => (
//         <span key={index} className="cell">
//           {letter}
//         </span>
//       ))
//     : range(5).map((num) => (
//         <span key={num} className="cell">
//           {value ? value[num] : undefined}
//         </span>
//       ))}
// </p>

export default Guess;
