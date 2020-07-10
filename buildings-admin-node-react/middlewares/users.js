const services = require('../services/user-services');

const login = (req, res, next) => {
    services.login(req.body, req)
        .then((result) => {
            res.status(result.status);
            res.json(result);
        })
        .catch((error) => {
            next(error);
        });

}

const logout = (req, res, next) => {
    services.logout(req)
        .then((result) => {
            res.status(result.status);
            res.json(result);
        })
        .catch((error) => {
            next(error);
        });

}

/*const getAllBuildings = (req, res, next) => {
    services.getAllBuildings()
        .then((result) => {
            res.status(result.status);
            res.json(result);
        })
        .catch((error) => {
            next(error);
        });

}*/

/*const getBuildingById = (req, res, next) => {
    services.getBuildingById(req.params.id)
        .then((result) => {
            res.status(result.status);
            res.json(result);
        })
        .catch((error) => {
            next(error);
        });

}*/

/*const createBuilding = (req, res, next) => {
    services.create(req.body)
        .then((result) => {
            res.status(result.status);
            res.json(result);
        })
        .catch((error) => {
            next(error);
        });

}*/

/*const updateBuilding = (req, res, next) => {
    services.update(req.body)
        .then((result) => {
            res.status(result.status);
            res.json(result);
        })
        .catch((error) => {
            next(error);
        });

}*/

/*const deleteBuilding = (req, res, next) => {
    services.deleted(req.body)
        .then((result) => {
            res.status(result.status);
            res.json(result);
        })
        .catch((error) => {
            next(error);
        });

}*/

module.exports = {
    login,
    logout
}