const express = require('express');

const response = require("../../network/responses");
const controller = require('./controller')

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.put('/', deleteElement);

async function getAll(req, res){
    try{
        const items = await controller.getAll();
        response.succes(req, res, items, 200);
    } catch(err){
        response.error(req, res, err, 500);
    }
}

async function getById(req, res){
    try{
        const item = await controller.getById(req.params.id);
        response.succes(req, res, item, 200);
    } catch(err){
        response.error(req, res, err, 500);
    }
    
}

async function deleteElement(req, res) {
    try{
        const item = await controller.deleteElement(req.body);
        response.succes(req, res, 'Se ha eliminado la persona.', 200);
    } catch(err){
        response.error(req, res, err, 500);
    }
}

module.exports = router;