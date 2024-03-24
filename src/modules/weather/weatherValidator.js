const Joi = require("joi")

module.exports.getWeatherInformationSchema = Joi.object({
    location_id: Joi.string().required()
})

