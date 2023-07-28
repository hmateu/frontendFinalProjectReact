import React, { useState } from "react";
import './Users.css';
import { UserCard } from "../../common/UserCard/UserCard";
import { bringAllUsers } from "../../utils/apiCalls/usersCalls";
import { useSelector } from "react-redux";
import { userData } from "./userSlice";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const dataRedux = useSelector(userData);
    const token = dataRedux?.credentials?.token;

    if (users.length === 0) {
        bringAllUsers(token)
            .then((users) => {
                let usersData = JSON.parse(users);
                setUsers(usersData);
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="usersStyle">
            <div className="topSection">
                <div className="sectionTitle">
                    Usuarios SueñoAventura
                </div>
            </div>
            <div className="bottomSection">
                {
                    users.length > 0
                        ? (
                            <div className="usersSection">
                                {
                                    users.map(user => {
                                        return (
                                            <div key={user.id}>
                                                <UserCard
                                                    name={`${user.name}`}
                                                    surname={`${user.surname}`}
                                                    dni={`DNI: ${user.dni}`}
                                                    age={`Edad: ${user.age} años`}
                                                    cp={`CP: ${user.cp}`}
                                                    mobile={`Móvil: ${user.mobile}`}
                                                    email={`Email: ${user.email}`}
                                                />
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        )
                        : (<div className="loading">CARGANDO ...</div>)
                }
            </div>
        </div>
    )
}