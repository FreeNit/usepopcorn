import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from './App';
import { useState } from "react";

import StartRating from "./StartRating";

function Test() {
  const [moviesRating, setMovieRating] = useState(0);
  return (
    <div>
      <StartRating maxRating={7} color="blue" size={56} onSetRating={setMovieRating} />
      <p>This movie was rated {moviesRating} stars.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StartRating maxRating={5} messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} />
    <StartRating maxRating={7} color="tomato" size={36} defaultRating={3} />
    <Test />
  </React.StrictMode>
);
