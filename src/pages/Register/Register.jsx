import React, { useEffect, useState } from "react";
import { InputField } from "../../common/inputField/inputField";
import { FormBtn } from "../../common/FormBtn/FormBtn";
import { useNavigate } from "react-router-dom";
import { checkForm } from "../../utils/validateForm";
import { registerMe } from "../../utils/apiCalls/authCalls";
import { useSelector } from "react-redux";
import { userData } from "../Users/userSlice";

export const Register = () => {
    const navigate = useNavigate();
    const [validation, setValidation] = useState(false);
    const dataRedux = useSelector(userData);
    const token = dataRedux?.credentials?.token;

    const [credentials, setCredentials] = useState({
        name: "",
        surname: "",
        dni: "",
        age: "",
        cp: "",
        mobile: "",
        email: "",
        password: ""
    });

    const [credentialsError, setCredentialsError] = useState({
        nameError: "",
        surnameError: "",
        dniError: "",
        ageError: "",
        cpError: "",
        mobileError: "",
        emailError: "",
        passwordError: ""
    });

    useEffect(() => {
        credentials.name !== "" && credentials.surname !== "" && credentials.dni !== "" && credentials.age !== "" && credentials.cp !== "" && credentials.mobile !== "" && credentials.email !== "" && credentials.password !== "" && credentialsError.nameError === "" && credentialsError.surnameError === "" && credentialsError.dniError === "" && credentialsError.ageError === "" && credentialsError.cpError === "" && credentialsError.mobileError === "" && credentialsError.emailError === "" && credentialsError.passwordError === ""
            ? setValidation(true)
            : setValidation(false)
    }, [credentials, credentialsError]);

    const inputHandler = (e) => {
        setCredentials((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const inputCheck = (e) => {
        let errorMessage = checkForm(e.target.name, e.target.value)
        setCredentialsError((prevState) => ({
            ...prevState,
            [e.target.name + "Error"]: errorMessage
        }));
    }

    const registMe = (credentials) => {
        registerMe(credentials)
            .then(() => {
                navigate('/')
            })
            .catch((error) => {
                console.log(
                    "success:", false,
                    "message", "Catch de la función registMe en Register.jsx",
                    "error", error.message
                )
            });
    }

    return (
        <div className="pageStyle">
            <div className="formStyle">
                <div className="viewTitle">
                    ¡Nos alegramos de conocerte!
                </div>
                {
                    !token && (
                        <div className="askAccount">
                            Si ya tienes cuenta, <span className="link" onClick={() => navigate('/login')}>inicia sesión aquí</span>
                        </div>
                    )
                }
                <div className="dataForm">
                    <div className="textForm">
                        Nombre:
                    </div>
                    <InputField
                        type={"text"}
                        name={"name"}
                        classDesign={
                            credentialsError.nameError === ""
                                ? "inputFieldStyle"
                                : "inputFieldStyle errorInputFieldStyle"
                        }
                        placeholder={"Nombre ..."}
                        handlerFunction={inputHandler}
                        onBlurFunction={inputCheck}
                    />
                </div>
                <div className="errorText">{credentialsError.nameError}</div>
                <div className="dataForm">
                    <div className="textForm">
                        Apellidos:
                    </div>
                    <InputField
                        type={"text"}
                        name={"surname"}
                        classDesign={
                            credentialsError.surnameError === ""
                                ? "inputFieldStyle"
                                : "inputFieldStyle errorInputFieldStyle"
                        }
                        placeholder={"Apellidos ..."}
                        handlerFunction={inputHandler}
                        onBlurFunction={inputCheck}
                    />
                </div>
                <div className="errorText">{credentialsError.surnameError}</div>
                <div className="dataForm">
                    <div className="textForm">
                        DNI:
                    </div>
                    <InputField
                        type={"text"}
                        name={"dni"}
                        classDesign={
                            credentialsError.dniError === ""
                                ? "inputFieldStyle"
                                : "inputFieldStyle errorInputFieldStyle"
                        }
                        placeholder={"DNI ..."}
                        handlerFunction={inputHandler}
                        onBlurFunction={inputCheck}
                    />
                </div>
                <div className="errorText">{credentialsError.dniError}</div>
                <div className="dataForm">
                    <div className="textForm">
                        Edad:
                    </div>
                    <InputField
                        type={"text"}
                        name={"age"}
                        classDesign={
                            credentialsError.ageError === ""
                                ? "inputFieldStyle"
                                : "inputFieldStyle errorInputFieldStyle"
                        }
                        placeholder={"Edad ..."}
                        handlerFunction={inputHandler}
                        onBlurFunction={inputCheck}
                    />
                </div>
                <div className="errorText">{credentialsError.ageError}</div>
                <div className="dataForm">
                    <div className="textForm">
                        Código postal:
                    </div>
                    <InputField
                        type={"text"}
                        name={"cp"}
                        classDesign={
                            credentialsError.cpError === ""
                                ? "inputFieldStyle"
                                : "inputFieldStyle errorInputFieldStyle"
                        }
                        placeholder={"Código postal ..."}
                        handlerFunction={inputHandler}
                        onBlurFunction={inputCheck}
                    />
                </div>
                <div className="errorText">{credentialsError.cpError}</div>
                <div className="dataForm">
                    <div className="textForm">
                        Móvil:
                    </div>
                    <InputField
                        type={"text"}
                        name={"mobile"}
                        classDesign={
                            credentialsError.mobileError === ""
                                ? "inputFieldStyle"
                                : "inputFieldStyle errorInputFieldStyle"
                        }
                        placeholder={"Móvil ..."}
                        handlerFunction={inputHandler}
                        onBlurFunction={inputCheck}
                    />
                </div>
                <div className="errorText">{credentialsError.mobileError}</div>
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
                <div className={validation ? "btnForm" : "btnForm disabled"}>
                    <FormBtn
                        name={"Registrarme"}
                        pathClick={(e) => registMe(credentials)}
                    />
                </div>
            </div>
        </div>
    );
}