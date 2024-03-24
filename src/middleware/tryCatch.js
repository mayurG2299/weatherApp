const { successResponse } = require("../middleware/successHandler");
const tryCatch = (controller) => async (req, res, next) => {
    try {
        const response = await controller(req, res);
        return successResponse(res, "success", response);
    } catch (error) {
        next(error)
    }
}

module.exports = tryCatch;