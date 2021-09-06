import React, { useState } from "react";
import "../styles/Hero.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [animation, setAnimation] = useState(false);
  return (
    <div className="hero-nav">
      <div className="hero-nav-logo">
        <Link to="/" className="common-style">
          <h3 className="main-logo">animelife</h3>
        </Link>
      </div>
      <div className="hero-nav-container">
        <div className="hero-nav-content">
          <h3>
            <Link to="/" className="common-style">
              home
            </Link>
          </h3>
        </div>
        <div className="hero-nav-content">
          <h3>
            <Link to="/about" className="common-style">
              about
            </Link>
          </h3>
        </div>
        <div className="hero-nav-content">
          <h3>
            <Link to="/feedback" className="common-style">
              feedback
            </Link>
          </h3>
        </div>
        <div
          onClick={() => setAnimation(!animation)}
          className="mobile-nav-content"
        >
          {animation ? (
            <i className="fas fa-times closing"></i>
          ) : (
            <i className="fas fa-bars opening"></i>
          )}
        </div>
        {animation ? (
          <div className="mobile-nav-items">
            <Link to="/" className="common-style">
              <p className="mobile-nav-items-1 item-1">home</p>
            </Link>
            <Link to="/about" className="common-style">
              <p className="mobile-nav-items-1 item-2">about</p>
            </Link>
            <Link to="/feedback" className="common-style">
              <p className="mobile-nav-items-1 item-3">feedback</p>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
