const Building = require('../models/building');

const getAllBuildings = (req, res, next) => {
    Building.getAllBuildings()
        .then((buildings) => {
            res.status(200);
            res.json({
                buildings,
            });
        })
        .catch((error) => {
            next(error);
        });

}

const getBuildingById = (req, res, next) => {
    Building.getBuildingById(req.params.id)
        .then((building) => {
            if (building) {
                res.status(200);
                res.json({
                    building,
                });
            } else {
                res.status(404);
                res.json({
                    success: false,
                    message: 'No existe un edificio con el ID especificado',
                });
            }
        })
        .catch((error) => {
            next(error);
        });

}

const createBuilding = (req, res, next) => {
    Building.create(req.body)
        .then((building) => {
            if (building) {
                res.status(200);
                res.json({
                    building,
                });
            } else {
                res.status(409); //conflict
                res.json({
                    success: false,
                    message: 'Ya existe un edificio con el nombre especificado'
                })
            }
        })
        .catch((error) => {
            next(error);
        });

}

module.exports = {
    getAllBuildings,
    getBuildingById,
    createBuilding
}