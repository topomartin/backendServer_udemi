//Requires

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Iniciar variables

var app = express();


// Body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Importar rutas
var medicoRoutes = require('./routes/medico');
var hospitalRoutes = require('./routes/hospital');
var loginRoutes = require('./routes/login');
var usuarioRoutes = require('./routes/usuario');
var appRoutes = require('./routes/app');



//Conexión a la base de datos

mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (error, res) => {
    if (error) throw err;
    console.log('mongoDB hospitalDB: \x1b[32m%s\x1b[0m', 'online');
})


//Rutas
app.use('/medico', medicoRoutes);
app.use('/hospital', hospitalRoutes);
app.use('/login', loginRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/', appRoutes);




//Escuchar peticiones

app.listen(3000, () => {
    console.log('express Server corriendo en puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});