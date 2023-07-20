import React from "react";
import { InputField } from "../../common/inputField/inputField";
import { FormBtn } from "../../common/FormBtn/FormBtn";

import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="pageStyle">
            <div className="formStyle">
                <div className="viewTitle">
                    ¡Te damos la bienvenida!
                </div>
                <div className="askAccount">
                    Si aún no tienes cuenta, <span className="link" onClick={() => navigate('/register')}>regístrate aquí</span>
                </div>
                <div className="dataForm">
                    <div className="textForm">
                        Email:
                    </div>
                    <InputField
                        type={"email"}
                        name={"email"}
                        classDesign={"inputFieldStyle"}
                        placeholder={"Email ..."}
                    />
                </div>
                <div className="dataForm">
                    <div className="textForm">
                        Contraseña:
                    </div>
                    <InputField
                        type={"password"}
                        name={"password"}
                        classDesign={"inputFieldStyle"}
                        placeholder={"Contraseña ..."}
                    />
                </div>
                <FormBtn
                    name={"Iniciar sesión"}
                    pathClick={() => { }}
                />
            </div>
        </div>
    );
}