import React, { useEffect, useState } from "react";
// import './AdminAttractions.css';
import { useSelector } from "react-redux";
import { userData } from "../Users/userSlice";
import { bringAllAttractionsByAdmin } from "../../utils/apiCalls/attractionsCalls";
import { AdminAttraction } from "../../common/AdminAttraction/AdminAttraction";

export const AdminAttractions = () => {
    const dataRedux = useSelector(userData);
    const token = dataRedux?.credentials?.token;
    const [attractions, setAttractions] = useState([]);

    useEffect(() => {
        if (attractions.length === 0) {
            bringAllAttractionsByAdmin(token)
                .then((attractions) => {
                    let attractionsData = JSON.parse(attractions);
                    setAttractions(Object.values(attractionsData));
                })
                .catch(error => console.log(error))
        }
    }, [token, attractions]);

    return (
        <div className="attractionsStyle">
            <div className="topSection">
                <div className="sectionTitle">
                    Atracciones SueñoAventura (admin)
                </div>
                <div className="sectionDescription">
                    SueñoAventura te ofrece un sinfín de atracciones donde disfrutarás al máximo de cada momento.
                </div>

            </div>
            <div className="bottomSection">
                {
                    attractions.length > 0
                        ? (
                            <div className="attractionsSections">
                                {
                                    attractions.map(attraction => {
                                        return (
                                            <div key={attraction[0].attraction.id}>
                                                <AdminAttraction
                                                    id={attraction[0].attraction.id}
                                                    picture={<img src={attraction[0].attraction.picture} alt={attraction.name} />}
                                                    name={attraction[0].attraction.name}
                                                    employee1={attraction[0].user.name}
                                                    employee2={attraction[1].user.name}
                                                />
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        )
                        : (<div className="loading">CARGANDO ...</div>)
                }
            </div>
        </div>
    );
}