const express = require('express');

// 1  - User ,2 - Admin ,3 - Vendor

const admin = (req, res, next) => {
    const { role } = req.headers;
    if (role === '2') {
        next();
    } else {

        res.status(401).json({
            statusCode: 401,
            desc: 'You are not authorized to access this.'
        });
    }
}


const user = (req, res, next) => {
    const { role } = req.headers;

    if (role === '1') {
        next();
    } else {

        res.status(401).json({
            statusCode: 401,
            desc: 'You are not authorized to access this.'
        });
    }
}

const vendor = (req, res, next) => {
    const { role } = req.headers;

    if (role === '3') {
        next();
    } else {

        res.status(401).json({
            statusCode: 401,
            desc: 'You are not authorized to access this.'
        });
    }
}


const admin_vendor = (req, res, next) => {
    const { role } = req.headers;

    if (role === '2' || role === '3') {
        next();
    } else {

        res.status(401).json({
            statusCode: 401,
            desc: 'You are not authorized to access this.'
        });
    }
}


module.exports = { admin, user, vendor, admin_vendor };