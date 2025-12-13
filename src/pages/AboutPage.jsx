import React from 'react';
import PageContainer  from '../components/PageContainer';

const AboutPage = () => {
    return (
        // 💡 Use the PageContainer here
        <PageContainer title="About Us | NewsDrop Blog"> 
            <section className="about-section section">
                <div className="container">
                    
                    <h2 className="section-title">Our Mission</h2>
                    <p>
                        NewsDrop was founded on the principle of delivering clear, concise, 
                        and unbiased analysis across technology, politics, and education. 
                        We believe that informed citizens are the bedrock of a successful society.
                    </p>

                    <h2 className="section-title mt-4">Our Values</h2>
                    <ul>
                        <li>**Integrity:** We commit to factual reporting and transparency.</li>
                        <li>**Clarity:** Complex topics are broken down into easy-to-understand articles.</li>
                        <li>**Community:** We foster respectful dialogue and diverse perspectives.</li>
                    </ul>

                    <h2 className="section-title mt-4">The Team</h2>
                    <div className="team-grid">
                        <p>Information about the primary authors and contributors will go here.</p>
                    </div>

                </div>
            </section>
        </PageContainer>
    );
};

export default AboutPage;