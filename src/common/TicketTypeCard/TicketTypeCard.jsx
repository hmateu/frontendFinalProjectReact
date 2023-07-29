import React from "react";
import './TicketTypeCard.css';

export const TicketTypeCard = ({ name, description, value, incrementValue, decrementValue }) => {
    return (
        <div className="ticketTypeCardStyle">
            <div className="ticketTypeInformation">
                <div className="ticketTypeName">{name}</div>
                <div className="ticketTypeDescription">{description}</div>
            </div>
            <div className="ticketTypeButtons">
                <div className="lessButton" onClick={()=>decrementValue()}>
                    <span class="material-icons-outlined">
                        expand_more
                    </span>
                </div>
                <div className="dataButton">{value}</div>
                <div className="moreButton" onClick={()=>incrementValue()}>
                    <span class="material-icons-outlined">
                        expand_less
                    </span>
                </div>
            </div>
        </div>
    );
}