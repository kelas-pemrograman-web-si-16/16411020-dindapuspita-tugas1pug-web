var express = require('express');

var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {nama: 'Dinda Puspita Dewi'})
})
router.get('/regis/', function(req, res, next) {
    res.render('regis', {nama: 'Dinda Puspita Dewi'})
})

module.exports = router;