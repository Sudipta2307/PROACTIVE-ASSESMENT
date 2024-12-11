import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
    return (
        <div className="login-page">
            <header className="login-header">
                <div className="logo">
                    <img src="/assets/logo.png" alt="ProVital Logo" />
                    <span>ProVital</span>
                </div>
                <button className="close-btn">&times;</button>
            </header>
            <div className="login-sections">
                <div className="login-section">
                    <h3>Doctor</h3>
                    <div className="auth-links">
                        <a href="/doctor-login">Login</a>
                        <a href="/doctor-signup">Sign up</a>
                    </div>
                </div>
                <div className="login-section">
                    <h3>Patients</h3>
                    <div className="auth-links">
                        <a href="/patient-login">Login</a>
                        <a href="/patient-signup">Sign up</a>
                    </div>
                </div>
            </div>
            <nav className="nav-links">
                <a href="/doctors">Doctors <span>&rarr;</span></a>
                <a href="/practice">List your practice <span>&rarr;</span></a>
                <a href="/employers">For Employers <span>&rarr;</span></a>
                <a href="/courses">Courses <span>&rarr;</span></a>
                <a href="/books">Books <span>&rarr;</span></a>
                <a href="/speakers">Speakers <span>&rarr;</span></a>
            </nav>
        </div>
    );
};

export default LoginPage;
