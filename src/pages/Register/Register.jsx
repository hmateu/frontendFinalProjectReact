import React from "react";
import { InputField } from "../../common/inputField/inputField";
import { FormBtn } from "../../common/FormBtn/FormBtn";

export const Register = () => {
    return (
        <div className="pageStyle">
            <div className="formStyle">
                <div className="viewTitle">
                    ¡Nos alegramos de conocerte!
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
                    />
                </div>
                <div className="dataForm">
                    <div className="textForm">
                        Código postal:
                    </div>
                    <InputField
                        type={"text"}
                        name={"cp"}
                        classDesign={"inputFieldStyle"}
                        placeholder={"Código postal ..."}
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
                <div className="dataForm">
                    <div className="textForm">
                        Repite la contraseña:
                    </div>
                    <InputField
                        type={"password"}
                        name={"repeatPassword"}
                        classDesign={"inputFieldStyle"}
                        placeholder={"Repite la contraseña ..."}
                    />
                </div>
                <FormBtn
                    name={"Regístrate"}
                    pathClick={() => { }}
                />
            </div>
        </div>
    );
}