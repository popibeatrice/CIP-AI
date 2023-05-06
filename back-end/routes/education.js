const express = require("express");
const router = express.Router();
const { InformativeResponse } = require("../controllers/education");

router.post("/", InformativeResponse);

module.exports = router;
