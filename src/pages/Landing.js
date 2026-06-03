import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const bubbleData = [
  { size: 48, top: '10%', left: '12%', delay: '0s' },
  { size: 36, top: '18%', left: '52%', delay: '0.2s' },
  { size: 42, top: '26%', left: '32%', delay: '0.4s' },
  { size: 38, top: '32%', left: '14%', delay: '0.6s' },
  { size: 44, top: '36%', left: '64%', delay: '0.3s' },
  { size: 34, top: '42%', left: '44%', delay: '0.5s' },
  { size: 40, top: '48%', left: '24%', delay: '0.1s' },
  { size: 36, top: '22%', left: '76%', delay: '0.7s' },
  { size: 30, top: '8%', left: '86%', delay: '0.9s' },
  { size: 38, top: '54%', left: '72%', delay: '0.2s' },
  { size: 32, top: '14%', left: '38%', delay: '0.8s' },
  { size: 46, top: '4%', left: '6%', delay: '0.6s' },
  { size: 34, top: '60%', left: '8%', delay: '1.0s' },
  { size: 30, top: '68%', left: '58%', delay: '0.4s' },
  { size: 36, top: '56%', left: '38%', delay: '0.7s' },
  { size: 32, top: '44%', left: '84%', delay: '1.1s' },
];

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Floating bubbles */}
      <div className="bubbles-container">
        {bubbleData.map((b, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              width: b.size,
              height: b.size,
              top: b.top,
              left: b.left,
              animationDelay: b.delay,
            }}
          />
        ))}
      </div>

      {/* Bottom content */}
      <div className="landing-content">
        <h1 className="landing-title">Welcome to PopX</h1>
        <p className="landing-subtitle">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit.
        </p>

        <button
          className="btn btn-primary"
          onClick={() => navigate('/signup')}
        >
          Create Account
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => navigate('/login')}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Landing;
