var express = require('express');
var router = express.Router();

var setActiveTab = function (req, res, next) {
	console.log('entras');
	next();
}

router.get('/', function(req, res, next) {
  res.render('dashboard',
  	{
  		title: 'Recaudia - Dashboard',
  		bodyBackground: '',
  		activeTab: 'dashboard'
  	});
  next();
});

router.get('/events', function(req, res, next) {
  res.render('events',
  	{
  		title: 'Recaudia - Eventos',
  		bodyBackground: '',
  		activeTab: 'events'
  	});
  next();
});

router.get('/events/add', function(req, res, next) {
  res.render('events/add-event',
    {
      title: 'Recaudia - Agregar Evento',
      bodyBackground: '',
      activeTab: 'events'
    });
  next();
});

module.exports = router;
