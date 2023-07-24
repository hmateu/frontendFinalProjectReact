import React from "react";
import "./Home.css"
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="topSection">
                <div className="homePicture"></div>
            </div>
            <div className="bottomSection">
                <div className="attractions">
                    <div className="allAttractions">
                        <div className="bookTicket">
                            Reserva tu entrada
                        </div>
                        <div className="discoverAllAttractions" onClick={()=>navigate('/attractions')}>
                            Descubre nuestras atracciones
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}