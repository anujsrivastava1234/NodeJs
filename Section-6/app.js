const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorRoutes = require('./routes/errorPage');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminData.routes);
app.use(shopRoutes);
app.use(errorRoutes);

app.listen(3000);