import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, userData } from "../../pages/Users/userSlice";

export const Navbar = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const dispatch = useDispatch();

    const dataRedux = useSelector(userData);
    const token = dataRedux?.credentials?.token;
    const role = dataRedux.data.role;

    const toggleMobileMenu = () => {
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
                <li onClick={() => navigate('/attractions')}>Atracciones</li>
                <li onClick={() => navigate('/about')}>Sobre Nosotros</li>

                {token && (
                    <li onClick={() => navigate('/profile')}>Mi perfil</li>
                )}
                {
                    !dataRedux?.credentials?.token
                        ? (
                            <>
                                <li className="loginRegister" onClick={() => navigate('/login')}>Login</li>
                                <li className="loginRegister" onClick={() => navigate('/register')}>Regístrate</li>
                            </>
                        )
                        : (
                            <>
                                {
                                    // admin
                                    role === 1
                                        ? (
                                            <li onClick={() => navigate('/admin-panel')}>
                                                <span class="material-icons-outlined">
                                                    settings
                                                </span>
                                            </li>
                                        )
                                        : (
                                            <li onClick={() => navigate('/my-tickets')}>Mis entradas</li>
                                        )
                                }<li className="loginRegister" onClick={() => { dispatch(logout()); navigate('/login') }}>Salir</li>
                            </>
                        )
                }


            </ul>
            <div className={`hamburgerContainer ${isMobileMenuOpen ? 'opened' : ''}`}>
                <button onClick={toggleMobileMenu}>
                    <span class="material-icons-outlined cross">
                        close
                    </span>
                </button>
                <ul>
                    <li onClick={() => { toggleMobileMenu(); navigate('/') }}>Inicio</li>
                    <li onClick={() => { toggleMobileMenu(); navigate('/attractions') }}>Atracciones</li>
                    <li onClick={() => { toggleMobileMenu(); navigate('/about') }}>Sobre Nosotros</li>

                    {token && (
                        <li onClick={() => { toggleMobileMenu(); navigate('/profile') }}>Mi perfil</li>
                    )}
                    {
                        !dataRedux?.credentials?.token
                            ? (
                                <>
                                    <li className="loginRegister" onClick={() => { toggleMobileMenu(); navigate('/login') }}>Login</li>
                                    <li className="loginRegister" onClick={() => { toggleMobileMenu(); navigate('/register') }}>Regístrate</li>
                                </>
                            )
                            : (
                                <>
                                    {
                                        // admin
                                        role === 1
                                            ? (
                                                <li onClick={() => { toggleMobileMenu(); navigate('/admin-panel') }}>
                                                    <span class="material-icons-outlined">
                                                        settings
                                                    </span>
                                                </li>
                                            )
                                            : (
                                                <li onClick={() => { toggleMobileMenu(); navigate('/my-tickets') }}>Mis entradas</li>
                                            )
                                    }<li className="loginRegister" onClick={() => { toggleMobileMenu(); dispatch(logout()); navigate('/login') }}>Salir</li>
                                </>
                            )
                    }


                </ul>
            </div>
        </div>
    );
}