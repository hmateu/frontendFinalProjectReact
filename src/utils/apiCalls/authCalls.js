import axios from "axios";
const URL = 'http://localhost:8000/api';

export const loginMe = async (credentials) => {
    try {
        let res = await axios.post(`${URL}/auth/login`, credentials);
        return res.data.token;

    } catch (error) {
        console.error('Error en la llamada a loginMe:', error);
    }

}

export const myProfile = async (token) => {
    try {
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        let res = await axios.get(`${URL}/auth/profile`, config);

        // console.log(`Los datos del perfil son los siguientes ->`, res.data.data);

        return res.data.data;

    } catch (error) {
        console.error('Error en la llamada a myProfile:', error);
    }
};

export const myRoles = async (token) => {
    try {
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        let res = await axios.get(`${URL}/auth/profile`, config);
        const roleIds = res.data.data.role.map((role) => role.id);
        const userId = roleIds[roleIds.length-1];

        // console.log(`Los roles del perfil son los siguientes ->`, roleIds);
        // console.log(`Me quedo con el último rol. Si tiene varios será el de cliente ->`, userId);

        return userId;

    } catch (error) {
        console.error('Error en la llamada a myRoles:', error);
    }
};

export const updateProfile = async (data,token) => {
    try {
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
  
      let res = await axios.put(`${URL}/auth/profile-update`, data, config);
  
      return res.data.data;
  
    } catch (error) {
        console.error('Error en la llamada a updateProfile:', error);
    }
  };