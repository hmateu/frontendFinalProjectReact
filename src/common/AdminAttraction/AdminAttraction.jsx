import React from "react";
import { useNavigate } from 'react-router-dom';

export const AdminAttraction = ({ id, picture, name, employee1, employee2 }) => {
    const navigate = useNavigate();
    return (
        <div className="attractionCardStyle">
            <div className="attractionPicture">{picture}</div>
            <div className="attractionInformation">
                <div className="nameAttraction">{name}</div>
                <div className="secondaryInformation">
                    <div><strong>Id: </strong>{id}</div>
                    <strong>Empleados:</strong>
                    <div>{employee1} - {employee2}</div>
                </div>
            </div>
            <div className="attractionButton">
                <div className="button" onClick={() => navigate(`/attraction-detail/${id}`)}>Descubrir</div>
            </div>
        </div>
    );
}