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
  		activeTab: 'dashboard',
      cards: {
        sold_tickets: 300,
        raised_money: "600.000",
        events_held: 5,
        sold_tickets_percentage: 75
      },
      active_events:
      [
        {
          name: '438204823904890238903890284908402398490',
          date: '27/06/17',
          total: '100/500',
          amount: '150.000'
        },
        {
          name: '438204823904890238903890284908402398490',
          date: '27/06/17',
          total: '100/500',
          amount: '150.000'
        },
        {
          name: '438204823904890238903890284908402398490',
          date: '27/06/17',
          total: '100/500',
          amount: '150.000'
        },
        {
          name: '438204823904890238903890284908402398490',
          date: '27/06/17',
          total: '100/500',
          amount: '150.000'
        },
        {
          name: '438204823904890238903890284908402398490',
          date: '27/06/17',
          total: '100/500',
          amount: '150.000'
        }
      ]
  	});
  next();
});

router.get('/events', function(req, res, next) {
  res.render('events',
  	{
  		title: 'Recaudia - Eventos',
  		bodyBackground: '',
  		activeTab: 'events',
      events:
      [
        {
          show: true,
          name: '43820482390489023389 0284908 402398490',
          date: '27/06/17',
          seats: '100/500',
          amount: '150.000',
          status: 'in-progress'
        },
        {
          show: false,
          name: '43820482390489023389 0284908 402398490',
          date: '27/06/17',
          seats: '100/500',
          amount: '150.000',
          status: 'in-progress'
        },
        {
          show: true,
          name: '43820482390489023389 0284908 402398490',
          date: '27/06/17',
          seats: '100/500',
          amount: '150.000',
          status: 'done'
        },
        {
          show: false,
          name: '43820482390489023389 0284908 402398490',
          date: '27/06/17',
          seats: '100/500',
          amount: '150.000',
          status: 'done'
        }
      ]
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
