const { restart } = require("nodemon");

const apiAutentication = function (req, res, next) {
    next()
    /*const isAutenticated = () => {
        if (req.url == '/login' || req.session.user != null) {
            return true;
        } else {
            return false
        }
    }
    
    if (isAutenticated()) {
        next();
    } else {
        res.status(401);
        res.json({
            status: 401,
            success: false,
            message: `Usuario no logueado`
        });
    }*/

};

const appAutentication = function (req, res, next) {
    next();
    /*const isAutenticated = () => {
        if (req.url == '/login' || req.session.user != null) {
            return true;
        } else {
            return false
        }
    }
    
    if (req.url == '/login' && req.session.user != null) {
        res.redirect('/home');
    }

    if (isAutenticated()) {
        next();
    } else {
        return res.redirect('/login');
    }*/

};

module.exports = {
    apiAutentication,
    appAutentication
}