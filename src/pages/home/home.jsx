import React from "react";
import { useNavigate } from "react-router-dom";

import "./home.css";
export function Home() {
  const navigate = useNavigate();

  const getStartedHandler = () => {
    navigate("/notes");
  };

  return (
    <div className="notes">
      <div className="home-wrapper">
        <div className="home-content">
          <h1>NoteMate</h1>
          <h3>Your digital notebook</h3>
          <p>Capture important ideas and information anywhere.</p>
          <button
            className="btn btn-primary home-btn"
            onClick={getStartedHandler}
          >
            Get Started
          </button>
        </div>

        <div className="home-image">
          <img
            className="image-responsive"
            src="/Assets/hero.svg"
            alt="home-hero"
          />
        </div>
      </div>
    </div>
  );
}
