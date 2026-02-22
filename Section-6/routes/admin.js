const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const rootDir = require("../utils/path")

const router = express.Router();

const app = express();

const product = [];

app.use(bodyParser.urlencoded({extended : false}));

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post('/add-product', (req, res, next) => {
    product.push({title: req.body.title});
    console.log("POST");
    res.redirect('/');
})

exports.routes = router;
exports.product = product;