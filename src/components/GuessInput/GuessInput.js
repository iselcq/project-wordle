import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  function handleSubmit() {
    console.log({ guess });
  }

  return (
    <div>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
          setGuess("");
        }}
      >
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
-Data binding for the input: the value is the state value, and onCHangue event function

*/
