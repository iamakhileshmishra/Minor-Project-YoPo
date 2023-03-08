import React from "react";

import "./Tutorials.css";

import { tutorials, fixCamera } from "../../utils/data";

export default function Tutorials() {
  return (
    <div className="tutorials-container">
      <h2 className="home-heading">
        <a href="/">
          <img src="./YoPo-logo.png" alt="Logo" height="30px"></img>
          <span className="first-text">Yo</span>Po
        </a>
      </h2>
      <h1 className="tutorials-heading">Basic Tutorials</h1>
      <div className="tutorials-content-container">
        {tutorials.map((tutorial) => (
          <p className="tutorials-content">{tutorial}</p>
        ))}
      </div>
      <h1 className="tutorials-heading">Camera Not Working?</h1>
      <div className="tutorials-content-container">
        {fixCamera.map((points) => (
          <p className="tutorials-content">{points}</p>
        ))}
      </div>
    </div>
  );
}
