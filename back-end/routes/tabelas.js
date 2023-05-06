const express = require("express");
const router = express.Router();
const { InformativeResponse } = require("../controllers/tabelas");

router.post("/", InformativeResponse);

module.exports = router;
