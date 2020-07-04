var router = require('express').Router();

const { 
    getPaymentsByApartament,
    getPaymentById,
    createPayment
} = require('../../middlewares/payments');

router.get('/apartament/:id', getPaymentsByApartament);
router.get('/:id', getPaymentById);
router.post('/create', createPayment);


module.exports = router;