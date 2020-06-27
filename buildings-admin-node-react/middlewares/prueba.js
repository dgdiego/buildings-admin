const prueba = function (req, res, next) {
    console.log('Time:', Date.now());
    next();
};

const prueba2 = (req, res, next) => {
    res.redirect('/to-do-list');
};

module.exports = {
    prueba,
    prueba2
}