import React from "react";
import './MyTickets.css';
import { MyTicketCard } from "../../../common/MyTicketCard/MyTicketCard";

export const MyTickets = () => {
    return (
        <div className="myTicketsStyle">
            <div className="topSection">
                <div className="sectionTitle">
                    Mis entradas SueñoAventura
                </div>
            </div>
            <div className="bottomSection">
                <div className="myTicketsSection">
                    <MyTicketCard
                    date={'11/4/2024'}
                    ticketType={'General'}
                    price={25}
                    validated={'No'}
                    />
                </div>
            </div>
        </div>
    );
};