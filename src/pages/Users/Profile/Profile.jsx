import React from "react";
import './Profile.css';
import { FormBtn } from "../../../common/FormBtn/FormBtn";

export const Profile = () => {
    return (
        <div className="profileStyle">
            <div className="topSection">
                <div className="profileTitle">
                    Mi perfil
                </div>
            </div>
            <div className="midSection">
                <div className="dataInput">
                    <div className="dataName">
                        DNI
                    </div>
                    <div className="dataDescription">
                        20315441A
                    </div>
                </div>
                <div className="dataInput">
                    <div className="dataName">
                        Nombre
                    </div>
                    <div className="dataDescription">
                        Héctor
                    </div>
                </div>
                <div className="dataInput">
                    <div className="dataName">
                        Apellidos
                    </div>
                    <div className="dataDescription">
                        Mateu Ortolá
                    </div>
                </div>
                <div className="dataInput">
                    <div className="dataName">
                        Edad
                    </div>
                    <div className="dataDescription">
                        29
                    </div>
                </div>
                <div className="dataInput">
                    <div className="dataName">
                        Código postal
                    </div>
                    <div className="dataDescription">
                        42511
                    </div>
                </div>
                <div className="dataInput">
                    <div className="dataName">
                        Móvil
                    </div>
                    <div className="dataDescription">
                        621753210
                    </div>
                </div>
                <div className="dataInput">
                    <div className="dataName">
                        Email
                    </div>
                    <div className="dataDescription">hmateu.ortola@gmail.com</div>
                </div>
            </div>
            <div className="bottomSection">
                <FormBtn
                name={'Modificar'}
                /> 
            </div>
        </div>
    );
};