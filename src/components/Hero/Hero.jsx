import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-gradient" />
            <div className="hero-content">
                <div className="hero-card glass-card">
                    <h1 className="hero-title animate-fade-in">MedHive</h1>
                    <h2 className="hero-moto animate-fade-in">Your Health, Unified.</h2>
                    <p className="hero-subtitle animate-fade-in-delay">
                        MedHive breaks down clinic walls. Instantly connect any doctor in
                        any partner clinic to your secure, unified medical timeline using
                        a single Med ID, ensuring continuous, safe, and informed care.
                    </p>
                    <div className="hero-buttons animate-slide-up">
                        <a href="#pharma">
                            <button className="btn-primary glass-btn">Get Started</button>
                        </a>
                        <a href="#clinics">
                            <button className="btn-secondary glass-btn">See How It Works</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
