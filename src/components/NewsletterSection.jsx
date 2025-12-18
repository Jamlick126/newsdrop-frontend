import React, { useState } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:10000";

const NewsletterSection = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('Submitting...');

        try {
            const response = await fetch(`${API_BASE_URL}/api/subscribers`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email}),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message || 'Thank you for subscribing! Check your inbox.');
                setEmail('');
            } else {
                setMessage(`Error: ${data.message || 'Subscription failed'}`);
            }
        } catch(error) {
            setMessage('Network error. Please try again later.');
            console.error('Subscription error:', error);
        }
    };

    return (
        <section className="newsletter-section section">
            <div className="container newsletter-container">
                <h2 className="title section-title" data-name="Stay Informed">Join Our Newsletter</h2>
                <p className="text-center newsletter-pitch">
                    Get the latest analysis and featured posts delivered to your inbox every week. 
                </p>
                <form className="newsletter-form" onSubmit={handleSubmit}>
                    
                         <input 
                        type="email" 
                        placeholder="Enter your email address" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-label="Email address for newsletter signup"
                        className="newsletter-input"
                        />
                    
                    <button type="submit" className="btn fancy-border">Subscribe</button>
                </form>

                {message && <p className={`subscription-message ${message.startsWith('Error') ? 'error': 'success'}`}>{message}</p>}
            </div>
        </section>
    );
};

export default NewsletterSection;