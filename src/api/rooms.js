 
import axios from 'axios';
import { API_URL } from '../constants';
const API = axios.create({ baseURL: API_URL });

const getAllRooms = async () => {
   return  await API.get('/rooms');
};
const requestRoom = async (roomId, token) => {
    return await API.post(`/rooms/request/${roomId}`,{}, {
        headers: {
            'x-auth-token': token,
          },
       });
};

export { getAllRooms, requestRoom };
 
 