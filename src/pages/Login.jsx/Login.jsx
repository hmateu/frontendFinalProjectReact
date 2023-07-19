import React from "react";
import { InputField } from "../../common/inputField/inputField";
import { FormBtn } from "../../common/FormBtn/FormBtn";

export const Login = () => {
    return (
        <div className="pageStyle">

            <div className="formStyle">
                <div className="viewTitle">
                    ¡Te damos la bienvenida!
                </div>
                <div className="dataForm">
                    <div className="textForm">
                        Usuario:
                    </div>
                    <InputField
                        type={"text"}
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