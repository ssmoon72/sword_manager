//import mongoose
var mongoose = require('mongoose');
//set up object constructor for quotes
var SwordSchema = new mongoose.Schema({
 name: String,
 rarity: String,
 power: String,
}, {timestamps: true}
);

//getting schema
var Sword = mongoose.model('Sword', SwordSchema);
