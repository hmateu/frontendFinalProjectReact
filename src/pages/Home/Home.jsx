import React from "react";
import "./Home.css"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userData } from "../Users/userSlice";

export const Home = () => {
    const dataRedux = useSelector(userData);
    const token = dataRedux?.credentials?.token;

    const navigate = useNavigate();
    return (
        <>
            <div className="topSection">
                <div className="homePicture"></div>
            </div>
            <div className="bottomSection">
                <div className="attractions">
                    <div className="allAttractions">
                        <div className="bookTicket" onClick={() => {
                            token != "" ? (navigate('/new-tickets')) : (navigate('/login'))
                        }}>
                            Reserva tu entrada
                        </div>
                        <div className="discoverAllAttractions" onClick={() => navigate('/attractions')}>
                            Descubre nuestras atracciones
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}