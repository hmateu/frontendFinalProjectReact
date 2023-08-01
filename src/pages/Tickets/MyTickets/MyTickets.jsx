import React, { useState } from "react";
import './MyTickets.ticketscss';
import { MyTicketCard } from "../../../common/MyTicketCard/MyTicketCard";
import { useSelector } from "react-redux";
import { userData } from "../../Users/userSlice";
import { bringMyTickets } from "../../../utils/apiCalls/ticketsCalls";
import { useNavigate } from "react-router-dom";

export const MyTickets = () => {
    const navigate = useNavigate();
    const [tickets, setTickets] = useState([]);
    const dataRedux = useSelector(userData);
    const token = dataRedux?.credentials?.token;

    if (tickets?.length === 0) {
        bringMyTickets(token)
            .then((tickets) => {
                setTickets(tickets);
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="myTicketsStyle">
            <div className="topSection">
                <div className="sectionTitle">
                    Mis entradas SueñoAventura
                </div>
                <div className="newTicket" onClick={()=>navigate('/new-tickets')}>Nueva Entrada</div>
            </div>
            <div className="bottomSection">
                {
                    tickets?.length > 0
                        ? (
                            <div className="myTicketsSection">
                                {
                                    tickets.map(ticket => {
                                        return (
                                            <div key={ticket.id}>
                                                <MyTicketCard
                                                    date={ticket.date}
                                                    ticketType={ticket.ticket_type.name}
                                                    price={`${ticket.price}€`}
                                                    validated={ticket.validated ? 'Sí' : 'No'}
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
    );
};