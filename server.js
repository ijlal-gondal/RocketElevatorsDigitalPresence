// Load Node modules
var express = require('express');
const ejs = require('ejs');
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// Port website will run on
app.set('view engine', 'ejs');

app.listen(8080);

// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
    res.render('pages/index');
    // var name = "Ijlal";
    // // Render index page
    // res.render('pages/index', {
    //     // EJS variable and server-side variable
    //     name: name
    // });

    // var listnames = ["Louise", "Sadie", "Erik", "Raph", "Gina"];
    // // Render index page
    // res.render('pages/index', {
    //     // EJS variable and server-side variable
    //     listnames: listnames
    // });
});

// *** GET Routes - display pages ***
// Root Route
app.get('/residential.html', (req, res) => {
    res.render('pages/residential');
});
app.get('/commercial.html', (req, res) => {
    res.render('pages/commercial');
});
app.get('/request_a_quote.html', (req, res) => {
    res.render('pages/request_a_quote');
});

app.get('/index.html', (req, res) => {
    res.render('pages/index');
});