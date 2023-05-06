const express = require("express");
const router = express.Router();
const { InformativeResponse } = require("../controllers/art");

router.post("/", InformativeResponse);

module.exports = router;
