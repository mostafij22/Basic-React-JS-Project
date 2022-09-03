import React from 'react';
import './HeroImg.css'
import introImg from '../assets/intro-bg.jpg'
import { Link } from 'react-router-dom';

const HeroImg = () => {
    return (
        <div className='hero'>
            <div className="mask">
                <img className='into-img' src={introImg} alt="" />
            </div>
            <div className="content">
                <p>Hi, I'M A FRELANCER</p>
                <h1>React Developer.</h1>
                <div>
                    <Link to="/project" className='btn'>Project</Link>
                    <Link to="/contact" className='btn btn-light'>Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default HeroImg;
