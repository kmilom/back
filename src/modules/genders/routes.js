const express = require('express');

const response = require("../../network/responses")

const router = express.Router();

router.get('/', function(req, res){
    response.succes(req, res, 'Tamo activo', 200)
});

module.exports = router;