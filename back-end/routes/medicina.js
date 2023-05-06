const express = require("express");
const router = express.Router();
const { InformativeResponse } = require("../controllers/medicina");

router.post("/", InformativeResponse);

module.exports = router;
