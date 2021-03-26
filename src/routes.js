const router = require('express').Router();

// Controllers
const itemController = require('./controller/item.controller');
const orderController = require('./controller/order.controller');

router.get('/items', itemController.index);
router.post('/items', itemController.store);
router.delete('/items/:id', itemController.delete);

router.get('/orders', orderController.index);
router.post('/orders', orderController.store);

module.exports = router;