import React from "react";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import f5 from "../assets/f5.png";
import f6 from "../assets/f6.png";
import f7 from "../assets/f7.png";

const PartnersSection = () => {
  return (
    <div className="partners-section-container">
      {/* Section Title */}
      <div className="partners-title-container">
        <h2 className="partners-section-title">Our Partners & Sponsors</h2>
      </div>

      {/* Partners Grid - Horizontal Layout */}
      <div className="partners-grid-horizontal">
        {/* Canada Council for the Arts */}
        <div className="partner-logo-item">
          <img
            src={f1}
            alt="Canada Council for the Arts"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Kings Landing */}
        <div className="partner-logo-item">
          <img
            src={f2}
            alt="Kings Landing"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Beaverbrook Art Gallery */}
        <div className="partner-logo-item">
          <img
            src={f3}
            alt="Beaverbrook Art Gallery"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>

        {/* The Arts Board New Brunswick */}
        <div className="partner-logo-item">
          <img
            src={f5}
            alt="The Arts Board New Brunswick"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Provincial Archives of New Brunswick */}
        <div className="partner-logo-item">
          <img
            src={f6}
            alt="Provincial Archives of New Brunswick"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Goose Lane Editions */}
        <div className="partner-logo-item">
          <img
            src={f7}
            alt="Goose Lane Editions"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
