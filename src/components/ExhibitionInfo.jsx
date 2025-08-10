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
              {/* <p className="event-description">
                The official opening of Still Here: Preserving Our Legacy at The
                Beaverbrook Art Gallery
              </p> */}
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h3 className="event-title">Gala Opening Reception</h3>
              <div className="event-date">Saturday, August 1st, 2026</div>
              {/* <p className="event-description">
                Book Launch Reception for ALL of our Families - a celebration of
                community and heritage
              </p> */}
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h3 className="event-title">Exhibition Closes</h3>
              <div className="event-date">Sunday, December 13th, 2026</div>
              {/* <p className="event-description">
                Final opportunity to experience this transformative journey
                through Black Canadian history
              </p> */}
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
