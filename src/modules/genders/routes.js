const express = require('express');

const response = require("../../network/responses");
const controller = require('./controller')

const router = express.Router();

router.get('/', function(req, res){
    const getAll = controller.getAll()
    .then((items) => {
        response.succes(req, res, items, 200);
    })
    
});

module.exports = router;