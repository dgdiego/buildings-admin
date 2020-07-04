const db = require('../services/db-connection');

const GET_PAYMENT_BY_ID = 'SELECT * FROM payments WHERE id = ?';
const GET_PAYMENTS_BY_APARTAMENT = 'SELECT * FROM payments WHERE apartament_id = ? ORDER BY date desc';
const INSERT_PAYMENT = 'INSERT INTO payments SET ?';

class Payment {

    constructor(id, apartament_id, date, amount) {
        this.id = id;
        this.apartament_id = apartament_id;
        this.date = date;
        this.amount = amount;
    }

    static getPaymentById(id) {
        return new Promise(function (resolve, reject) {
            db.query(GET_PAYMENT_BY_ID, [id], function (error, results) {
                if (error) {
                    reject(error);
                } else {
                    try {
                        if (results && results.length > 0) {
                            const { id, apartament_id, date, amount } = results[0];
                            resolve(new Payment(id, apartament_id, date, amount));
                        } else {
                            resolve(null);
                        }
                    } catch (err) {
                        reject(err);
                    }
                }
            });
        })
    }

    static getPaymentsByApartament(apartament_id) {
        return new Promise(function (resolve, reject) {
            db.query(GET_PAYMENTS_BY_APARTAMENT, [apartament_id,], function (error, results) {
                if (error) {
                    reject(error);
                } else {
                    try {
                        resolve(results.map((obj) => {
                            const { id, apartament_id, date, amount } = obj;
                            return new Payment(id, apartament_id, date, amount);
                        }));
                    } catch (err) {
                        reject(err);
                    }
                }
            });
        })
    }

    static create(parms) {
        return new Promise((resolve, rejected) => {
            const { apartament_id, date, amount } = parms;

            const newPayment = {
                apartament_id,
                date,
                amount
            };
            db.query(INSERT_PAYMENT, newPayment, (error, results) => {
                if (error) {
                    rejected(error);
                } else {
                    try {
                        resolve(new Payment(results.insertId, apartament_id, date, amount));
                    } catch (err) {
                        rejected(err);
                    }
                }
            });

        });
    }
}

module.exports = Payment;