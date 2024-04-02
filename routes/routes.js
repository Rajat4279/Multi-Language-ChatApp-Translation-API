const express = require("express");
const { translate } = require("../controller/translator");

const router = express.Router();

router.post("/translate", translate);

module.exports = router;