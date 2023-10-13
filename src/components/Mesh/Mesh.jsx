/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Mesh = ({ property1, className }) => {
  return (
    <img
      className={`mesh ${className}`}
      alt="Property default"
      src={
        property1 === "variant-2"
          ? "https://cdn.animaapp.com/projects/65297fedb608fc4e716b8302/releases/65298031239222558d58524f/img/property-1-variant2.png"
          : property1 === "variant-3"
          ? "https://cdn.animaapp.com/projects/65297fedb608fc4e716b8302/releases/65298031239222558d58524f/img/property-1-variant3.png"
          : property1 === "variant-4"
          ? "https://cdn.animaapp.com/projects/65297fedb608fc4e716b8302/releases/65298031239222558d58524f/img/property-1-variant4.png"
          : "https://cdn.animaapp.com/projects/65297fedb608fc4e716b8302/releases/65298031239222558d58524f/img/property-1-default.png"
      }
    />
  );
};

Mesh.propTypes = {
  property1: PropTypes.oneOf(["variant-4", "variant-2", "variant-3", "default"]),
};
