import React, { useState } from "react";
import './Tickets.css';
import { TicketCard } from "../../common/TicketCard/TicketCard";
import { useSelector } from "react-redux";
import { userData } from "../Users/userSlice";
import { bringAllTickets } from "../../utils/apiCalls/ticketsCalls";

export const Tickets = () => {
    const [tickets, setTickets] = useState([]);
    const dataRedux = useSelector(userData);
    const token = dataRedux?.credentials?.token;

    if (tickets.length === 0) {
        bringAllTickets(token)
            .then((tickets) => {
                let ticketsData = JSON.parse(tickets);
                setTickets(ticketsData);
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="ticketsStyle">
            <div className="topSection">
                <div className="sectionTitle">
                    Entradas SueñoAventura
                </div>
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