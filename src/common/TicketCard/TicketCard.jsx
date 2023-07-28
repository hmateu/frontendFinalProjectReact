import React from "react";
import './TicketCard.css';
import { useNavigate } from 'react-router-dom';

export const TicketCard = ({ id, date, customerId, customerName, customerSurname, ticketType, price, validated }) => {
    const navigate = useNavigate();
    return (
        <div className="ticketCardStyle">
            <div className="ticketInformation">
                <div className="ticketName">Entrada: {id}</div>
                <div className="secondaryInformation">
                    <div><strong>Fecha: </strong>{date}</div>
                    <div><strong>Cliente: </strong>{customerId}</div>
                    <div><strong>Nombre: </strong>{customerName}</div>
                    <div><strong>Apellidos: </strong>{customerSurname}</div>
                    <div><strong>Tipo de entrada: </strong>{ticketType}</div>
                    <div><strong>Precio: </strong>{price}</div>
                    <div><strong>Validada: </strong>{validated}</div>
                </div>
            </div>
            <div className="ticketButton">
                <div className="button">Eliminar</div>
            </div>
        </div>
    );
}