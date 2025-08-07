import React from "react";
import logos from "../assets/logo.png";

const Logo = ({ className = "", style = {} }) => {
  return (
    <div className={`logo-container ${className}`} style={style}>
      {/* Text on the left */}
      <div className="logo-text-section">
        <h1 className="logo-main-text">Still Here</h1>
        <p className="logo-tagline">Preserving Our Legacy</p>
      </div>

      {/* Logo image on the right */}
      <div className="logo-image-section">
        <img
          src={logos}
          alt="Still Here: Preserving Our Legacy"
          className="logo-image"
        />
      </div>
    </div>
  );
};

export default Logo;
