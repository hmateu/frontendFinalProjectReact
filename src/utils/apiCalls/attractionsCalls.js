import axios from "axios";
const URL = 'https://backend-final-project-82vls8phy-hmateu.vercel.app/api/api';

export const bringAllAttractions = async () => {
    try {
        let res = await axios.get(`${URL}/attractions`);
        return JSON.stringify(res.data.data);

    } catch (error) {
        console.error('Error en la llamada a bringAllAttractions:', error);
    }
}

export const bringAllAttractionsByAdmin = async (token) => {
    try {
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        let res = await axios.get(`${URL}/attractions-admin`, config);
        return JSON.stringify(res.data.data);

    } catch (error) {
        console.error('Error en la llamada a bringAllAttractionsByAdmin:', error);
    }
}

export const bringAttractionById = async (id) => {
    try {
        let res = await axios.get(`${URL}/attraction/${id}`);
        return JSON.stringify(res.data.data);

    } catch (error) {
        console.error('Error en la llamada a bringAttractionById:', error);
    }
}