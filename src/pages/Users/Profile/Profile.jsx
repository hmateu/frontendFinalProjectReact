import React, { useEffect, useState } from "react";
import './Profile.css';
import { FormBtn } from "../../../common/FormBtn/FormBtn";
import { myProfile } from "../../../utils/apiCalls/authCalls";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { InputField } from "../../../common/inputField/InputField";

export const Profile = () => {

    const [user, setUser] = useState({});
    const dataRedux = useSelector(userData);
    const token = dataRedux?.credentials?.token;
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        if (!editing) {
            myProfile(token)
                .then(user => setUser(user))
                .catch(error => console.log(error))
        }
    }, [editing]);

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
                                                type={"password"}
                                                name={"password"}
                                                classDesign={"inputFieldStyle"}
                                                placeholder={user.dni ? user.dni : "Introduce tu DNI ..."}
                                                handlerFunction={() => { }}
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
                                                type={"password"}
                                                name={"password"}
                                                classDesign={"inputFieldStyle"}
                                                placeholder={user.name ? user.name : "Introduce tu nombre ..."}
                                                handlerFunction={() => { }}
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
                                                type={"password"}
                                                name={"password"}
                                                classDesign={"inputFieldStyle"}
                                                placeholder={user.surname ? user.surname : "Introduce tus apellidos ..."} handlerFunction={() => { }}
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
                                                type={"password"}
                                                name={"password"}
                                                classDesign={"inputFieldStyle"}
                                                placeholder={user.age ? user.age : "Introduce tu edad ..."} handlerFunction={() => { }}
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
                                                type={"password"}
                                                name={"password"}
                                                classDesign={"inputFieldStyle"}
                                                placeholder={user.cp ? user.cp : "Introduce tu código postal ..."} handlerFunction={() => { }}
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
                                                type={"password"}
                                                name={"password"}
                                                classDesign={"inputFieldStyle"}
                                                placeholder={user.mobile ? user.mobile : "Introduce tu móvil ..."} handlerFunction={() => { }}
                                                onBlurFunction={() => { }}
                                            />
                                        </div>
                                    </div>
                                    <div className="dataInput">
                                        <div className="dataName">
                                            Email
                                        </div>
                                        <div className="dataDescription">
                                            <InputField
                                                type={"password"}
                                                name={"password"}
                                                classDesign={"inputFieldStyle"}
                                                placeholder={user.email ? user.email : "Introduce tu email ..."} handlerFunction={() => { }}
                                                onBlurFunction={() => { }}
                                            />
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
                                pathClick={() => { setEditing(false) }}
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