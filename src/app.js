const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express();

var publicDirPath = path.join(__dirname, '../templates/views');
var partialDirPath = path.join(__dirname, '../templates/partial');

app.set('view engine', 'hbs');
app.set('views',publicDirPath);
hbs.registerPartials(partialDirPath);

//set up static directory to serve
app.use(express.static(publicDirPath));

app.get('/about', (req, res) => {
    res.render('index',{
        title : "about"
    })
});
app.get('/help', (req, res) => {
    res.render('index',{
        title : "help"
    })
});
app.get('/json', (req, res) => {
    res.json({
        name : "Prasad",
        role : "Developer"
    });
});

app.get('*', (req, res) => {
    res.sendStatus(404);
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
})
