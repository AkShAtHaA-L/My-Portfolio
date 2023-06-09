import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './About.css';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me.'
                details='Devops Engineer | Developer | Learner'
            />

            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Devops Engineer</h3>
                    <p className='about-details'>
                        As a DevOps Engineer with 3.5 years of experience, I have developed expertise in cloud and software development. My key skills include implementing cloud-based infrastructure, managing continuous integration, and automating software deployments.
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Developer</h3>
                    <p className='about-details'>
                        As a DevOps Engineer with extensive experience in Python development, I have a proven track record of delivering reliable and scalable infrastructure solutions. I have used python to build robust automation tools, streamline deployment processes, and optimize system performance.
                    </p>
                </div>
                <div className='about-main-right'>
                    {/* Sub section 3 */}
                    <h3 className='about-sub-head'>Learner</h3>
                    <p className='about-details'>
                        I am constantly learning and growing in my field. I am always eager to expand my skillset and take on new challenges. I am excited to take on new development challenges and contribute to building innovative solutions.
                    </p>
                    <h3 className='about-sub-head'>Hobbies</h3>
                    <p className='about-details'>
                       I am an avid reader. In my free time I am almost always with a book, I also enjoy travelling and exploring places.
                    </p>
                </div>
            </div>

            <FooterLink
                phrase='Check out my '
                link='projects!'
                toAdress='/projects'
            />
        </div>
    );
};

export default About;
