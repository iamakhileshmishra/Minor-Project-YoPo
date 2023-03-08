import React from "react";

import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <h2 className="home-heading">
        <a href="/">
          <img src="./YoPo-logo.png" alt="Logo" height="30px"></img>
          <span className="first-text">Yo</span>Po
        </a>
      </h2>
      <h1 className="about-heading">About</h1>
      <div className="about-main">
        <p className="about-content">
          This is an realtime AI based Yoga Trainer which detects your pose and
          tell how well you are doing. This AI will first predicts keypoints or
          coordinates of different parts of the body(basically where they are
          present in an image) and then it will use another classification model
          to classify the poses if someone is doing a pose and if AI detects
          that pose more than 95% probability and then it will notify you are
          doing correctly(by making virtual skeleton green).
        </p>
        <div className="developer-info">
          <h4>About Developer</h4>
          <p className="about-content">
            <ol>
              <li>Akhilesh Kumar Mishra 2020UGCS053</li>
              <li>Gyan Ujjwal 2020UGCS001</li>
              <li>Hemant Naik 2020UGCS013</li>
            </ol>
          </p>
        </div>
      </div>
    </div>
  );
}
