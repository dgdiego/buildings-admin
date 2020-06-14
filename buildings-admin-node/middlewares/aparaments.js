const Apartament = require('../models/apartament');

const getAllApartamentsByBuilding = (req, res, next) => {
    Apartament.getAllApartamentsByBuilding(req.params.idBuilding)
        .then((Apartaments) => {
            res.status(200);
            res.json({
                Apartaments,
            });
        })
        .catch((error) => {
            next(error);
        });

}

const getApartamentById = (req, res, next) => {
    Apartament.getApartamentById(req.params.id)
        .then((Apartament) => {
            if (Apartament) {
                res.status(200);
                res.json({
                    Apartament,
                });
            } else {
                res.status(404);
                res.json({
                    success: false,
                    message: 'No existe un apartamento con el ID especificado',
                });
            }
        })
        .catch((error) => {
            next(error);
        });

}

const createApartament = (req, res, next) => {
    Apartament.create(req.body)
        .then((Apartament) => {
            if (Apartament) {
                res.status(200);
                res.json({
                    Apartament,
                });
            } else {
                res.status(409); //conflict
                res.json({
                    success: false,
                    message: 'Ya existe el apartamento para el edificio'
                })
            }
        })
        .catch((error) => {
            next(error);
        });

}

module.exports = {
    getAllApartamentsByBuilding,
    getApartamentById,
    createApartament
}