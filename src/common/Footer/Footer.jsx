import React from "react";
import "./Footer.css";

import { useNavigate } from "react-router-dom";

export const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className="footerStyle">
            <div className="leftFooter" onClick={() => navigate('/')}>
                <img src="../../img/logo.png" alt="logo" />
            </div>
            <div className="rightFooter">
                Aplicación desarrollada por <strong>Héctor Mateu Ortolá</strong> como proyecto final del bootcamp <strong>Full Stack Developer</strong> impartido por <a href="https://geekshubsacademy.com/" target="_blank"><i>GeeksHubs Academy</i></a>.
            </div>
        </div>
    );
}