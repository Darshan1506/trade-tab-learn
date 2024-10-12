import React, { useEffect, useState } from "react";
import "./App.css";
import quotes from "./stock_market.json";
import bullImg from "./assets/bull.png";

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function App() {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    const newQuote = getRandomQuote();
    setQuote(newQuote);
  }, []);

  return (
    <div className="App">
      <div className="quote-container">
        <p className="quote-text">{quote}</p>
      </div>
      <div className="bull-img-container">
        <img src={bullImg} alt="bull" height={300} width={400} />
      </div>
    </div>
  );
}

export default App;
