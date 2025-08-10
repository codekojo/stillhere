import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import ExhibitionInfo from "./ExhibitionInfo";
import MediaCoverage from "./MediaCoverage";
import PoetrySection from "./PoetrySection";
import PartnersSection from "./PartnersSection";
import "../styles/variables.css";
import "../styles/typography.css";
import "../styles/iconography.css";
import "../styles/layout.css";
import "../styles/logo.css";
import "../styles/exhibition-info.css";
import "../styles/media-coverage.css";
import "../styles/poetry-section.css";
import "../styles/partners-section.css";

import logos from "../assets/logo.png";

const ExhibitionLanding = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-07-18T00:00:00");

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="exhibition-landing">
      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="floating-line"></div>
        <div className="floating-line"></div>
        <div className="floating-line"></div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="connecting-lines">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
        <div className="hero-content">
          <Logo className="hero-logo" />
          <p className="paragraph hero-description">
            Still Here: Preserving Our Legacy weaves together historical
            documents, poignant poetry, and compelling photographs to celebrate
            New Brunswick's vibrant Black community. This project encapsulates
            our vision; to create a tribute to the past, a reflection of the
            present, and an inspiration for future generations.
          </p>

          <div className="countdown-section">
            <div className="countdown-title">Exhibition Opens In</div>
            <div className="countdown-timer">
              <div className="countdown-item">
                <span className="countdown-number">
                  {countdown.days.toString().padStart(3, "0")}
                </span>
                <span className="countdown-label">Days</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">
                  {countdown.hours.toString().padStart(2, "0")}
                </span>
                <span className="countdown-label">Hours</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">
                  {countdown.minutes.toString().padStart(2, "0")}
                </span>
                <span className="countdown-label">Minutes</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">
                  {countdown.seconds.toString().padStart(2, "0")}
                </span>
                <span className="countdown-label">Seconds</span>
              </div>
            </div>
            <div className="countdown-subtitle">
              Until Still Here opens at The Beaverbrook Art Gallery
            </div>
          </div>
        </div>
      </section>

      {/* Exhibition Information */}
      <ExhibitionInfo />

      {/* Poetry Section */}

      {/* Media Coverage */}
      <MediaCoverage />
      <PoetrySection />

      {/* Partners Section */}
      <PartnersSection />

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h2 className="contact-title">Get In Touch</h2>
          <a href="mailto:stillherenb@gmail.com" className="contact-email">
            stillherenb@gmail.com
          </a>
          <p
            style={{
              fontSize: "0.9rem",
            }}
          >
            For more information about Still Here: Preserving Our Legacy
          </p>

          <div style={{ textAlign: "center" }}>
            <img
              src={logos}
              alt="Still Here Logo"
              style={{
                width: "120px",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExhibitionLanding;
