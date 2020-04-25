import React from "react";
import FancyBorder from "./FancyBorder";
import './localStyles.css';

function WelcomeDialog() {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          Welcome
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
    );
  }

export default WelcomeDialog;