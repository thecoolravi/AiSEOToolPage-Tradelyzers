/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const NavbarLogoLeft = ({ property1, className }) => {
  return (
    <div className={`navbar-logo-left ${property1} ${className}`}>
      {property1 === "variant-2" && (
        <div className="navbar-container">
          <div className="navbar-content">
            <img
              className="navbar-brand"
              alt="Navbar brand"
              src="https://cdn.animaapp.com/projects/65297fedb608fc4e716b8302/releases/65298031239222558d58524f/img/navbar-brand.png"
            />
            <div className="navbar-menu">
              <div className="navbar-link">
                <div className="text-wrapper">About</div>
              </div>
              <div className="navbar-link">
                <div className="text-wrapper">Features</div>
              </div>
              <div className="navbar-link">
                <div className="text-wrapper">Pricing</div>
              </div>
              <button className="navbar-button">
                <div className="div">GET STARTED</div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

NavbarLogoLeft.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
