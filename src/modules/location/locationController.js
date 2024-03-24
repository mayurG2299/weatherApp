const Location = require('../../models/location');
const { addLocationSchema } = require("./locationValidator")

module.exports.addLocation = async (req, res) => {
    await addLocationSchema.validateAsync(req.body);
    const { name, latitude, longitude } = req.body;
    const location = await Location.create({ name, latitude, longitude });
    // console.log(location)
    return location;
}

module.exports.getLocationByID = async (req, res, next) => {
    const { location_id } = req.params;
    const location = await Location.findByPk(location_id);
    // console.log("location", location.dataValues)
    if (!location) { let err = new Error(`No record found with lcoation id ${location_id}`); err.statusCode = 404; throw err }
    return location;
}

module.exports.updateLocationByID = async (req, res, next) => {
    const { location_id } = req.params;
    const { name, latitude, longitude } = req.body
    let location = await Location.findByPk(location_id);
    // console.log("location", location.dataValues)
    if (!location) { let err = new Error(`No record found with lcoation id ${location_id}`); err.statusCode = 404; throw err }
    location = await location.update({ name, latitude, longitude });
    return location;
}

module.exports.deleteLocationBYID = async (req, res, next) => {
    const { location_id } = req.params;
    let location = await Location.findByPk(location_id);
    // console.log("location", location.dataValues)
    if (!location) { let err = new Error(`No record found with lcoation id ${location_id}`); err.statusCode = 404; throw err }
    location = await location.destroy();
    return location;
}

