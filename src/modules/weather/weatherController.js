const { getWeatherInformation } = require("../../services/openWeatherServices")
const { getWeatherInformationSchema } = require("./weatherValidator")
const { getLocationByID } = require("../location/locationController")

module.exports.getWeatherInformation = async (req, res) => {
    // console.log(req.originalUrl.startsWith(`/${process.env.NODE_ENV}/weather`))
    await getWeatherInformationSchema.validateAsync(req.params)
    const { location_id } = req.params;
    // console.log(location_id)

    const nodeCache = req.cache;

    if (nodeCache.has(`weatherDetails:${location_id}`) && nodeCache.get(`weatherDetails:${location_id}`)) {
        // console.log("Getting from node cache =>")
        return nodeCache.get(`weatherDetails:${location_id}`)
    }

    const locationDetails = await getLocationByID(req, res)
    // console.log("location details =>", locationDetails)
    const lat = locationDetails?.latitude;
    const lon = locationDetails?.longitude;
    const response = await getWeatherInformation(lat, lon)

    // console.log("Saving in node cache =>")
    nodeCache.set((`weatherDetails:${location_id}`), response)

    return response
}