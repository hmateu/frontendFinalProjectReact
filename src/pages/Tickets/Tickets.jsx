import React, { useState } from "react";
import './Tickets.css';
import { TicketCard } from "../../common/TicketCard/TicketCard";
import { useSelector } from "react-redux";
import { userData } from "../Users/userSlice";
import { bringAllTickets, deleteOneTicketById } from "../../utils/apiCalls/ticketsCalls";
import { useNavigate } from "react-router-dom";

export const Tickets = () => {
    const navigate = useNavigate();
    const [tickets, setTickets] = useState([]);
    const dataRedux = useSelector(userData);
    const token = dataRedux?.credentials?.token;

    if (tickets.length === 0) {
        bringAllTickets(token)
            .then((tickets) => {
                setTickets(tickets);
            })
            .catch(error => console.log(error))
    }

    const deleteTicketById = (id) => {
        deleteOneTicketById(id, token)
            .then(() => {
                bringAllTickets(token)
                    .then((tickets) => {
                        let ticketsData = JSON.parse(tickets);
                        setTickets(ticketsData);
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="ticketsStyle">
            <div className="topSection">
                <div className="sectionTitle">
                    Entradas SueñoAventura
                </div>
                <div className="newTicket" onClick={()=>navigate('/new-tickets')}>Nueva Entrada</div>
            </div>
            <div className="bottomSection">
                {
                    tickets.length > 0
                        ? (
                            <div className="ticketsSection">
                                {
                                    tickets.map(ticket => {
                                        return (
                                            <div key={ticket.id}>
                                                <TicketCard
                                                    id={ticket.id}
                                                    date={ticket.date}
                                                    customerId={ticket.user.id}
                                                    customerName={ticket.user.name}
                                                    customerSurname={ticket.user.surname}
                                                    ticketType={ticket.ticket_type.name}
                                                    price={`${ticket.price}€`}
                                                    validated={ticket.validated ? 'Sí' : 'No'}
                                                    deteleFunction={() => deleteTicketById(ticket.id)}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                        : (<div className="loading">CARGANDO ...</div>)
                }
            </div>
        </div>
    );
}