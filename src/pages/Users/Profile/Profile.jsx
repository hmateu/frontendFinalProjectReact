import React, { useEffect, useState } from "react";
import './Profile.css';
import { FormBtn } from "../../../common/FormBtn/FormBtn";
import { myProfile, updateProfile } from "../../../utils/apiCalls/authCalls";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { InputField } from "../../../common/inputField/InputField";

export const Profile = () => {

    const [user, setUser] = useState({});
    const dataRedux = useSelector(userData);
    const token = dataRedux?.credentials?.token;
    const [editing, setEditing] = useState(false);
    const [data, setData] = useState({});

    const inputHandler = (e) => {
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
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
                                                onBlurFunction={() => { }}
                                            />
                                        </div>
                                    </div>
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
                                                onBlurFunction={() => { }}
                                            />
                                        </div>
                                    </div>
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
                                                onBlurFunction={() => { }}
                                            />
                                        </div>
                                    </div>
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
                                                onBlurFunction={() => { }}
                                            />
                                        </div>
                                    </div>
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
                                                onBlurFunction={() => { }}
                                            />
                                        </div>
                                    </div>
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
                                                onBlurFunction={() => { }}
                                            />
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
                            <FormBtn
                                name={'Confirmar'}
                                pathClick={() => { handlerSubmit(data, token) }}
                            />
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