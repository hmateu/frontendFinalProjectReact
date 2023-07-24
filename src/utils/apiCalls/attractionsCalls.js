import axios from "axios";
const URL = 'http://localhost:8000/api';

export const bringAllAttractions = async () => {
    try {
        let res = await axios.get(`${URL}/attractions`);
        return JSON.stringify(res.data.data);

    } catch (error) {
        console.error('Error en la llamada a bringAllAttractions:', error);
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