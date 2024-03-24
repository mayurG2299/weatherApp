const axios = require('axios');


module.exports.getWeatherInformation = async (lat, lon) => {
    try {
        const response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
            params: {
                lat,
                lon,
                appid: process.env.WEATHER_API_KEY,
                units: 'metric', // You can adjust units as needed (metric, imperial, etc.)
            },
        });

        // console.log(response.data)
        return response.data

    } catch (error) {
        console.log("error in open weather map api service", error)
        return error
    }
}


