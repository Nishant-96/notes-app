import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
export function Home() {
  return (
    <div className="notes">
      <div className="home-wrapper">
        <div className="home-content">
          <h1>NoteMate</h1>
          <h3>Your digital notebook</h3>
          <p>Capture important ideas and information anywhere.</p>
          <Link to="/notes">
            <button className="btn btn-primary home-btn">Get Started</button>
          </Link>
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
