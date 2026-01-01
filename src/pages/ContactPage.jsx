import React from 'react';
import PageContainer from '../components/PageContainer';
import NewsletterSection from '../components/NewsletterSection';


const ContactPage = () => {
    return (
        <PageContainer title="Contact Us | NewsDrop Blog">
            <section className="contact-info-section section">
                <div className="container contact-grid-wrapper d-grid">
                    
                    <div className="contact-details text-center">
                        <h2 className="title section-title">Get in Touch</h2>
                        <p className="lead">
                            Have a question about an article, a media inquiry, or a partnership proposal? 
                            We would love to hear from you.
                        </p>
                    </div>

                    

                    <div className="detail-group contact-details-first-group">
                        <h3 className="section-subtitle">General Inquiries</h3>
                        <p>
                            <i className="ri-mail-line"></i>
                            **Email:** <a href="mailto:info@newsdrop.com">info@newsdrop.com</a>
                        </p>
                    </div>

                    <div className="detail-group mt-sm">
                        <h3 className="section-subtitle">Media & Press</h3>
                        <p>
                            <i className="ri-megaphone-line"></i>
                            **Email:** <a href="mailto:press@newsdrop.com">press@newsdrop.com</a>
                        </p>
                    </div>

                    <div className="detail-group mt-sm">
                        <h3 className='section-subtitle'>Our Location</h3>
                        <p>
                            <i className="ri-map-pin-line"></i> 123 News Street, Maralal
                        </p>
                    </div>   
                </div>
                <div className="contact-form-wrapper">
                    <h2 className="title section-title">Send a Message</h2>
                    <form action="" className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" required /> 
                        </div>
                         <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" required /> 
                        </div>
                         <div className="form-group">
                            <label htmlFor="Message">Message</label>
                            <textarea id="message" rows="5" placeholder="Your Message..." required></textarea> 
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                    </form>
                </div>
            </section>
            <NewsletterSection/>
             
        </PageContainer>
    );
};

export default ContactPage;