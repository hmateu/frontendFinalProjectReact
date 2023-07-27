import axios from "axios";
const URL = 'http://localhost:8000/api';

export const bringAllUsers = async (token) => {
    try {
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        let res = await axios.get(`${URL}/users`, config);

        return JSON.stringify(res.data.data);

    } catch (error) {
        console.error('Error en la llamada a bringAllUsers:', error);
    }
};