const express = require('express');
const connection = require('../db/dbConfig');
const roleRoutes = express.Router();
const { admin, user, vendor, admin_vendor } = require('../middleware/roles');

roleRoutes.get('/', admin, (req, res) => {

    const query = "select * from roles";

    connection.query(query, (error, results, field) => {

        if (error) {
            res.status(404).json({
                statusCode: 404,
                desc: error
            });
        } else {
            res.status(200).json({
                statusCode: 200,
                roles: results
            });
        }
    });
});


roleRoutes.post('/create', admin, (req, res) => {

    const { roleName } = req.body;
    const sql = "insert into roles(role_name) values(?)";

    connection.query(sql, [roleName], (error, results, field) => {

        if (error) {
            res.status(400).json({
                statusCode: 400,
                desc: error
            });
        } else {
            res.status(201).json({
                statusCode: 201,
                desc: 'Role creted successfully.'
            });
        }
    });
});


roleRoutes.put('/:role_id', admin, (req, res) => {
    const { role_id } = req.params;
    const { roleName } = req.body;

    const sql = 'update roles set role_name=? where role_id=?';

    connection.query(sql, [roleName, role_id], (error, result, field) => {

        if (error) {
            res.status(400).json({
                statusCode: 400,
                desc: error
            });
        } else {
            res.status(200).json({
                statusCode: 200,
                desc: 'Role Updated successfully.'
            });
        }

    });
});


roleRoutes.delete('/:role_id', admin, (req, res) => {
    const { role_id } = req.params;
    const sql = 'delete from roles where role_id=?';

    connection.query(sql, [role_id], (error, result, field) => {

        if (error) {
            res.status(400).json({
                statusCode: 400,
                desc: error
            });
        } else {
            res.status(201).json({
                statusCode: 201,
                desc: 'Role Deleted successfully.'
            });
        }

    });
});


roleRoutes.get('/:role_id', admin, (req, res) => {
    const { role_id } = req.params;
    const sql = 'select * from roles where role_id=?';

    connection.query(sql, [role_id], (error, result, field) => {

        if (error) {
            res.status(400).json({
                statusCode: 400,
                desc: error
            });
        } else {
            res.status(201).json({
                statusCode: 201,
                role: result
            });
        }

    });
});




module.exports = roleRoutes;