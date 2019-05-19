import axios from 'axios';

const baseURL = 'http://api.openweathermap.org/data/2.5/forecast';
const APPID = '0c8280c595aa0c54eba5b3d4af0ce5cc';
export default axios.create({baseURL, params: {APPID}});