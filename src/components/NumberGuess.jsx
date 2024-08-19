/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-alert */

const NumberGuess = () => {
  const handleClick = () => {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    const userInput = prompt('type a number');
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  };

  return (
    <div>
      <h1>Task: Add a button and handle a click event</h1>
      <button type="button" onClick={handleClick}>Guess the number between 1 and 3</button>
    </div>
  );
};

export default NumberGuess;
