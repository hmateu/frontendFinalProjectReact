import React from "react";
import './UserCard.css';
import { useNavigate } from 'react-router-dom';

export const UserCard = ({ id, dni, name, surname, age, cp, mobile, email }) => {
    const navigate = useNavigate();
    return (
        <div className="userCardStyle">
            <div className="userInformation">
                <div className="userName">{name}</div>
                <div className="secondaryInformation">
                    <div>{surname}</div>
                    <div>{dni}</div>
                    <div>{age}</div>
                    <div>{cp}</div>
                    <div>{mobile}</div>
                    <div>{email}</div>
                </div>
            </div>
            <div className="userButton">
                <div className="button">Eliminar</div>
            </div>
        </div>
    );
}