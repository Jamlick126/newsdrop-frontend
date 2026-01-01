import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const API_BASE_URL = import.meta.env.VITE_API_URL;

const SignupPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'},
                    body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                login(data.user);
                navigate('/');
            } else {
                console.error("Signup failed:", data.message);
                alert(`Signup failed: ${data.message || 'Please check your information.'}`);
            }
        } catch (error) {
            console.error("Network error during signup:", error);
            alert("An error occurred during registration. Please try again");
        }
        
    };

    return (
        <section className="auth-section section section-header-offset">
            <div className="container">
                <h1 className="title section-title" data-name="NewsDrop Blog">NewsDrop</h1>
                
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    
                    <button type="submit" className="btn fancy-border">Sign Up</button>

                    <p className="auth-switch">
                        Already have an account? <Link to="/login">Log In</Link>
                    </p>
                </form>

            </div>
        </section>
    );
};

export default SignupPage;