const db = require('../services/db-connection');
const GET_USER_BY_USERNAME = 'SELECT * FROM users WHERE username = ?';
// const GET_ALL_BULDINGS = 'SELECT * FROM buildings';
// const INSERT_BUILDING = 'INSERT INTO buildings SET ?';
// const UPDATE_BUILDING = 'UPDATE buildings SET name = ?, address = ? WHERE id = ?';
// const DELETE_BUILDING = 'DELETE FROM buildings WHERE id = ?';

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    static getUserByUserName(username) {
        return new Promise(function (resolve, reject) {
            db.query(GET_USER_BY_USERNAME, [username], function (error, results) {
                if (error) {
                    reject(error);
                } else {
                    try {
                        if (results && results.length > 0) {
                            const { username, password } = results[0];
                            resolve(new User(username, password));
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

    /*static getAllBuildings() {
        return new Promise(function (resolve, reject) {
            db.query(GET_ALL_BULDINGS, function (error, results) {
                if (error) {
                    reject(error);
                } else {
                    try {
                        resolve(results.map((building) => {
                            const { id, name, address } = building;
                            return new Building(id, name, address);
                        }));
                    } catch (err) {
                        reject(err);
                    }
                }
            });
        })
    }*/

    /*static create(parms) {
        return new Promise((resolve, rejected) => {
            const { name, address } = parms;
            const newBuilding = {
                name,
                address
            };
            db.query(INSERT_BUILDING, newBuilding, (error, results) => {
                if (error) {
                    rejected(error);
                } else {
                    try {
                        resolve(new Building(results.insertId, name, address));
                    } catch (err) {
                        rejected(err);
                    }
                }
            })     
        });
    }*/
    
    /*static update(parms) {
        return new Promise((resolve, rejected) => {
            const { id, name, address } = parms;
            db.query(UPDATE_BUILDING, [name, address, id], (error, results) => {
                if (error) {
                    rejected(error);
                } else {
                    try {
                        resolve(new Building(id, name, address));
                    } catch (err) {
                        rejected(err);
                    }
                }
            })
        });
    }*/

    /*static delete(id) {
        return new Promise((resolve, rejected) => {
            db.query(DELETE_BUILDING, [id], (error, results) => {
                if (error) {
                    rejected(error);
                } else {
                    try {
                        resolve('true');
                    } catch (err) {
                        rejected(err);
                    }
                }
            })
        });
    }*/
}

module.exports = User;