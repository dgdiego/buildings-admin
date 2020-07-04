const Payment = require('../models/payment');
const Apartament = require('../models/apartament');
const { threadId } = require('./db-connection');

const getPaymentById = async (id) => {
    try {
        const payment = await Payment.getPaymentById(id);
        if (payment) {
            return {
                status: 200,
                success: true,
                message: 'OK',
                data: payment
            };
        } else {
            return {
                status: 404,
                success: false,
                message: `No existe un pago con el ID ${id}`
            };
        }
    }
    catch (error) {
        throw error;
    }
}

const getPaymentsByApartament = async (id) => {
    try {
        const payments = await Payment.getPaymentsByApartament(id);
        if (payments) {
            return {
                status: 200,
                success: true,
                message: 'OK',
                data: payments
            };
        } else {
            return {
                status: 404,
                success: false,
                message: `No existen pagos para el apartamento ${id}`
            };
        }
    }
    catch (error) {
        throw error;
    }
}

const create = async (parms) => {
    try {
        const { apartament_id } = parms;

        const apartament = await Apartament.getApartamentById(apartament_id);
        if (!apartament) {
            return {
                status: 400,
                success: false,
                message: `No existe un apartamento con el ID ${apartament_id}`
            }
        } else {
            const newPayment = await Payment.create(parms);
            return {
                status: 200,
                success: true,
                message: 'OK',
                data: newPayment
            };
        }
    } catch (error) {
        throw (error);
    }
}

module.exports = {
    create,
    getPaymentById,
    getPaymentsByApartament
}