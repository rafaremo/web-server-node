const express = require('express');
const app =  express();
//traer mongoose
const mongoose = require('mongoose');
//Instalar el sistema de templates handlebars
require('hbs');

//importar modelo
const User = require( './models/User' );
const Address = require('./models/Address');
const Order = require('./models/Order');
const Item = require('./models/Item');

//Config de Hbs (Handlebars)
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

//necesitamos conectarnos a la base de datos
mongoose.connect('mongodb://localhost:27017/candyIndependenceDay', (err) => {
  if(err) return console.log(err);
  return console.log('Conectado a la BD');
});

app.use(express.static( __dirname + '/public' ));

app.get('/usuario', (req, res) => {
  User.find({}, (err, users) => {
    if(err) return res.status(404).send(err);
    res.render('subcarpeta/usuarios', {users});
  });
});

app.get('/item', (req, res) => {
  Item.create({
    name: 'Taco de Pastor',
    flavor: 'pastor',
    weight: 10
  });
  res.send('Item creado');
});

app.get('/order', (req, res) => {
  Order.create({
    restaurant: 'Tacos de Joss',
    items: ['5b3d00f14815423ddca7cb6a'], //add item ID
    quantity: 3,
    totalPrice: 10
  });
  res.send('Order creado');
});

app.get('/address', (req, res) => {
  Address.create({
    street: 'Insurgentes Sur',
    number: '1377',
    city: 'Mexico',
    zip: 03230
  });
  res.send('adress creado');
});

app.get('/user', (req, res) => {
  //ruta para crear usuario
  User.create({
    email: 'bliss@bliss.com.mx',
    addresses: ['5b3d011969aed93de88f8d46'], //add address ID
    orders: ['5b3d011469aed93de88f8d45'] //add order ID
  });
  res.send('Usuario Creado');
});

app.get('/', (req, res) => {
  res.sendFile( __dirname + '/index.html' );
});

app.get('/bliss', (req, res) => {
  res.send();
});

//utilizar templates
app.get('/template', (req, res) => {
  var active = true;
  var name = 'Rafael González';
  const user = {
    name,
    age: 27,
    job: 'COO',
    active
  };
  res.render('profile', user);
});

app.get('/users', (req,res) => {
  var lista = [
    {
      name: 'Bliss',
      age: 27
    },
    {
      name: 'Blisito',
      age: 15
    },
    {
      name: 'Bloss',
      age: 50
    },
    {
      name: 'Bless',
      age: 25
    }
  ];
  const context = {lista};
  res.render('users', context);
});

app.listen(3000, () => {
  console.log('estoy escuchando en el puerto 3000');
});