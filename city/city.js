const axios = require('axios');

const getCityLatLng = async (city) => {

    const encodeUlr = encodeURI(city);

    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeUlr}.json?access_token=${process.env.API_KEY_CITY}`,
    });

    const { data } = await instance.get();

    if (data.features.length < 1) {
        throw new Error(`No existe coordenadas para la ciudad: ${city}`);
    }

    const { geometry, text: address } = data.features[0];
    const [lng, lat] = geometry.coordinates;

    return {
        address,
        lat,
        lng
    };
};

module.exports = {
    getCityLatLng
};