require('dotenv').config();
const colors = require('colors');

const { args } = require('./config/yargs');
const { getCityLatLng } = require('./city/city');
const { getWeather } = require('./weather/weather');

const command = args._[0];

const getInfo = async (city) => {
    try {
        const coords = await getCityLatLng(city);
        const temp = await getWeather(coords.lat, coords.lng);

        return `The Weather for ${city} \is ${temp}`;
    } catch (e) {
        return `Error: ${e.message}`;
    }
};

console.log(colors.bgMagenta(`Welcome to the Weather App`));

switch (command) {
    case 'search':
        getInfo(args.c)
            .then(console.log)
            .catch(console.log);
        break;
    default:
        console.log(`${command} not is a valid command`);
        break;
}