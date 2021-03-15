const express = require('express');
const router = express.Router();

// Handle incoming GET request to /orders 
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetch'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Order wes created'
    });
});


router.delete('/:orderID', (req, res, next) => {
    res.status(200).json({
        message: 'You deleted an order with ID ' + req.params.orderId,
        orderID: req.params.orderId
    });
});

module.exports = router;