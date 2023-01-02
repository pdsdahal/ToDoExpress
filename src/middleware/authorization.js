const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();

const authorzation = (req, res, next) => {

    if (req.headers['authorization'] && req.headers['authorization'].startsWith('Barrer')) {


    }
}