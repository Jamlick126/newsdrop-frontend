import React from 'react';
import PageContainer  from '../components/PageContainer';
import NewsletterSection from '../components/NewsletterSection';


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

                    <h2 className="section-title mt-md">Our Values</h2>
                    <ul className="about-values-list">
                        <li>**Integrity:** We commit to factual reporting and transparency.</li>
                        <li>**Clarity:** Complex topics are broken down into easy-to-understand articles.</li>
                        <li>**Community:** We foster respectful dialogue and diverse perspectives.</li>
                    </ul>

                    <h2 className="section-title mt-md">The Team</h2>
                    <div className="team-grid d-grid">
                        {/* Team Member 1 */}
                        <div className="team-member-card">
                            <img src="/assets/team1.png" alt="Jamlick Kariuki" className="team-member-img"/>
                            <h4 className="member-name">Jamlick Kariuki</h4>
                            <p className="member-role">Founder & Lead Editor</p>
                            <p className="member-bio">Focused on technology and basketball journalism. Jamlick drives our commitment to qualify reporting.</p> 
                        </div>
                        {/* Team Member 2*/}
                         <div className="team-member-card">
                            <img src="/assets/team2.png" alt="Edwin Sangale" className="team-member-img"/>
                            <h4 className="member-name">Edwin Sangale</h4>
                            <p className="member-role">Head of Investigations</p>
                            <p className="member-bio">Edwin specializes in travel and political reporting, ensuring our content is well-researched and verified.</p> 
                        </div>

                    </div>

                </div>
            </section>
            <NewsletterSection/>
        </PageContainer>
    );
};

export default AboutPage;