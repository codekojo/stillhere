import React from "react";

const ExhibitionCard = ({ title, subtitle, date, backgroundImage, className, children }) => {
  return (
    <div className={`exhibition-card ${className || ''}`}>
      <div className="exhibition-card-background">
        {backgroundImage && (
          <img
            src={backgroundImage}
            alt={title}
            className="exhibition-card-image"
          />
        )}
      </div>
      <div className="exhibition-card-content">
        <h3 className="exhibition-card-title">{title}</h3>
        <p className="exhibition-card-subtitle">{subtitle}</p>
        <div className="exhibition-card-date">{date}</div>
        {children}
      </div>
    </div>
  );
};

export default ExhibitionCard; 