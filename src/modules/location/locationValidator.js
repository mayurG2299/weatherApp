const Joi = require("joi")

module.exports.addLocationSchema = Joi.object({
    name: Joi.string().required(),
    latitude: Joi.string().required(),
    longitude: Joi.string().required(),
})

