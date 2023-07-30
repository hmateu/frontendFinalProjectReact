import React from "react";
import "./Header.css";

import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

export const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="headerStyle">
            <div className="leftHeader" onClick={() => { navigate("/") }}>
                <img src="../../img/logo.png" alt="logo" />
            </div>
            <div className="rightHeader">
                <Navbar />
            </div>
        </div>
    );
}