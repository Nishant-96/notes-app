import React from "react";
import "./page-not-found.css";
export function PageNotFound() {
  return (
    <div className="notes">
      <div className="home-wrapper">
        <div className="home-content">
          <h1>NoteMate</h1>
          <h3>
            <strong>404.</strong> That's an Error
          </h3>
          <p>
            <strong>The Requested URL was not found on this server.</strong>{" "}
            That's all we know.
          </p>
        </div>

        <div className="home-image">
          <img
            className="image-responsive"
            src="/Assets/pagenotfound.svg"
            alt="error-hero"
          />
        </div>
      </div>
    </div>
  );
}
