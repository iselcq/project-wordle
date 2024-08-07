import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          status={result ? result[num].status : undefined}
          letter={result ? result[num].letter : undefined}
        />
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
