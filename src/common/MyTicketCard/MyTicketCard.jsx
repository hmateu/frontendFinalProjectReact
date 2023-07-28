import React from "react";
import './MyTicketCard.css';
import { useNavigate } from 'react-router-dom';

export const MyTicketCard = ({ id, date, ticketType, price, validated }) => {
    const navigate = useNavigate();
    return (
        <div className="myTicketCardStyle">
            <div className="myTicketInformation">
                <div className="myTicketName">Fecha: {date}</div>
                <div className="secondaryInformation">
                    <div><strong>Tipo de entrada: </strong>{ticketType}</div>
                    <div><strong>Precio: </strong>{price}</div>
                    <div><strong>Validada: </strong>{validated}</div>
                </div>
            </div>
        </div>
    );
}