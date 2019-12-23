const express = require('express');
const router = express.Router();
const Event = require('../data/events');

// get a list of events from the db
router.get('/events', function(req, res, next){
    res.send({
        type:'GET'
    });
});

// add a new event to the db
router.post('/events', function(req, res, next){
    Event.create(req.body).then(function(event){
        res.send(event);
    }).catch(next);
});

// update a event in the db
router.put('/events/:id', function(req, res, next){
    res.send({
        type:'PUT'
    });
});

// delete a event from the db
router.delete('/events/:id', function(req, res, next){
    res.send({
        type:'DELETE'
    });
});

module.exports = router;