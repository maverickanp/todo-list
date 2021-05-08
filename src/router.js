const router = require('express').Router();
const controller = require('./controller');

//LIST
router.get('/todo', controller.listTodo);

//CREATE
router.post('/todo', controller.createTodo);

//READ
router.get('/todo/:id', controller.readTodo);

//UPDATE
router.put('/todo/:id', controller.updateTodo);

//DELETE
router.delete('/todo/:id', controller.deleteTodo);

module.exports = router;