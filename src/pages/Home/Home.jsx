import React from "react";
import "./Home.css"

export const Home = () => {
    return (
        <div className="pageStyle">
            <div className="topSection">
                <div className="homePicture"></div>
            </div>
            <div className="bottomSection">
                <div className="attractions">
                    <div className="allAttractions">
                        <div className="bookTicket">
                            Reserva tu entrada
                        </div>
                        <div className="discoverAllAttractions">
                            Descubre nuestras atracciones
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}