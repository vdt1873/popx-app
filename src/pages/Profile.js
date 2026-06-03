import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile-page">
      {/* Header */}
      <div className="profile-header">
        <h2 className="profile-header-title">Account Settings</h2>
      </div>

      {/* Divider */}
      <div className="profile-divider" />

      {/* User info row */}
      <div className="profile-user-row">
        <div className="avatar-wrapper">
          <div className="avatar">
            <img
              src="https://i.pravatar.cc/80?img=47"
              alt="Profile"
            />
          </div>
          <div className="avatar-badge">
            {/* Camera icon */}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.92c.04-.3.07-.62.07-.95 0-.33-.03-.66-.07-1l2.16-1.68c.19-.15.24-.42.12-.64l-2.05-3.55c-.13-.22-.38-.3-.6-.22l-2.55 1.03c-.53-.41-1.1-.75-1.73-.99l-.38-2.71C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.71c-.63.24-1.2.58-1.73.99L4.85 5.09c-.22-.08-.47 0-.6.22L2.2 8.86c-.12.22-.07.49.12.64l2.16 1.68c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.16 1.69c-.19.15-.24.42-.12.64l2.05 3.55c.13.22.38.3.6.22l2.55-1.03c.53.41 1.1.75 1.73.99l.38 2.71c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.71c.63-.24 1.2-.58 1.73-.99l2.55 1.03c.22.08.47 0 .6-.22l2.05-3.55c.12-.22.07-.49-.12-.64l-2.16-1.69z" />
            </svg>
          </div>
        </div>

        <div className="profile-info">
          <p className="profile-name">Marry Doe</p>
          <p className="profile-email">Marry@Gmail.Com</p>
        </div>
      </div>

      {/* Divider */}
      <div className="profile-divider" />

      {/* Bio */}
      <div className="profile-bio-section">
        <p className="profile-bio">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
}

export default Profile;
