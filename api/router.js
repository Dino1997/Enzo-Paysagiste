// Import
const express = require('express'),
    router = express.Router(),
    path = require('path')

// Controller
const homeController = require('./controllers/homeController'),
    idController = require('./controllers/idController'),
    contactController = require('./controllers/contactController'),
    adminController = require('./controllers/adminController'),
    loginAdminController = require('./controllers/loginAdminController'),
    mesRealisationsController = require('./controllers/mesRealisationsController');



// Home
router.route('/')
    .get(homeController.get)

// Article
router.route('/article/:id')
    .get(idController.get)

// Contact
router.route('/contact')
    .get(contactController.get)

// Admin
router.route('/admin')
    .get(adminController.get)

//LoginAdmin    
router.route('/loginAdmin')
    .get(loginAdminController.get)

//MesRealisations
router.route('/mesRealisations')
    .get(mesRealisationsController.get)

module.exports = router;