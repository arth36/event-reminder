const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create event Schema & model
const EventSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Name field is required']
    },
    entryfees:{
        type: String
    },
    host:{
        type: String
    },
    chiefguest:{
        type: String
    },
    date:{
        type: Date
    }
});
const Event = mongoose.model('event', EventSchema);

module.exports = Event;