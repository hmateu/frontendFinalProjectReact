import React from "react";
import './Attraction-detail.css';
import { useNavigate } from 'react-router-dom';

export const AttractionDetail = () => {
    const navigate = useNavigate();
    return (
        <div className="attractionDetailStyle">
            <div className="topSection">
                <div className="attractionInformation">
                    <div className="attractionName">
                        Nombre de la atracción
                    </div>
                    <div className="attractionData">
                        <div className="cardData">
                            <div className="minHeight">
                                Altura mínima: 140 cm
                            </div>
                            <div className="maxHeight">
                                Altura máxima: 195 cm
                            </div>
                            <div className="length">
                                Recorrido: 140 m
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="midSection">
                <div className="attractionInformation">
                    <div className="attractionDescription">
                        Súbete a nuestro tren para conocer nuestro parque al completo. Disfrutarás de un paseo donde podrás apreciar todo el parque y organizar mejor tu día. Es ideal para conocernos un poco mejor y aprovechar el día al máximo.
                    </div>
                </div>
            </div>
            <div className="bottomSection">
                <div className="otherAttractionsTitle">
                    Explorar otras atracciones
                </div>
                <div className="allAttractionsButton" onClick={() => navigate('/attractions')}>
                    Ver todas
                </div>
            </div>
        </div>
    );
};