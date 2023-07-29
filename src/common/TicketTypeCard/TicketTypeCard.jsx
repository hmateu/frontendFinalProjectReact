import React from "react";
import './TicketTypeCard.css';
import { useNavigate } from 'react-router-dom';

export const TicketTypeCard = ({ name, description }) => {
    const navigate = useNavigate();
    return (
        <div className="ticketTypeCardStyle">
            <div className="ticketTypeInformation">
                <div className="ticketTypeName">{name}</div>
                <div className="ticketTypeDescription">{description}</div>
            </div>
            <div className="ticketTypeButtons">
                <div className="lessButton">
                    <span class="material-icons-outlined">
                        expand_more
                    </span>
                </div>
                <div className="dataButton">0</div>
                <div className="moreButton">
                    <span class="material-icons-outlined">
                        expand_less
                    </span>
                </div>
            </div>
        </div>
    );
}