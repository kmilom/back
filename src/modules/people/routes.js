const express = require('express');

const response = require("../../network/responses");
const controller = require('./controller')

const router = express.Router();

router.get('/', async function(req, res){
    const items = await controller.getAll()
    response.succes(req, res, items, 200);
});

module.exports = router;