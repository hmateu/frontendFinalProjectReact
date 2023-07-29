import React, { useEffect, useRef, useState } from "react";
import './NewTickets.css';
import { TicketTypeCard } from "../../../common/TicketTypeCard/TicketTypeCard";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMonths } from 'date-fns';
import { useNavigate } from "react-router-dom";

export const NewTickets = () => {

    const navigate = useNavigate();
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState(null);
    const maxDate = addMonths(today, 3);
    const datepickerRef = useRef(null);
    let [generalValue, setGeneralValue] = useState(0);
    let [juniorValue, setJuniorValue] = useState(0);
    let [reduceValue, setReduceValue] = useState(0);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const openCalendar = () => {
        datepickerRef.current.setOpen(true);
    };

    useEffect(() => {
        openCalendar();
    }, []);

    const incrementGeneralTicket = () => {
        generalValue === 5
            ? (
                generalValue
            )
            : (
                setGeneralValue(generalValue += 1)
            )
    }
    const decrementGeneralTicket = () => {
        generalValue === 0
            ? (
                generalValue
            )
            : (
                setGeneralValue(generalValue -= 1)
            )
    }
    const incrementJuniorTicket = () => {
        juniorValue === 5
        ? (
            juniorValue
        )
        : (
            setJuniorValue(juniorValue += 1)
        )
    }
    const decrementJuniorTicket = () => {
        juniorValue === 0
            ? (
                juniorValue
            )
            : (
                setJuniorValue(juniorValue -= 1)
            )
    }
    const incrementReduceTicket = () => {
        reduceValue === 5
            ? (
                reduceValue
            )
            : (
                setReduceValue(reduceValue += 1)
            )
    }
    const decrementReduceTicket = () => {
        reduceValue === 0
            ? (
                reduceValue
            )
            : (
                setReduceValue(reduceValue -= 1)
            )
    }

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
                            value={generalValue}
                            incrementValue={() => incrementGeneralTicket()}
                            decrementValue={() => decrementGeneralTicket()}
                        />
                        <TicketTypeCard
                            name={`Entrada JUNIOR 1 día`}
                            description={`(menores de 11 años)`}
                            value={juniorValue}
                            incrementValue={() => incrementJuniorTicket()}
                            decrementValue={() => decrementJuniorTicket()}
                        />
                        <TicketTypeCard
                            name={`Entrada REDUCIDA 1 día`}
                            description={`(mayores de 59 años)`}
                            value={reduceValue}
                            incrementValue={() => incrementReduceTicket()}
                            decrementValue={() => decrementReduceTicket()}
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
                    <div className="confirmButton" onClick={() => {
                        console.log(`Entradas General ${generalValue}`)
                        console.log(`Entradas Junior ${juniorValue}`)
                        console.log(`Entradas Reducida ${reduceValue}`)
                        console.log(`Fecha ${selectedDate}`)
                        navigate('/my-tickets')
                        }}>
                        Comprar
                    </div>
                </div>
            </div>
        </div>
    )
}