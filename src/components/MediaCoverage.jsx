import React from "react";
import pbImg from "../assets/pg.png";
import first from "../assets/1.png";
import second from "../assets/2.png";
const MediaCoverage = () => {
  return (
    <div className="media-coverage-container">
      {/* Top Section - Title and QR Panels */}
      <div className="media-header">
        <div className="media-title-section">
          <div className="media-title">
            <span className="project-name">Still Here:</span>
            <span className="section-name">MEDIA</span>
          </div>
        </div>

        <div className="qr-panels">
          <div className="qr-panel">
            <div className="qr-code">QR</div>
            <h3>
              Poems and History: Thandiwe McCarthy Reflects on Being Black in
              New Brunswick
            </h3>
            <p>November 21, 2023</p>
          </div>
          <div className="qr-panel">
            <div className="qr-code">QR</div>
            <h3>Poet strives to show Black history's place in New Brunswick</h3>
            <p>March 2023</p>
          </div>
          <div className="qr-panel">
            <div className="qr-code">QR</div>
            <h3>
              The journey to trace the roots of Black people in New Brunswick
            </h3>
            <p>August 2024</p>
          </div>
        </div>
      </div>

      {/* Middle Section - Black Families Archives */}
      {/* <div className="archives-section">
        <h2 className="archives-title">BLACK FAMILIES ARCHIVES</h2>
        <div className="archives-content">
          <div>
            <div className="document">
              <img
                src={pbImg}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
            <div className="document">
              <img
                src={pbImg}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="archives-photo">
            <img
              src={pbImg}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
        </div>
      </div> */}

      <div className="archives-section">
        <h2 className="archives-title">BLACK FAMILIES ARCHIVES</h2>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}
        >
          {/* Left - ONE image */}
          <div style={{ flex: "0 0 66%" }}>
            <img
              src={first}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>

          {/* Center - ONE image */}
          {/* <div style={{ flex: "0 0 33%" }}>
            <img
              src={pbImg}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div> */}

          {/* Right - ONE image */}
          <div style={{ flex: "0 0 33%" }}>
            <img
              src={second}
              style={{ width: "80%", height: "auto", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Section - Historical/Provincial Archives */}
      <div className="historical-section">
        <h2 className="archives-title">HISTORICAL/PROVINCIAL ARCHIVES</h2>
        <div>
          <img
            src={pbImg}
            style={{ width: "80%", height: "auto", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MediaCoverage;
