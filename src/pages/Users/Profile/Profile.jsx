import React, { useEffect, useState } from "react";
import './Profile.css';
import { FormBtn } from "../../../common/FormBtn/FormBtn";
import { myProfile, updateProfile } from "../../../utils/apiCalls/authCalls";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { InputField } from "../../../common/inputField/InputField";
import { checkForm } from "../../../utils/validateForm";

export const Profile = () => {

    const [user, setUser] = useState({});
    const dataRedux = useSelector(userData);
    const token = dataRedux?.credentials?.token;
    const [editing, setEditing] = useState(false);
    const [data, setData] = useState({});
    const [validation, setValidation] = useState(false);

    const [credentialsError, setCredentialsError] = useState({
        dniError: "",
        nameError: "",
        surnameError: "",
        ageError: "",
        cpError: "",
        mobileError: ""
    });

    useEffect(() => {
        credentialsError.dniError === "" && credentialsError.nameError === "" && credentialsError.surnameError === "" && credentialsError.ageError === "" && credentialsError.cpError === "" && credentialsError.mobileError === ""
            ? setValidation(true)
            : setValidation(false)
    }, [credentialsError]);

    const inputHandler = (e) => {
        setData((prevState) => ({
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

    useEffect(() => {
        if (!editing) {
            myProfile(token)
                .then(user => setUser(user))
                .catch(error => console.log(error))
        }
    }, [editing]);

    const handlerSubmit = (data, token) => {
        updateProfile(data, token)
            .then((result) => {
                setTimeout(() => {
                    setEditing(false)
                }, 500)
            })
            .catch((error) => {
                console.log(
                    "success:", false,
                    "message", "Catch de la función handlerSubmit en Profile.jsx",
                    "error", error.message
                )
            });
    };

    return (
        <div className="profileStyle">
            <div className="topSection">
                <div className="profileTitle">
                    Mi perfil
                </div>
            </div>
            {
                user
                    ? (
                        editing
                            ? (
                                <div className="midSection">
                                    <div className="dataInput">
                                        <div className="dataName">
                                            DNI
                                        </div>
                                        <div className="dataDescription">
                                            <InputField
                                                type={"text"}
                                                name={"dni"}
                                                classDesign={"inputFieldStyle"}
                                                placeholder={user.dni ? user.dni : "Introduce tu DNI ..."}
                                                handlerFunction={inputHandler}
                                                onBlurFunction={inputCheck}
                                            />
                                        </div>
                                    </div>
                                    <div className="errorText">{credentialsError.dniError}</div>
                                    <div className="dataInput">
                                        <div className="dataName">
                                            Nombre
                                        </div>
                                        <div className="dataDescription">
                                            <InputField
                                                type={"text"}
                                                name={"name"}
                                                classDesign={"inputFieldStyle"}
                                                placeholder={user.name ? user.name : "Introduce tu nombre ..."}
                                                handlerFunction={inputHandler}
                                                onBlurFunction={inputCheck}
                                            />
                                        </div>
                                    </div>
                                    <div className="errorText">{credentialsError.nameError}</div>
                                    <div className="dataInput">
                                        <div className="dataName">
                                            Apellidos
                                        </div>
                                        <div className="dataDescription">
                                            <InputField
                                                type={"text"}
                                                name={"surname"}
                                                classDesign={"inputFieldStyle"}
                                                placeholder={user.surname ? user.surname : "Introduce tus apellidos ..."}
                                                handlerFunction={inputHandler}
                                                onBlurFunction={inputCheck}
                                            />
                                        </div>
                                    </div>
                                    <div className="errorText">{credentialsError.surnameError}</div>
                                    <div className="dataInput">
                                        <div className="dataName">
                                            Edad
                                        </div>
                                        <div className="dataDescription">
                                            <InputField
                                                type={"text"}
                                                name={"age"}
                                                classDesign={"inputFieldStyle"}
                                                placeholder={user.age ? user.age : "Introduce tu edad ..."}
                                                handlerFunction={inputHandler}
                                                onBlurFunction={inputCheck}
                                            />
                                        </div>
                                    </div>
                                    <div className="errorText">{credentialsError.ageError}</div>
                                    <div className="dataInput">
                                        <div className="dataName">
                                            Código postal
                                        </div>
                                        <div className="dataDescription">
                                            <InputField
                                                type={"text"}
                                                name={"cp"}
                                                classDesign={"inputFieldStyle"}
                                                placeholder={user.cp ? user.cp : "Introduce tu código postal ..."}
                                                handlerFunction={inputHandler}
                                                onBlurFunction={inputCheck}
                                            />
                                        </div>
                                    </div>
                                    <div className="errorText">{credentialsError.cpError}</div>
                                    <div className="dataInput">
                                        <div className="dataName">
                                            Móvil
                                        </div>
                                        <div className="dataDescription">
                                            <InputField
                                                type={"text"}
                                                name={"mobile"}
                                                classDesign={"inputFieldStyle"}
                                                placeholder={user.mobile ? user.mobile : "Introduce tu móvil ..."}
                                                handlerFunction={inputHandler}
                                                onBlurFunction={inputCheck}
                                            />
                                        </div>
                                    </div>
                                    <div className="errorText">{credentialsError.mobileError}</div>
                                    <div className="dataInput">
                                        <div className="dataName">
                                            Email
                                        </div>
                                        <div className="dataDescription">
                                            {user.email}
                                        </div>
                                    </div>
                                </div>
                            )
                            : (
                                <div className="midSection">
                                    <div className="dataInput">
                                        <div className="dataName">
                                            DNI
                                        </div>
                                        <div className="dataDescription">
                                            {user.dni}
                                        </div>
                                    </div>
                                    <div className="dataInput">
                                        <div className="dataName">
                                            Nombre
                                        </div>
                                        <div className="dataDescription">
                                            {user.name}
                                        </div>
                                    </div>
                                    <div className="dataInput">
                                        <div className="dataName">
                                            Apellidos
                                        </div>
                                        <div className="dataDescription">
                                            {user.surname}
                                        </div>
                                    </div>
                                    <div className="dataInput">
                                        <div className="dataName">
                                            Edad
                                        </div>
                                        <div className="dataDescription">
                                            {user.age}
                                        </div>
                                    </div>
                                    <div className="dataInput">
                                        <div className="dataName">
                                            Código postal
                                        </div>
                                        <div className="dataDescription">
                                            {user.cp}
                                        </div>
                                    </div>
                                    <div className="dataInput">
                                        <div className="dataName">
                                            Móvil
                                        </div>
                                        <div className="dataDescription">
                                            {user.mobile}
                                        </div>
                                    </div>
                                    <div className="dataInput">
                                        <div className="dataName">
                                            Email
                                        </div>
                                        <div className="dataDescription">
                                            {user.email}
                                        </div>
                                    </div>
                                </div>
                            )
                    )
                    : (<div>CARGANDO ...</div>)
            }

            <div className="bottomSection">
                {
                    editing
                        ? (
                            <div className={validation ? "btnForm" : "btnForm disabled"}>
                                <FormBtn
                                    name={'Confirmar'}
                                    pathClick={() => { handlerSubmit(data, token) }}
                                />
                            </div>
                        )
                        : (
                            <FormBtn
                                name={'Modificar'}
                                pathClick={() => { setEditing(true) }}
                            />
                        )
                }
            </div>
        </div>
    );
};