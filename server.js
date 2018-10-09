const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

//variables de entorno de heroku
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'cRistóbal caldErón'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        imagen: 'assets/img/nodejs.jpg'
    });
});

/* app.get('/data', (req, res) => {
    res.send('Hola Data');
}); */

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})