import React from 'react';
import '../styles/variables.css';
import '../styles/typography.css';
import '../styles/iconography.css';
import '../styles/layout.css';

const StyleGuideDemo = () => {
  return (
    <div className="page-container">
      {/* Chapter Opening */}
      <section className="chapter-opening">
        <h1 className="title">Still Here</h1>
        <h2 className="subtitle">Preserving Our Legacy</h2>
        <div className="connection-lines">
          <div className="connection-line"></div>
          <div className="connection-line"></div>
          <div className="connection-line"></div>
        </div>
      </section>

      {/* Typography Showcase */}
      <section>
        <h2 className="heading">Typography System</h2>
        <div className="multi-column">
          <div>
            <h1 className="title">Title - Bodoni 65pt</h1>
            <p className="paragraph">
              This demonstrates the title font with its elegant and sophisticated look, 
              perfect for headlines and main titles.
            </p>
          </div>
          <div>
            <h2 className="heading">Heading - Futura 24pt Italic</h2>
            <p className="paragraph">
              The heading font features clean, simple design with excellent legibility 
              and the specified letter spacing.
            </p>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section>
        <h2 className="heading">Color Palette</h2>
        <div className="multi-column">
          <div className="color-swatch" style={{ backgroundColor: 'var(--color-morning)', padding: '2rem', color: 'var(--color-midnight)' }}>
            <h3 className="subtitle">Morning</h3>
            <p className="paragraph">#8ECAE6</p>
          </div>
          <div className="color-swatch" style={{ backgroundColor: 'var(--color-day)', padding: '2rem', color: 'var(--color-cloud)' }}>
            <h3 className="subtitle">Day</h3>
            <p className="paragraph">#219EBC</p>
          </div>
          <div className="color-swatch" style={{ backgroundColor: 'var(--color-midnight)', padding: '2rem', color: 'var(--color-cloud)' }}>
            <h3 className="subtitle">Midnight</h3>
            <p className="paragraph">#023047</p>
          </div>
          <div className="color-swatch" style={{ backgroundColor: 'var(--color-golden)', padding: '2rem', color: 'var(--color-midnight)' }}>
            <h3 className="subtitle">Golden</h3>
            <p className="paragraph">#FFB703</p>
          </div>
          <div className="color-swatch" style={{ backgroundColor: 'var(--color-sun)', padding: '2rem', color: 'var(--color-cloud)' }}>
            <h3 className="subtitle">Sun</h3>
            <p className="paragraph">#FB8500</p>
          </div>
          <div className="color-swatch" style={{ backgroundColor: 'var(--color-cloud)', padding: '2rem', color: 'var(--color-midnight)', border: '2px solid var(--color-day)' }}>
            <h3 className="subtitle">Cloud</h3>
            <p className="paragraph">#FFFFFF</p>
          </div>
        </div>
      </section>

      {/* Iconography */}
      <section>
        <h2 className="heading">Iconography & Motifs</h2>
        <div className="angled-line" style={{ height: '200px', margin: '2rem 0' }}>
          <div className="line-horizontal" style={{ top: '50%' }}></div>
          <div className="line-vertical" style={{ left: '30%' }}></div>
          <div className="line-diagonal" style={{ left: '70%', top: '10%' }}></div>
        </div>
        
        <div className="line-intersection" style={{ height: '100px', margin: '2rem 0' }}></div>
      </section>

      {/* Profile Layout Template */}
      <section>
        <h2 className="heading">Profile Layout Template</h2>
        <div className="profile-layout">
          <div className="profile-name">JOHN & MARY SMITH</div>
          <div className="profile-years">1927 - 2002</div>
          <div className="profile-location">Elm Hill, NB</div>
        </div>
      </section>

      {/* Layout Examples */}
      <section>
        <h2 className="heading">Layout Examples</h2>
        
        <div className="full-spread">
          <div>
            <h3 className="subtitle">Multi-Column Layout</h3>
            <p className="paragraph">
              This demonstrates the multi-column text layout with integrated photography. 
              The design emphasizes the diversity and interconnectedness of the people 
              and places in New Brunswick.
            </p>
          </div>
          <div>
            <div className="photo-collage">
              <div style={{ backgroundColor: 'var(--color-morning)', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="paragraph">Photo 1</span>
              </div>
              <div style={{ backgroundColor: 'var(--color-day)', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="paragraph">Photo 2</span>
              </div>
              <div style={{ backgroundColor: 'var(--color-golden)', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="paragraph">Photo 3</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Background Pattern */}
      <section className="sky-pattern" style={{ padding: '3rem', margin: '2rem 0' }}>
        <h2 className="heading">Sky-Inspired Background</h2>
        <p className="paragraph">
          This subtle pattern represents the sky theme that inspires our color palette, 
          creating visual interest while maintaining readability.
        </p>
      </section>

      {/* Page Marking */}
      <div className="page-marking">Chapter 1</div>
    </div>
  );
};

export default StyleGuideDemo; 