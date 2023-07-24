import axios from "axios";
const URL = 'http://localhost:8000/api';

export const bringAllAttractions = async () => {
    try {
        let res = await axios.get(`http://localhost:8000/api/attractions`);
        // console.log(`Esto devuelve bringAllAttractions -> ${JSON.stringify(res.data.data)}`);
        return JSON.stringify(res.data.data);

    } catch (error) {
        console.error('Error en la llamada a bringAllAttractions:', error);
    }

}

export const bringAttractionById = async (id) => {
    try {
        let res = await axios.get(`http://localhost:8000/api/attraction/${id}`);
        // console.log(`Esto devuelve bringAttractionById -> ${JSON.stringify(res.data.data)}`);
        return JSON.stringify(res.data.data);

    } catch (error) {
        console.error('Error en la llamada a bringAllAttractions:', error);
    }

}