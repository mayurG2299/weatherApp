const Location = require('../../models/location');

const { successResponse } = require("../../middleware/successHandler");
const { where } = require('sequelize');

module.exports.addLocation = async (req, res) => {
    const { name, latitude, longitude } = req.body;
    const location = await Location.create({ name, latitude, longitude });
    console.log(location)
    return successResponse(res, "success", location)
}

module.exports.getLocationByID = async (req, res, next) => {
    const { location_id } = req.params;
    const location = await Location.findByPk(location_id);
    console.log("location", location)
    return successResponse(res, "success", location);
}

module.exports.updateLocationByID = async (req, res, next) => {
    const { location_id } = req.params;
    const { name, latitude, longitude } = req.body
    const location = await Location.update({ name, latitude, longitude }, {
        where: {
            id: location_id,
        },
    });
    return successResponse(res, "success", location);
}

module.exports.deleteLocationBYID = async (req, res, next) => {
    const { location_id } = req.params;
    const location = await Location.destroy({
        where: {
            id: location_id,
        }
    });
    return successResponse(res, "success", location);
}

