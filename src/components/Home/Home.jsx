import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import homeAnime from './../../assets/home_anime_girl.gif';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className='home-container'>
                <div className='header-text'>
                    <h1>Hi there!</h1>
                    <h2>This is Akshatha.L</h2>
                    <p>Software developer with a goal-driven creative mindset and passion for learning and innovating.</p>
                </div>
                <div className='head-btns'>
                    <a href='https://drive.google.com/file/d/1RmjF-Lqf7xEeMZKNz01SwOtX0ak2Ij87/view?usp=share_link' target="_blank" className='btn btn-white'>
                        <p className='btn-text'>My Resume</p>
                    </a>
                    <Link to='/contact' className='btn btn-transparent'>
                        <p className='btn-text'>Connect with me</p>
                    </Link>
                </div>
                <div className='splash-image'>
                    <img
                        src={homeAnime}
                        alt='animation'
                        className='home-anime'
                    />
                </div>
            </div>
        );
    }
}

export default Home;
