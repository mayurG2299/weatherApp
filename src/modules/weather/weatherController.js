const { getWeatherInformation } = require("../../services/openWeatherServices")

const { getLocationByID } = require("../location/locationController")

module.exports.getWeatherInformation = async (req, res) => {
    const { location_id } = req.params;
    console.log(location_id)
    const locationDetails = await getLocationByID(req, res)
    console.log("location details =>", locationDetails)
    const lat = locationDetails?.latitude;
    const lon = locationDetails?.longitude;
    const response = await getWeatherInformation(lat, lon)

    return response
}