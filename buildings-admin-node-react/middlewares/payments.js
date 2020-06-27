const Payment = require('../models/payment');

const getPaymentsByApartament = (req, res, next) => {
    Payment.getPaymentsByApartament(req.idApartament)
        .then((Payments) => {
            res.status(200);
            res.json({
                Payments,
            });
        })
        .catch((error) => {
            next(error);
        });

}

const getPaymentById = (req, res, next) => {
    Payment.getPaymentById(req.params.id)
        .then((Payment) => {
            if (Payment) {
                res.status(200);
                res.json({
                    Payment,
                });
            } else {
                res.status(404);
                res.json({
                    success: false,
                    message: 'No existe un tipo de contribución con el ID especificado',
                });
            }
        })
        .catch((error) => {
            next(error);
        });

}

const createPayment = (req, res, next) => {
    Payment.create(req.body)
        .then((Payment) => {
            if (Payment) {
                res.status(200);
                res.json({
                    Payment,
                });
            } else {
                res.status(409); //conflict
                res.json({
                    success: false,
                    message: 'Ya existe el tipo de contribución para el edificio'
                })
            }
        })
        .catch((error) => {
            next(error);
        });

}

module.exports = {
    getPaymentsByApartament,
    getPaymentById,
    createPayment
}