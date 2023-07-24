import React, { useState } from "react";
import './Attractions.css';
import { InputField } from "../../common/inputField/inputField";
import { AttractionCard } from "../../common/AttractionCard/AttractionCard";
import { bringAllAttractions } from "../../utils/apiCalls/attractionsCalls";

export const Attractions = () => {
    const [attractions, setAttractions] = useState([]);
    if (attractions.length === 0) {
        bringAllAttractions()
            .then((attractions) => {
                let attractionsData = JSON.parse(attractions);
                setAttractions(attractionsData);
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="attractionsStyle">
            <div className="topSection">
                <div className="sectionTitle">
                    Atracciones SueñoAventura
                </div>
                <div className="sectionDescription">
                    SueñoAventura te ofrece un sinfín de atracciones donde disfrutarás al máximo de cada momento.
                </div>

            </div>
            <div className="bottomSection">
                <div className="sectionTitle">
                    ¿Qué atracción buscas?
                </div>
                <div className="inputSection">
                    <InputField
                        type={"text"}
                        name={"searchAttraction"}
                        classDesign={"inputFieldStyle"}
                        placeholder={"Busca por nombre de atracción ..."}
                    />
                </div>

                {
                    attractions.length > 0
                        ? (
                            <div className="attractionsSections">
                                {
                                    attractions.map(attraction => {
                                        return (
                                            <AttractionCard
                                                id={attraction.id}
                                                name={`${attraction.name}`}
                                                minHeight={`Altura mínima: ${attraction.min_height} cm`}
                                                maxHeight={`Altura máxima: ${attraction.max_height} cm`}
                                            />
                                        );
                                    })
                                }
                            </div>
                        )
                        : (<div>CARGANDO ...</div>)
                }
            </div>
        </div>
    );
}