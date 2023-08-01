import axios from "axios";
const URL = 'https://backend-final-project-82vls8phy-hmateu.vercel.app/api/api';

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

export const deleteOneUserById = async (id, token) => {
    try {
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        let res = await axios.delete(`${URL}/user/${id}`, config);

    } catch (error) {
        console.error('Error en la llamada a deleteOneUserById:', error);
    }
};