module.exports.successResponse = (res, message, resbody, code = 200, statusId = 1) => res.status(code).send({
    statusId,
    message,
    data: resbody,
});