var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
const Customer = require('../models').customer;  

router.get('/findAll/json', function(req, res, next) {  

	
    Customer.findAll({  
        attributes: { exclude: ["id","salesRepEmployeeNumber","createdAt","updatedAt"] }  
    })  
    .then(customers => {  
        res.json(customers);  
    })  
    .catch(error => res.status(400).send(error)) 
  
  });

  router.get('/findAll/view', function(req, res, next) {  

  
    Customer.findAll({  
        attributes: { exclude: ["id","salesRepEmployeeNumber","createdAt","updatedAt"] }  
    })  
    .then(customers => {  
        res.render('customers', { title: 'Customers', arrCustomers: customers });  
    })  
    .catch(error => res.status(400).send(error)) 
  
  });

  router.get('/findAll/viewSimple', function(req, res, next) {  

  
    Customer.findAll({  
        attributes: ["customerNumber","customerName","contactLastName","contactFirstName"] 
    })  
    .then(customers => {  
        res.render('customersSimple', { title: 'Customers', arrCustomers: customers });  
    })  
    .catch(error => res.status(400).send(error)) 
  
  });

  //prueba

  router.get('/findAllByCountry/:country/json', function(req, res, next) {  

    let country = req.params.country;
  
    Customer.findAll({  
        attributes: { exclude: ["id","salesRepEmployeeNumber","createdAt","updatedAt"] } ,
        where: { 
          [Op.and]: [
            {country: country}
          ]
        }
    })  
    .then(customers => {  
        res.json(customers);  
    })  
    .catch(error => res.status(400).send(error)) 
  
  });

module.exports = router;