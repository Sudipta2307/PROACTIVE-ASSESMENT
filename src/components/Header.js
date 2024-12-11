import React, { useState } from 'react'; 
import './Header.css';
import Vector from '../assets/provital.jpg'; 

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    return (
        <header className="header">
            {/* Logo Section */}
            <div className="logo">
                <img src={Vector} alt="ProVital" /> 
            </div>

            {/* Navigation Links */}
            <nav className="nav-links">
                <a href="/">List your practice</a>
                <span>|</span>
                <a href="/">For Employers</a>
                <span>|</span>
                <a href="/">Courses</a>
                <span>|</span>
                <a href="/">Books</a>
                <span>|</span>
                <a href="/">Speakers</a>
            </nav>

            {/* Dropdown Menu for Login/Signup */}
            <div className="dropdown">
                <button className="dropdown-toggle" onClick={toggleDropdown}>
                    Login / Signup &#x25BC;
                </button>
                {isDropdownOpen && (
                    <div className="dropdown-menu">
                        <div className="dropdown-item">
                            <strong>Doctor</strong>
                            <a href="/DoctorLogin"><u>Login</u></a>
                            <a href="/DoctorSignup"><u>Sign up</u></a>
                        </div>
                        <div className="dropdown-item">
                            <strong>Patients</strong>
                            <a href="/PatientLogin"><u>Login</u></a>
                            <a href="/PatientSignup"><u>Sign up</u></a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
