import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4bfa9adb70e0dcfce6ab8761643f9c226c0c4315183a0d7626a84ed8f8200fc2'
    }
});