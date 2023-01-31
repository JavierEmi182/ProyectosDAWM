
const e = require('express');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const models = require('../models').default;

router.get('/findAll/json', function(req, res, next) {

    models.sales_customers.find( (err, response) => {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting sales.',
                error: err
            });
        }
  
        return res.json(response);
    });
  
  });

  router.get('/findById/:_id/json', function(req, res, next) {

    var _id = req.params._id;
  
    models.sales_customers.find({_id: _id}, function (err, response) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting sales.',
                error: err
            });
        }
  
        if (!response) {
            return res.status(404).json({
                message: 'No such sales'
            });
        }
  
        return res.json(response);
    });
  
  });

  //TODO CIERTO CUSTOMER
  router.get('/findByCustomerId/:customerNumber/json', function(req, res, next) {

    var customerNumber = req.params.customerNumber;
  
    models.sales_customers.find({customerNumber: customerNumber}, function (err, response) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting sales.',
                error: err
            });
        }
  
        if (!response) {
            return res.status(404).json({
                message: 'No such Customer number'
            });
        }
  
        return res.json(response);
    });
  
  });

  //TODO CIERTO CUSTOMER Y SHIPPED
  router.get('/findByCustomerIdShipped/:customerNumber/json', function(req, res, next) {

    var customerNumber = req.params.customerNumber;
    var status='Shipped'
    //var status =req.params.status;
  
    models.sales_customers.find({customerNumber: customerNumber,status:status}, function (err, response) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting sales.',
                error: err
            });
        }
  
        if (!response) {
            return res.status(404).json({
                message: 'No such Customer number'
            });
        }
  
        return res.json(response);
    });
  
  });

  //SUMA 


  router.get('/sumar/json', async function(req, res, next) {
    var customerNumber = req.params.customerNumber;

    

    let results = await models.sales_customers.aggregate([{
        
        $group:{
            _id:"$customerNumber",
            //_id:{$meta:"indexKeys"},
            totalAmmount:{$sum:{ $multiply:["$priceEach","$quantityOrdered"]}},
            count:{$sum:1}
        }
        }])

    return res.json(results);
    })


module.exports = router;