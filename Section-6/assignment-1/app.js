const express = require('express')

const app = express();

// app.use((req, res, next) => {
//     console.log('This is a middleware');
//     next();
// })

// app.use((req, res, next) => {
//     console.log("This is another middleware");
// })

app.use('/user', (req, res, next) => {
    console.log("This is a user middleware");
    res.send('<h1>This is a user page</h1>')
})

app.use('/',(req, res, next) => {
    console.log("This is a root middleware");
    res.send('<h1> This is a root page</h1>');
})


app.listen(3000);