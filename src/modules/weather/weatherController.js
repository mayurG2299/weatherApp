const { getWeatherInformation } = require("../../services/openWeatherServices")
const { successResponse } = require("../../middleware/successHandler")
module.exports.getWeatherInformation = async (req, res) => {
    const { location_id } = req.params;
    console.log(location_id)
    const body = req.body;

    const lat = body?.lat ?? "44.34";
    const lon = body?.lon ?? "10.99"
    const response = await getWeatherInformation(lat, lon)

    return successResponse(res, "success", response)
}