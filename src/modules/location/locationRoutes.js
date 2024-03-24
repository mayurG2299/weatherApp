const { Router } = require("express");
const router = Router();

const tryCatch = require("../../middleware/tryCatch.js")

router.use("/healthCheck", (req, res) => res.send("location service is running"))


module.exports = router;
