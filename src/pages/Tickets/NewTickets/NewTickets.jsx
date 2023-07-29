import React, { useEffect, useRef, useState } from "react";
import './NewTickets.css';
import { TicketTypeCard } from "../../../common/TicketTypeCard/TicketTypeCard";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMonths } from 'date-fns';
import { useNavigate } from "react-router-dom";

export const NewTickets = () => {

    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(null);
    const today = new Date();
    const maxDate = addMonths(today, 3);
    const datepickerRef = useRef(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const openCalendar = () => {
        datepickerRef.current.setOpen(true);
    };

    useEffect(() => {
        openCalendar();
    }, []);

    return (
        <div className="newTicketsStyle">
            <div className="topSection">
                <div className="sectionTitle">
                    Compra tus entradas para SueñoAventura
                </div>
                <div className="sectionDescription">
                    Vive una experiencia única en SueñoAventura con tus familiares y amigos.
                </div>
            </div>
            <div className="bottomSection">
                <div className="ticketsTypes">
                    <div className="title">¿Cuántas entradas?</div>
                    <div className="tickets">
                        <TicketTypeCard
                            name={`Entrada GENERAL 1 día`}
                            description={`(de 11 a 59 años)`}
                        />
                        <TicketTypeCard
                            name={`Entrada JUNIOR 1 día`}
                            description={`(menores de 11 años)`}
                        />
                        <TicketTypeCard
                            name={`Entrada REDUCIDA 1 día`}
                            description={`(mayores de 59 años)`}
                        />
                    </div>
                </div>
                <div className="ticketsDate">
                    <div className="dateTitle">
                        ¿Cuándo quieres venir?
                    </div>
                    <DatePicker
                        ref={datepickerRef}
                        selected={selectedDate}
                        onChange={handleDateChange}
                        minDate={today}
                        maxDate={maxDate}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Selecciona una fecha"
                        autoComplete="off"
                        inline
                    />
                </div>
                <div className="confirmationButton">
                    <div className="confirmButton" onClick={()=>navigate('/my-tickets')}>
                        Comprar
                    </div>
                </div>
            </div>
        </div>
    )
}