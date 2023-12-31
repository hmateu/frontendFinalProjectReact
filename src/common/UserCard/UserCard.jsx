import React from "react";
import './UserCard.css';

export const UserCard = ({ id, dni, name, surname, age, cp, mobile, email, deteleFunction }) => {
    return (
        <div className="userCardStyle">
            <div className="userInformation">
                <div className="userName">{name}</div>
                <div className="secondaryInformation">
                    <div><strong></strong>{surname}</div>
                    <div><strong>DNI: </strong>{dni}</div>
                    <div><strong>Edad: </strong>{age}</div>
                    <div><strong>CP: </strong>{cp}</div>
                    <div><strong>Móvil: </strong>{mobile}</div>
                    <div><strong>Email: </strong>{email}</div>
                </div>
            </div>
            <div className="userButton">
                <div className="button" onClick={()=>deteleFunction()}>Eliminar</div>
            </div>
        </div>
    );
}