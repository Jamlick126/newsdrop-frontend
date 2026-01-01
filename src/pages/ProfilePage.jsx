import React from 'react';
import { useAuth } from '../context/AuthContext';

const ProfilePage = () => {
    const { user, logout } = useAuth();

    if (!user) return null;

    return (
        <section className="profile-section section section-header-offset">
            <div className="container">
                <div className="profile-card">
                    <h1 className="title section-title">Your Profile</h1>
                <hr/>
                <div className="profile-details" style={{ marginTop: '2rem'}}>
                    <div className="form-group">
                        <label>Username</label>
                        <p className="profile-info-text"><strong>{user.username}</strong></p>
                    </div>

                    <div className="form-group">
                        <label>Email Address</label>
                        <p className="profile-info-text">{user.email}</p>
                    </div>

                    <div className="form-group">
                        <label>User ID</label>
                        <p className="profile-info-text">#{user.id}</p>
                    </div>
                </div>

                <button 
                    onClick={logout}
                    className="btn auth-button"
                    style={{ marginTop: '2rem', backgroundColor:'#e74c3c'}}>
                        Log Out
                </button>
                </div>
            </div>
        </section>
    );
};

export default ProfilePage;