// reto 1 de backend

var express = require('express');
var faker = require('faker');
var _ = require('lodash');

var app = express();

var generaPost = function() {
    var randomName = faker.name.findName();
    var randomId = faker.random.uuid();
    var randomContent = faker.lorem.sentence();
    var randomDate = faker.date.past();
    var randomImage = faker.image.people();

    return {
        id: randomId,
        nombre: randomName,
        contenido: randomContent,
        fecha: randomDate,
        imagen: randomImage
        }
    }

app.get('/', function (req, res){
    res.send('Mi primer RETO !!!');
    })

app.get('/posts', function(req, res){
    var veces = _.random(2,4);
    var post = _.times(veces, generaPost);

    res.json(post);
    })

app.listen(3000);
