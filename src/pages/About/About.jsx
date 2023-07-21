import React from "react";
import './About.css';

export const About = () => {
    return (
        <div className="aboutUs">
            <div className="topSection">
                SOBRE NOSOTROS
            </div>
            <div className="midSection">
                <div className="information">
                    <div className="cardInformation">
                        <div className="titleCardInformation">
                            <div>Avenida Los manzanares, km2 -</div>
                            <div>41257 Caravas (Rias)</div>
                        </div>
                        <div className="aboutUsInformation">
                            <div>Sueño Aventura es el destino perfecto para pasar un fantástico día en familia, con tu pareja o con amigos, mientras gozas de la mejor oferta de ocio del sur de Europa; y todo en un entorno con un clima perfecto donde te lo pasarás en grande mientras disfrutas del sol, la playa y la exquisita gastronomía mediterránea.</div>
                            <div>Además, gracias a la excepcional ubicación de Sueño Aventura, podrás completar tus vacaciones en un entorno de playa con zonas comerciales para tus compras, instalaciones deportivas, actividades al aire libre y restaurantes donde podrás descubrir la deliciosa gastronomía mediterránea.</div>
                        </div>
                    </div>
                </div>
                <div className="aboutUsPicture"></div>
            </div>
        </div>
    );
}