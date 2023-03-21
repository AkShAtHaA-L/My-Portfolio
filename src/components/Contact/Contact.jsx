import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './Contact.css';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import instagram from './../../assets/in.png';
import medium from './../../assets/me.png';
import web from './../../assets/web.png';

const Contact = () => {
    return (
        <div className='section-container'>
            <Header
                heading="Let's connect!"
                details="I'm actively looking for new opportunities, feel free to drop an email, I will definetely get back to you :)"
            />

            {/* Form section */}
            <div className='contact-form-container'>
                <form className='contact-form' action="https://formspree.io/f/meqwljak" method="POST">
                    {/* Email Id Input */}
                    <input
                        type='email'
                        placeholder='Your Email ID'
                        name='email'
                        className='input-box email-input'
                        autoComplete='off'
                    />

                    {/* Email Body */}
                    <textarea
                        type='text'
                        placeholder='Your Message'
                        name='message'
                        className='input-box body-input'
                    ></textarea>

                    {/* Submit button */}
                    <button type='submit' className='contact-btn'>
                        Send Email
                    </button>
                </form>
            </div>

            {/* Social icons */}
            <div className='social-icons-container'>
                <a href='https://github.com/AkShAtHaA-L' target="_blank" className='social-icon'>
                    <img src={github} alt='social' />
                </a>
                <a
                    href='https://www.linkedin.com/in/akshatha-acharya/' target="_blank"
                    className='social-icon'
                >
                    <img src={linkedin} alt='social' />
                </a>
            </div>

            <FooterLink
                phrase='Read more '
                toAdress='/about'
                link='about me.'
            />
        </div>
    );
};

export default Contact;
