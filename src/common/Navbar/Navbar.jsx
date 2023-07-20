import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        console.log(isMobileMenuOpen);
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="navMenu">
            <button onClick={toggleMobileMenu}>
                <span class="material-icons-outlined burgerIcon">
                    menu
                </span>
            </button>
            <ul>
                <li onClick={() => navigate('/')}>Inicio</li>
                <li className = "loginRegister" onClick={() => navigate('/login')}>Login</li>
                <li className = "loginRegister" onClick={() => navigate('/register')}>Register</li>
            </ul>
            <div className={`hamburgerContainer ${isMobileMenuOpen ? 'opened' : ''}`}>
                <button onClick={toggleMobileMenu}>
                    <span class="material-icons-outlined cross">
                        close
                    </span>
                </button>
                <ul>
                    <li onClick={() => { toggleMobileMenu(); navigate('/') }}>Inicio</li>
                    <li className = "loginRegister" onClick={() => { toggleMobileMenu(); navigate('/login') }}>Login</li>
                    <li className = "loginRegister" onClick={() => { toggleMobileMenu(); navigate('/register') }}>Register</li>
                </ul>
            </div>
        </div>
    );
}