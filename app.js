const express = require('express');
const hbs = require('hbs');

const app = express();
require('dotenv').config();
const port = process.env.PORT;

// Handlebars
// Cargando componentes posibles a reutilizar
hbs.registerPartials( __dirname+'/views/partials')
app.set('view engine', 'hbs');

// Servir contenido estático usando middlewares
app.use( express.static('public') );


// Servir el contenido del home page y demás endpoints cargando los archivos correspondientes con hbs
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'David Tlahupa Coraza',
        titulo: 'Curso de Node'
    });
});
app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'David Tlahupa Coraza',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'David Tlahupa Coraza',
        titulo: 'Curso de Node'
    });
});

app.get('*', (req, res) => {
    res.render('error ', {
        nombre: 'David Tlahupa Coraza',
        titulo: 'Curso de Node'
    });
});


app.listen( port, () => {
    console.log( `Server listening at port ${port}` );
});