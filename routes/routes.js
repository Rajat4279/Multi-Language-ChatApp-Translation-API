const express = require("express");
const dotenv = require("dotenv");
const translate = require("../controller/translator");
dotenv.config();

const router = express.Router();

router.post("/translate", translate);

module.exports = router;