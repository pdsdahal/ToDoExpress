const express = require('express');
const connection = require('../db/dbConfig');
const bcrypt = require('bcryptjs');
const { admin, user, vendor, admin_vendor } = require('../middleware/roles');

const userRouter = express.Router();


userRouter.get('/', admin_vendor, (req, res) => {

    const sql = "SELECT user_id,name,username,role_id,last_updated_dt,enrollment_dt FROM user";
    connection.query(sql, (error, results, field) => {

        if (error) {
            res.status(404).json({
                statusCode: 404,
                desc: error
            });
        } else {
            res.status(200).json({
                statusCode: 200,
                users: results
            });
        }
    });
});


userRouter.post('/register', admin_vendor, (req, res) => {

    const { name, username, password, role_id } = req.body;

    const enPassword = bcrypt.hashSync(password);
    const last_updated_dt = new Date();
    const enrollment_dt = new Date();

    const sqlUserNameCheck = "select * from user where username=?";
    connection.query(sqlUserNameCheck, [username], (error, result, field) => {

        if (error) {
            res.status(400).json({
                statusCode: 400,
                desc: error
            });
        } else {

            if (result.length === 0) {

                const sql = "insert into canteen.user(name,username,password,role_id,last_updated_dt,enrollment_dt) values(?,?,?,?,?,?)";
                connection.query(sql, [name, username, enPassword, role_id, last_updated_dt, enrollment_dt], (error1, result1, field1) => {

                    if (error1) {
                        res.status(400).json({
                            statusCode: 400,
                            desc: error1
                        });
                    } else {
                        res.status(201).json({
                            statusCode: 201,
                            desc: 'User creted successfully.'
                        });
                    }
                });
            } else {
                res.status(400).json({
                    statusCode: 400,
                    desc: 'Username is already exist. Pease use diffrent username.'
                });
            }
        }
    });
});


userRouter.post('/forgotpassword', (req, res) => {

    const { username, password } = req.body;
    const last_updated_dt = new Date();
    const enPassword = bcrypt.hashSync(password);

    const sql = "update user set password=?,last_updated_dt=? where username=?";

    connection.query(sql, [enPassword, last_updated_dt, username], (error, result, field) => {
        if (error) {
            res.status(400).json({
                statusCode: 400,
                desc: error
            });
        } else {
            res.status(200).json({
                statusCode: 200,
                desc: 'Password Updated successfully.'
            });
        }

    });
});


userRouter.post('/signin', (req, res) => {

    const { username, password } = req.body;

    if (username && password) {

        const query = "select * from user";

        connection.query(query, (error, results, field) => {

            if (!error) {
                console.log(results);
            } else {
                console.log(error);
            }
        });

    }
    res.status(200).send('SignIn');

});



module.exports = userRouter;