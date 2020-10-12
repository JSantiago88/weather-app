const axios = require('axios');

const getWeather = async (lat, lng) => {

    const encodeUlrLat = encodeURI(lat);
    const encodeUlrLng = encodeURI(lng);

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${encodeUlrLat}&lon=${encodeUlrLng}&appid=${process.env.API_KEY_WEATHER}&units=metric`);

    return resp.data.main.temp;
};

module.exports = {
    getWeather
};