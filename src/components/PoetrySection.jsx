import React from "react";
import third from "../assets/third.png";

const PoetrySection = () => {
  return (
    <div
      style={{
        backgroundColor: "#023047",
        color: "white",
        padding: "3rem 2rem",
        minHeight: "90vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Add CSS animations */}
      <style>{`
        @keyframes gentleFloat {
          0%, 100% { 
            transform: translateY(0px) scale(1);
          }
          50% { 
            transform: translateY(-10px) scale(1.02);
          }
        }

        @keyframes subtleGlow {
          0%, 100% { 
            box-shadow: 0 15px 40px rgba(0,0,0,0.4), 0 0 0 rgba(255, 183, 3, 0.3);
          }
          50% { 
            box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 0 20px rgba(255, 183, 3, 0.4);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animated-image {
          animation: gentleFloat 4s ease-in-out infinite, subtleGlow 3s ease-in-out infinite;
          transition: transform 0.3s ease;
        }

        .animated-image:hover {
          transform: scale(1.05) !important;
          animation-play-state: paused;
        }

        .fade-in-text {
          animation: fadeInUp 1s ease-out;
        }
      `}</style>

      {/* Geometric lines */}
      <div style={{ position: "absolute", top: "2rem", left: "2rem" }}>
        <div
          style={{
            width: "100px",
            height: "3px",
            backgroundColor: "#FFB703",
            marginBottom: "1rem",
          }}
        ></div>
        <div
          style={{
            width: "300px",
            height: "3px",
            backgroundColor: "#FFB703",
            marginBottom: "1rem",
          }}
        ></div>
        <div
          style={{
            width: "150px",
            height: "3px",
            backgroundColor: "#8ECAE6",
            transform: "rotate(45deg)",
            transformOrigin: "left",
          }}
        ></div>
        <div
          style={{
            width: "200px",
            height: "3px",
            backgroundColor: "#8ECAE6",
            transform: "rotate(45deg) translateY(-20px)",
            transformOrigin: "left",
          }}
        ></div>
        <div
          style={{
            width: "120px",
            height: "3px",
            backgroundColor: "white",
            transform: "rotate(45deg) translateY(-40px)",
            transformOrigin: "left",
          }}
        ></div>
      </div>

      <div
        style={{
          maxWidth: "1100px",
          width: "100%",
          display: "flex",
          gap: "4rem",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left side - Text content */}
        <div style={{ flex: "0 0 55%" }} className="fade-in-text">
          <h1
            style={{
              fontFamily: "Bodoni, serif",
              fontSize: "clamp(3rem, 7vw, 5rem)",
              color: "#FFB703",
              marginBottom: "1rem",
              lineHeight: "0.9",
              textAlign: "left",
            }}
          >
            McCarty
            <br />
            Family Poem
          </h1>

          <p
            style={{
              fontFamily: "Proxima Nova, sans-serif",
              fontSize: "1.1rem",
              fontStyle: "italic",
              color: "#8ECAE6",
              marginBottom: "2rem",
              textAlign: "left",
            }}
          >
            By Thandiwe McCarthy
          </p>

          <div
            style={{
              fontFamily: "Futura, sans-serif",
              fontSize: "0.95rem",
              lineHeight: "1.7",
              color: "white",
              textAlign: "left",
            }}
          >
            <p style={{ marginBottom: "1.5rem" }}>
              Four years ago in the thick New Brunswick Forest, down by a lake,
              lies eleven acres of land. Sold cheap as no roads led to it, nor
              did any electricity reach it. Yet here on this land a speaker
              powerfully claims things are "Still DRE."
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Today is a birthday party. Over a dozen people navigated the tiny
              road to the campground—a road so narrow that the trees brush
              against the sides of your vehicle until you're greeted by the
              large McCarty flag. Rosebud laughs and tells jokes as she
              introduces us to everyone, giving us the grand tour.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              The pathway to the water is sprinkled with colorful rocks. At the
              end, three kids and a dog enjoy the breeze off the lake, playing
              on the dock they helped their family build. Everything around us
              is intentional, comforting.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              It took vision, love, and over a hundred pounds of crushed rock.
              Yet the McCarty family has built something in the middle of
              nowhere. Building on ancestral land, this family invested in
              tractors, chainsaws, trucks, and years of their lives to build a
              sanctuary for their family's continued success.
            </p>

            <p style={{ fontStyle: "italic", color: "#8ECAE6" }}>
              Sometimes history repeats itself in a wonderful way.
              <br />
              Sometimes those disconnected can work their way back home.
            </p>
          </div>
        </div>

        {/* Right side - Animated Image */}
        <div
          style={{
            flex: "0 0 40%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={third}
            alt="McCarty Family Historical Photo"
            className="animated-image"
            style={{
              width: "100%",
              maxWidth: "350px",
              height: "auto",
              borderRadius: "10px",
              border: "3px solid rgba(255, 183, 3, 0.3)",
              cursor: "pointer",
            }}
          />
        </div>
      </div>

      {/* Additional geometric elements */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "2rem",
          width: "200px",
          height: "3px",
          backgroundColor: "#FFB703",
          transform: "rotate(-30deg)",
        }}
      ></div>
    </div>
  );
};

export default PoetrySection;
