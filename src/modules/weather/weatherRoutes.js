const { Router } = require("express");
const router = Router();

const tryCatch = require("../../middleware/tryCatch.js")

router.use("/healthCheck", (req, res) => res.send({ status: "success", message: "Weather service is working !!" }))


module.exports = router;
