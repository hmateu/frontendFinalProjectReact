import React from "react";
import "./Header.css";

import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="headerStyle">
            <div className="leftHeader" onClick={() => { navigate("/") }}></div>
            <div className="rightHeader"></div>
        </div>
    );
}