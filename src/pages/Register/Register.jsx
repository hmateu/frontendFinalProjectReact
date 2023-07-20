import React, { useState } from "react";
import { InputField } from "../../common/inputField/inputField";
import { FormBtn } from "../../common/FormBtn/FormBtn";
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        name: "",
        surname: "",
        dni: "",
        age: "",
        pc: "",
        mobile:"",
        email: "",
        password: "",
        repeatPassword:""
    });

    const inputHandler = (e) => {
        setCredentials((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
    
    return (
        <div className="pageStyle">
        {/* {<pre>{JSON.stringify(credentials, null, 2)}</pre>} */}
            <div className="formStyle">
                <div className="viewTitle">
                    ¡Nos alegramos de conocerte!
                </div>
                <div className="askAccount">
                    Si ya tienes cuenta, <span className="link" onClick={() => navigate('/login')}>inicia sesión aquí</span>
                </div>
                <div className="dataForm">
                    <div className="textForm">
                        Nombre:
                    </div>
                    <InputField
                        type={"text"}
                        name={"name"}
                        classDesign={"inputFieldStyle"}
                        placeholder={"Nombre ..."}
                        handlerFunction={inputHandler}
                    />
                </div>
                <div className="dataForm">
                    <div className="textForm">
                        Apellidos:
                    </div>
                    <InputField
                        type={"text"}
                        name={"surname"}
                        classDesign={"inputFieldStyle"}
                        placeholder={"Apellidos ..."}
                        handlerFunction={inputHandler}
                    />
                </div>
                <div className="dataForm">
                    <div className="textForm">
                        DNI:
                    </div>
                    <InputField
                        type={"text"}
                        name={"dni"}
                        classDesign={"inputFieldStyle"}
                        placeholder={"DNI ..."}
                        handlerFunction={inputHandler}
                    />
                </div>
                <div className="dataForm">
                    <div className="textForm">
                        Edad:
                    </div>
                    <InputField
                        type={"text"}
                        name={"age"}
                        classDesign={"inputFieldStyle"}
                        placeholder={"Edad ..."}
                        handlerFunction={inputHandler}
                    />
                </div>
                <div className="dataForm">
                    <div className="textForm">
                        Código postal:
                    </div>
                    <InputField
                        type={"text"}
                        name={"pc"}
                        classDesign={"inputFieldStyle"}
                        placeholder={"Código postal ..."}
                        handlerFunction={inputHandler}
                    />
                </div>
                <div className="dataForm">
                    <div className="textForm">
                        Móvil:
                    </div>
                    <InputField
                        type={"text"}
                        name={"mobile"}
                        classDesign={"inputFieldStyle"}
                        placeholder={"Móvil ..."}
                        handlerFunction={inputHandler}
                    />
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
                        handlerFunction={inputHandler}
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
                        handlerFunction={inputHandler}
                    />
                </div>
                <div className="dataForm">
                    <div className="textForm">
                        Repite la contraseña:
                    </div>
                    <InputField
                        type={"password"}
                        name={"repeatPassword"}
                        classDesign={"inputFieldStyle"}
                        placeholder={"Repite la contraseña ..."}
                        handlerFunction={inputHandler}
                    />
                </div>
                <FormBtn
                    name={"Registrarme"}
                    pathClick={() => { }}
                />
            </div>
        </div>
    );
}