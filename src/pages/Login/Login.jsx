import React, { useState } from "react";
import { InputField } from "../../common/inputField/inputField";
import { FormBtn } from "../../common/FormBtn/FormBtn";

import { useNavigate } from "react-router-dom";
import { checkForm } from "../../utils/validateForm";

export const Login = () => {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    const [credentialsError, setCredentialsError] = useState({
        emailError: "",
        passwordError: ""
    });

    const inputHandler = (e) => {
        setCredentials((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const inputCheck = (e) => {
        let errorMessage = checkForm(e.target.name, e.target.value);
        setCredentialsError((prevState) => ({
            ...prevState,
            [e.target.name + "Error"]: errorMessage
        }));
    }

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
                        classDesign={
                            credentialsError.emailError === ""
                                ? "inputFieldStyle"
                                : "inputFieldStyle errorInputFieldStyle"
                        }
                        placeholder={"Email ..."}
                        handlerFunction={inputHandler}
                        onBlurFunction={inputCheck}
                    />
                </div>
                <div className="errorText">{credentialsError.emailError}</div>
                <div className="dataForm">
                    <div className="textForm">
                        Contraseña:
                    </div>
                    <InputField
                        type={"password"}
                        name={"password"}
                        classDesign={
                            credentialsError.passwordError === ""
                                ? "inputFieldStyle"
                                : "inputFieldStyle errorInputFieldStyle"
                        }
                        placeholder={"Contraseña ..."}
                        handlerFunction={inputHandler}
                        onBlurFunction={inputCheck}
                    />
                </div>
                <div className="errorText">{credentialsError.passwordError}</div>
                <FormBtn
                    name={"Iniciar sesión"}
                    pathClick={() => { }}
                />
            </div>
        </div>
    );
}