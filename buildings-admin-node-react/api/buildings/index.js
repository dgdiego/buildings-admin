var router = require('express').Router();

const { 
    getAllBuildings,
    getBuildingById,
    createBuilding,
    updateBuilding
} = require('../../middlewares/buildings');

/*const { 
    getUser,
} = require('../middlewares/user');

const { 
    autenticateUser
} = require('../middlewares/autorization');*/


//router.post('/', getUser, autenticateUser, registerUser, apiErrorHandler);

router.get('/', getAllBuildings);
router.get('/:id', getBuildingById);
router.post('/create', createBuilding);
router.post('/:id', updateBuilding);

module.exports = router;