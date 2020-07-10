const User = require('../models/user');
const { threadId } = require('./db-connection');

//const bcrypt = require('bcrypt');
const crypto = require('crypto');

const login = async (parms, req) => {
    try {
        const { username, password } = parms;

        const user = await User.getUserByUserName(username)
        if (!user) {
            return {
                status: 404,
                success: false,
                message: `No existe un usuario con username ${username}`,
                data: null
            };
        } else {
            const match = crypto.createHash('md5').update(password).digest("hex") === user.password;
            if (match) {
                req.session.user = user;
                return {
                    status: 200,
                    success: true,
                    message: 'OK',
                    data: user
                };
            } else {
                return {
                    status: 400,
                    success: false,
                    message: 'Contraseña incorrecta',
                    data: null
                };
            }
        }
    }
    catch (error) {
        throw (error);
    }


}

const logout = (req) => {
    return new Promise(function (resolve, reject) {
        if (req.session.user) {
            req.session.user = null;
            resolve({
                status: 200,
                success: true,
                message: 'OK',
            })
        } else (
            reject({
                status: 404,
                success: false,
                message: 'No existe usuario loggueado'

            })
        )
    });
}

/*const getAllBuildings = async () => {
    try {
        const buildings = await Building.getAllBuildings()
        if (buildings) {
            return {
                status: 200,
                success: true,
                message: 'OK',
                data: buildings
            };
        } else {
            return {
                status: 404,
                success: false,
                message: `No existen edificios`
            };
        }
    }
    catch (error) {
        throw (error);
    }

}*/

/*const create = async (parms) => {
    try {
        const { name } = parms;

        const building = await Building.getBuildingByName(name);
        if (building) {
            return {
                status: 400,
                success: false,
                message: `Ya existe un edificio con el nombre ${name}`
            }
        } else {
            const newBuilding = await Building.create(parms);
            return {
                status: 200,
                success: true,
                message: 'OK',
                data: newBuilding
            };
        }
    } catch (error) {
        throw (error);
    }
}*/

/*const update = async (parms) => {
    try {
        const { id, name } = parms;

        const building = await Building.getBuildingById(id);
        if (!building) {
            return {
                status: 400,
                success: false,
                message: `No existe un edificio con el ID ${id}`
            }
        } else {
            if (building.name != name) {
                const buildingAux = await Building.getBuildingByName(name);
                if (buildingAux) {
                    return {
                        status: 400,
                        success: false,
                        message: `Ya existe un edificio con nombre ${name}`
                    }
                }
            }

            const updatedBuilding = await Building.update(parms);
            return {
                status: 200,
                success: true,
                message: 'OK',
                data: updatedBuilding
            };
        }
    } catch (error) {
        throw (error);
    }
}*/

/*const deleted = async (parms) => {
    try {
        const { id } = parms;

        const building = await Building.getBuildingById(id);
        if (!building) {
            return {
                status: 400,
                success: false,
                message: `No existe un edificio con el id ${id}`
            }
        } else {
            const apartaments = await Apartament.getAllApartamentsByBuilding(id);
            if (apartaments && apartaments.length > 0) {
                return {
                    status: 400,
                    success: false,
                    message: `El edificio con ID ${id} tiene apartamentos asignados`
                }
            }
            else {
                const deleted = await Building.delete(id);
                return {
                    status: 200,
                    success: true,
                    message: 'OK',
                    data: deleted
                }
            }
        }
    }
    catch (error) {
        throw (error);
    }
}*/

module.exports = {
    login,
    logout
}