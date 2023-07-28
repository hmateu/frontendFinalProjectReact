import axios from "axios";
const URL = 'http://localhost:8000/api';

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