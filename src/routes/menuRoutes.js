const express = require('express');
const menuRoutes = express.Router();
const connection = require('../db/dbConfig');

menuRoutes.get('/', (req, res) => {

    const sql = 'select * from menu';
    connection.query(sql, (error, results, field) => {

        if (error) {
            res.status(404).json({
                statusCode: 404,
                desc: error
            });
        } else {
            res.status(200).json({
                statusCode: 200,
                menus: results
            });
        }
    });
});


menuRoutes.post('/', (req, res) => {

    const last_updated_dt = new Date();
    const { item_name, price, category, today_special } = req.body;
    const sql = "insert into menu (item_name,price,category,last_updated_dt,today_special) values (?,?,?,?,?)";

    connection.query(sql, [item_name, price, category, last_updated_dt, today_special], (error, results, fields) => {

        if (error) {
            res.status(400).json({
                statusCode: 400,
                desc: error
            });
        } else {
            res.status(201).json({
                statusCode: 201,
                desc: `${item_name} added successfully.`
            });
        }

    });
});


menuRoutes.put("/:menu_id", (req, res) => {


    const { menu_id } = req.params;
    const { item_name, price, category, today_special } = req.body;
    const last_updated_dt = new Date();

    const sql = "update menu set item_name=?,price=?,category=?, today_special=?,last_updated_dt=? where menu_id=?";

    connection.query(sql, [item_name, price, category, today_special, last_updated_dt, menu_id], (error, results, fields) => {

        if (error) {
            res.status(400).json({
                statusCode: 400,
                desc: error
            });
        } else {
            res.status(201).json({
                statusCode: 201,
                desc: `${item_name} updated successfully.`
            });
        }

    });
});



menuRoutes.delete("/:menu_id", (req, res) => {

    const { menu_id } = req.params;
    const sql = "delete from menu where menu_id=?";

    connection.query(sql, [menu_id], (error, results, fields) => {

        if (error) {
            res.status(400).json({
                statusCode: 400,
                desc: error
            });
        } else {
            res.status(201).json({
                statusCode: 201,
                desc: `Item id : ${menu_id} deleted successfully.`
            });
        }

    });
});


module.exports = menuRoutes;