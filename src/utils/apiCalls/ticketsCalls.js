import axios from "axios";
const URL = 'https://backend-final-project-82vls8phy-hmateu.vercel.app/api/api';

export const bringAllTickets = async (token) => {
    try {
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        let res = await axios.get(`${URL}/tickets`, config);
        return JSON.stringify(res.data.data);

    } catch (error) {
        console.error('Error en la llamada a bringAllTickets:', error);
    }
};

export const bringMyTickets = async (token) => {
    try {
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        let res = await axios.get(`${URL}/my-tickets`, config);
        return JSON.stringify(res.data.data);

    } catch (error) {
        console.error('Error en la llamada a bringMyTickets:', error);
    }
};

export const createTicket = async (token, selectedDate, tycketType) => {
    try {
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        const dateObject = new Date(selectedDate);
        const bodyData = {
            date: dateObject.toISOString().split('T')[0],
            ticket_type: tycketType
        }
        await axios.post(`${URL}/new-ticket`, bodyData, config);

    } catch (error) {
        console.error('Error en la llamada a createTicket:', error);
    }
};

export const deleteOneTicketById = async (id, token) => {
    try {
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        let res = await axios.delete(`${URL}/ticket/${id}`, config);

    } catch (error) {
        console.error('Error en la llamada a deleteOneTicketById:', error);
    }
};