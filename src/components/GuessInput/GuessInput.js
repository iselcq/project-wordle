import React from "react";

function GuessInput({ handleGuessSubmit }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleGuessSubmit(guess);
    setGuess("");
  }

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          pattern=".{5,5}"
          title="5 letter word"
          id="guess-input"
          type="text"
          value={guess}
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase());
          }}
        />
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
