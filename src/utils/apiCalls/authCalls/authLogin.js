import axios from "axios";
export const loginMe = async (credentials) => {
    let res = await axios.post(`http://localhost:8000/api/auth/login`, credentials)
    
    return res.data.token;
}