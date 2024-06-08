import React, { useState } from "react";

function Weather({ title }) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

function App() {
  const [weather, setWeather] = useState("");
  const [title, setTitle] = useState("Sun Time!");

  const onSunClick = () => {
    setWeather("sunny");
    setTitle("Sun Time!");
  };

  const onRainClick = () => {
    setWeather("rainy");
    setTitle("Rain Time!");
  };

  const getBackgroundColor = () => {
    return weather === "rainy" ? "lightblue" : "yellow";
  };

  return (
    <main style={{ backgroundColor: getBackgroundColor() }}>
      <Weather title={title} />
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
