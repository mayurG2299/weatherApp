const errorResponse = (error, req, res, next) => {
    console.log("Error", error)
    let statusCode = error.statusCode || 500
    let status = error.status || "fail";
    let message = error.message || "something went wrong";

    res.status(statusCode).json({
        status: status,
        message: message,
    });
}

module.exports = errorResponse;