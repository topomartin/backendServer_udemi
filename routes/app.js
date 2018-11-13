var express = require('express');
paraborrar;

var app = express();


app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'petición realizada correctamente'
    });
});

module.exports = app;