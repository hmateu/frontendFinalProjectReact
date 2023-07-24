import React, { useEffect, useState } from "react";
import './Attraction-detail.css';
import { useNavigate, useParams } from "react-router-dom";
import { bringAttractionById } from "../../../utils/apiCalls/attractionsCalls";

export const AttractionDetail = () => {
    const navigate = useNavigate();
    let { id } = useParams();

    const [attraction, setAttraction] = useState({});

    useEffect(() => {
        bringAttractionById(id)
            .then((attraction) => {
                let attractionData = JSON.parse(attraction);
                setAttraction(attractionData);
            })
            .catch(error => console.log(error))
    }, []);

    return (
        <div className="attractionDetailStyle">
            <div className="topSection">
                <div className="attractionInformation">
                    <div className="attractionName">
                        {attraction.name}
                    </div>
                    <div className="attractionData">
                        <div className="cardData">
                            <div className="minHeight">
                                Altura mínima: {attraction.min_height} cm
                            </div>
                            <div className="maxHeight">
                                Altura máxima: {attraction.max_height} cm
                            </div>
                            <div className="length">
                                Recorrido: {attraction.length} m
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="midSection">
                <div className="attractionInformation">
                    <div className="attractionDescription">
                        {attraction.description}
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