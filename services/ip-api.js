import axios from 'axios';

export const getLocationByIP = async () => {
    return await axios.get(process.env.URL_IP_API);
};