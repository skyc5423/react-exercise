import React, { useState } from "react";
import "./DemoOption1.css"; // We'll create this CSS file next

function DemoOption1() {
  const [image, setImage] = useState(null);
  const [userGuess, setUserGuess] = useState("");
  const [result, setResult] = useState("");
  const [answer, setAnswer] = useState("");

  // Mock submit function (replace with actual API call later)
  const handleSubmit = () => {
    // Simulating API call delay
    setTimeout(() => {
      setImage("https://via.placeholder.com/300x200?text=Generated+Image");
      setAnswer("correct answer"); // This would come from your API in a real scenario
    }, 1000);
  };

  const handleReset = () => {
    setImage(null);
    setUserGuess("");
    setResult("");
    setAnswer("");
  };

  const checkAnswer = () => {
    if (userGuess.toLowerCase() === answer.toLowerCase()) {
      setResult("Correct!");
    } else {
      setResult("Incorrect. Try again!");
    }
  };

  const revealAnswer = () => {
    setResult(`The correct answer is: ${answer}`);
  };

  return (
    <div className="demo-option1">
      <h2>Image Guessing Game</h2>

      <div className="control-buttons">
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      {image && (
        <div className="image-area">
          <img src={image} alt="Generated content" />
        </div>
      )}

      {image && (
        <div className="guess-area">
          <textarea
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            placeholder="Enter your guess here"
          />
          <div className="guess-buttons">
            <button onClick={checkAnswer}>Check Answer</button>
            <button onClick={revealAnswer}>Reveal Answer</button>
          </div>
        </div>
      )}

      {result && <div className="result">{result}</div>}
    </div>
  );
}

export default DemoOption1;
