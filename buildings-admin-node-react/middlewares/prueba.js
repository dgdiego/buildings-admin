const { restart } = require("nodemon");

const prueba = function (req, res, next) {
    if(req.session.user == null){
        res.status(401);
        res.json({
            message: 'Error flaco'
        });
    }else{
        req.session.user++;
        console.log(req.session.user);
    }
};

const prueba2 = (req, res, next) => {
    res.redirect('/to-do-list');
};

module.exports = {
    prueba,
    prueba2
}