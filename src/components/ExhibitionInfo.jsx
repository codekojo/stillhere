import React from "react";

const ExhibitionInfo = () => {
  return (
    <div className="exhibition-container">
      <div className="main-card">
        {/* Decorative Elements */}

        {/* Header */}
        <p className="main-title">Exhibition Information</p>

        {/* Timeline */}
        <div className="exhibition-timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h3 className="event-title">Exhibition Opens</h3>
              <div className="event-date">Saturday, July 18th, 2026</div>

              <h3 className="event-title">Official Opening</h3>

              <p className="event-description">
                Still Here: Preserving Our Legacy at The Beaverbrook Art Gallery
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h3 className="event-title">Gala Opening Reception</h3>

              <div className="event-date">Saturday, August 1st, 2026</div>
              <h3 className="event-title">Book Launch & Reception</h3>
              <p className="event-description">
                Experience our book launch and reception - a celebration of
                community and heritage
              </p>
              <div style={{ marginTop: "1rem" }}>
                <a
                  href="https://gooselane.com/products/still-here?_pos=1&_psq=still+here&_ss=e&_v=1.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="preorder-link"
                  style={{
                    display: "inline-block",
                    padding: "0.75rem 1.5rem",
                    backgroundColor: "#000",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "4px",
                    fontWeight: "500",
                    transition: "background-color 0.3s ease"
                  }}
                >
                  Pre-Order Book
                </a>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h3 className="event-title">Exhibition Closes</h3>
              <div className="event-date">Sunday, Dec 13th, 2026</div>
              <h3 className="event-title">End of Exhibition</h3>

              <p className="event-description">
                Final opportunity to experience this transformative journey
                through Black Canadian history
              </p>
            </div>
          </div>
        </div>

        {/* Venue Information */}
        <div className="venue-card">
          <h2 className="venue-title">The Beaverbrook Art Gallery</h2>
          <div className="venue-details">
            <div className="venue-item">
              <h4>Address</h4>
              <p>
                703 Queen Street
                <br />
                Fredericton, NB E3B 1C3
                <br />
                Canada
              </p>
            </div>
            <div className="venue-item">
              <h4>Gallery Hours</h4>
              <p>
                Tuesday - Saturday: 10:00 AM - 5:00 PM
                <br />
                Sunday: 12:00 PM - 5:00 PM
                <br />
                Closed Mondays
              </p>
            </div>
            <div className="venue-item">
              <h4>Exhibition Duration</h4>
              <p>
                Nearly 5 months
                <br />
                July 18 - December 13, 2026
                <br />
                Don't miss this important exhibition
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionInfo;
