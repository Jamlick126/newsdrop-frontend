import React from 'react';
import PageContainer from '../components/PageContainer';

const ContactPage = () => {
    return (
        <PageContainer title="Contact Us | NewsDrop Blog">
            <section className="contact-info-section section">
                <div className="container text-center">
                    
                    <p className="lead">
                        Have a question about an article, a media inquiry, or a partnership proposal? 
                        We would love to hear from you.
                    </p>

                    <div className="contact-details mt-5">
                        <h3 className="section-subtitle">General Inquiries</h3>
                        <p>
                            **Email:** <a href="mailto:info@newsdrop.com">info@newsdrop.com</a>
                        </p>
                        
                        <h3 className="section-subtitle mt-4">Media & Press</h3>
                        <p>
                            **Email:** <a href="mailto:press@newsdrop.com">press@newsdrop.com</a>
                        </p>

                        <p className="mt-5">
                            *Note: If you are looking to subscribe to our latest posts, please visit the homepage.*
                        </p>

                    </div>
                </div>
            </section>
        </PageContainer>
    );
};

export default ContactPage;