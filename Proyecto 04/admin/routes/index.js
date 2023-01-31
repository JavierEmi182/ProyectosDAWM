var express = require('express');
const axios = require('axios');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/customers', async function(req, res, next) {
  //console.log("entre")/*/*
  const URL = 'http://localhost:4444/customers/findAll/json'
  
  //const URL = 'http://localhost:8010/proxy/customers/findAll/json'
  const config = {
    proxy: {
      host: 'localhost',
      port: 4444
      //port:8010
    }
  }
  
  const response = await axios.get(URL)
  console.log(response)

  //response.data.map( item => { item.url = 'http://localhost:4444/'+item.ruta.replace('public/','') } )

  //res.render('index', { title: 'Express' });
  res.render('customers', { title: 'Customers', customers: response.data });
});



//PRUEBAS VER CIERTO CLIENTE
router.get('/customers/search/:id', async function(req, res, next) {
  const URL = `http://localhost:3333/sales_customers/findByCustomerId/${req.params.id}/json`
  
  const response = await axios.get(URL)
  //console.log(response.data)
  res.render('customers_search', { title: `Customer: ${req.params.id}`, sales: response.data });
});

//VER LOS SHIPPED DE CIERTO CLIENTE
router.get('/customers/shipped/:id', async function(req, res, next) {
  const URL = `http://localhost:3333/sales_customers/findByCustomerIdShipped/${req.params.id}/json`
  
  const response = await axios.get(URL)
  //console.log(response.data)
  res.render('customers_search', { title: `Customer: ${req.params.id}`, sales: response.data });
});

//BEST BUYERS
router.get('/reports', async function(req, res, next) {
  const URL = `http://localhost:3333/sales_customers/sumar/json`
  
  const response = await axios.get(URL)
  //console.log(response.data)
  res.render('bestBuyers', { title: `Customer: ${req.params.id}`, sales: response.data });
});


//
module.exports = router;
