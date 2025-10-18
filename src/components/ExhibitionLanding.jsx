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
import bookcover from "../assets/book.webp";

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

          {/* Pre-Order Book Section */}
        </div>
      </section>
            <div
            
            style={{ 
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              padding: "1.5rem 1.5rem",
              textAlign: "center",
              position: "relative",
              overflow: "hidden"
            }}>
              {/* Background Pattern */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grain\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"><circle cx=\"25\" cy=\"25\" r=\"1\" fill=\"white\" opacity=\"0.1\"/><circle cx=\"75\" cy=\"75\" r=\"1\" fill=\"white\" opacity=\"0.1\"/><circle cx=\"50\" cy=\"10\" r=\"0.5\" fill=\"white\" opacity=\"0.1\"/><circle cx=\"10\" cy=\"60\" r=\"0.5\" fill=\"white\" opacity=\"0.1\"/><circle cx=\"90\" cy=\"40\" r=\"0.5\" fill=\"white\" opacity=\"0.1\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grain)\"/></svg>')",
                opacity: 0.3
              }}></div>
              
              <div style={{ position: "relative", zIndex: 1 }}>
                <h2 
                className="main-title"
                style={{ 
                  fontSize: "2rem", 
                  marginBottom: "0.5rem", 
                  color: "#fff",
                  fontWeight: "600",
                  textShadow: "0 2px 4px rgba(0,0,0,0.3)"
                }}>
                  Pre-Order the Book
                </h2>
                

                <div style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  padding: "2rem",
                  borderRadius: "12px",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  maxWidth: "900px",
                  margin: "0 auto"
                }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2.5rem",
                    flexWrap: "wrap"
                  }}>
                    {/* Image on the left */}
                    <img
                      src={bookcover}
                      alt="Still Here Book Cover"
                      style={{
                        width: "300px",
                        height: "auto",
                        borderRadius: "8px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                      }}
                    />
                    
                    {/* Information and button on the right */}
                    <div style={{ 
                      textAlign: "left", 
                      flex: "1", 
                      minWidth: "300px",
                      maxWidth: "400px"
                    }}>
                      {/* Authors */}
                      <p style={{
                        color: "#f0f0f0",
                        fontSize: "0.9rem",
                        marginBottom: "0.5rem",
                        fontWeight: "500"
                      }}>
                        Mary McCarthy, Thandiwe McCarthy, Gary Weekes
                      </p>
                      
                      <h3 style={{
                        color: "#fff",
                        fontSize: "1.3rem",
                        marginBottom: "0.5rem",
                        fontWeight: "600"
                      }}>
                        Still Here: Preserving Our Legacy
                      </h3>
                      
                      <p style={{
                        color: "#f0f0f0",
                        fontSize: "0.95rem",
                        marginBottom: "1.5rem",
                        lineHeight: "1.5"
                      }}>
                        A powerful collection of historical documents, poetry, and photographs celebrating New Brunswick's vibrant Black community.
                      </p>
                      
                      {/* Book Details */}
                      <div style={{
                        borderTop: "1px solid rgba(255,255,255,0.2)",
                        paddingTop: "1rem",
                        marginBottom: "2rem",
                        fontSize: "0.85rem",
                        color: "#e0e0e0"
                      }}>
                        <div style={{ marginBottom: "0.4rem" }}>
                          <span style={{ fontWeight: "600" }}>Category:</span> Non-Fiction / History & Philosophy
                        </div>
                        <div style={{ marginBottom: "0.4rem" }}>
                          <span style={{ fontWeight: "600" }}>Publication Date:</span> June 24, 2026
                        </div>
                        <div>
                          <span style={{ fontWeight: "600" }}>Format:</span> Hardcover • 186 pages
                        </div>
                      </div>
                      
                      {/* Pre-order button */}
                      <a
                        href="https://gooselane.com/products/still-here?_pos=1&_psq=still+here&_ss=e&_v=1.0"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-block",
                          padding: "1rem 2.5rem",
                          backgroundColor: "#000",
                          color: "#fff",
                          textDecoration: "none",
                          borderRadius: "50px",
                          fontWeight: "600",
                          fontSize: "1.1rem",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                          transition: "all 0.3s ease",
                          border: "2px solid rgba(255,255,255,0.3)",
                          position: "relative",
                          overflow: "hidden"
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = "translateY(-2px)";
                          e.target.style.backgroundColor = "#333";
                          e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = "translateY(0)";
                          e.target.style.backgroundColor = "#000";
                          e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
                        }}
                      >
                        Pre-Order Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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

          <div style={{ 
            textAlign: "center", 
            marginTop: "2rem", 
            paddingTop: "1.5rem", 
            borderTop: "1px solid #e0e0e0"
          }}>
            <p style={{ 
              fontSize: "0.9rem", 
              color: "#fff",
              margin: 0
            }}>
              Made with ❤️ by{" "}
              <a
                href="https://clintoncodes.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#ff6b35",
                  textDecoration: "none",
                  fontWeight: "500"
                }}
              >
                SWIC Agency
              </a>
            </p>
            <p style={{ 
              fontSize: "0.8rem", 
              color: "#fff",
              margin: "0.5rem 0 0 0"
            }}>
              Contact me:{" "}
              <a
                href="tel:506-897-0947"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: "500"
                }}
              >
                506-897-0947
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExhibitionLanding;
