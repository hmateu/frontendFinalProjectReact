import React, { useEffect, useState } from "react";
import { InputField } from "../../common/inputField/inputField";
import { FormBtn } from "../../common/FormBtn/FormBtn";
import { useNavigate } from "react-router-dom";
import { checkForm } from "../../utils/validateForm";
import { loginMe, myRoles } from "../../utils/apiCalls/authCalls";
import { useDispatch } from "react-redux";
import { login } from "../Users/userSlice";

export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    const [token, setToken] = useState("");

    const [credentialsError, setCredentialsError] = useState({
        emailError: "",
        passwordError: ""
    });

    const [validation, setValidation] = useState(false);

    useEffect(() => {
        credentials.email !== "" && credentials.password !== "" && credentialsError.emailError === "" && credentialsError.passwordError === ""
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
        let errorMessage = checkForm(e.target.name, e.target.value);
        setCredentialsError((prevState) => ({
            ...prevState,
            [e.target.name + "Error"]: errorMessage
        }));
    }

    const logMe = (e, credentials) => {
        loginMe(credentials)
            .then((result) => {
                setToken(result);
            })
            .catch((error) => {
                console.log(
                    "success:", false,
                    "message", "Catch de la función loginMe en Login.jsx",
                    "error", error.message
                )
            });
    }

    useEffect(() => {
        if (token) {
            navigate('/');
            myRoles(token)
                .then((result) => {
                    // console.log(`Lo que llega a Login.jsx de myRoles() -> ${result}`);
                    // Guardar los roles en Redux
                    dispatch(
                        login(
                            {
                                token: token,
                                role: result
                            }
                        )
                    );
                })
                .catch((error) => {
                    console.log(
                        "success:", false,
                        "message", "Catch de la función myRoles en Login.jsx",
                        "error", error.message
                    )
                });
        }
    }, [token]);

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
                <div className={validation ? "btnForm" : "btnForm disabled"}>
                    <FormBtn
                        name={"Iniciar sesión"}
                        pathClick={(e) => logMe(e, credentials)}
                    />
                </div>
            </div>
        </div >
    );
}