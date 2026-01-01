import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const API_BASE_URL = import.meta.env.VITE_API_URL;

const LoginPage = () => {
    const { login, } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ email: '', password:''});
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        // Add api call to the backend login endpoint

        try {
            const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                login(data.user);
                navigate('/');
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('Could not connect to server.');
        }
    };

    return (
        <section className="auth-section section section-header-offset">
            <div className="container">
                <h1 className="title section-title" data-name="NewsDrop Blog">NewsDrop </h1>

                <form onSubmit={handleSubmit} className="auth-form">
                    {error && <p style={{color: 'red', marginBottom: '1rem'}}>{error}</p>}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required/>
                    </div>
                    <button type="submit" className="btn fancy-border">Sign In</button>
                    <p className="auth-switch">
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </p>
                </form>
            </div>
        </section>
    );

};



export default LoginPage;