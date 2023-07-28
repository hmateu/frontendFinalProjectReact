import React from "react";
import './AdminCard.css';
import { useNavigate } from 'react-router-dom';

export const AdminCard = ({name,button,pathClick}) => {
    const navigate = useNavigate();
    return (
        <div className="adminCardStyle">
            <div className="adminInformation">
                <div className="userName">{name}</div>
            </div>
            <div className="adminButton">
                <div className="button" onClick={()=>navigate(pathClick)}>{button}</div>
            </div>
        </div>
    );
}