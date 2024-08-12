import React from "react";

function GuessInput({ handleGuessSubmit, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleGuessSubmit(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        {
          <input
            disabled={gameStatus != "running"}
            required
            pattern=".{5,5}"
            title="5 letter word"
            id="guess-input"
            type="text"
            value={tentativeGuess}
            onChange={(event) => {
              const nextGuess = event.target.value.toUpperCase();
              setTentativeGuess(nextGuess);
            }}
          />
        }
      </form>
    </div>
  );
}

export default GuessInput;

/* How?
-Data binding for the input: the value is the state variable, 
and onCHangue at the input event function 
and onSubmit at the form (event)=>
*/
