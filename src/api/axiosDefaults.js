import axios from "axios";


if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'https://proclimbers-backend-d69c858b50d1.herokuapp.com';
} else {
    axios.defaults.baseURL = 'http://localhost:5000';
}