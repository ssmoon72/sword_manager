var mongoose = require('mongoose');
var Sword = mongoose.model('Sword');
module.exports = {
  //query database for all swords to display
  show: function(request,response){
    Sword.find({}, function(err, swords){
      response.render('index', {sword: swords});
    })
  },

  //create a new sword and add to database
  create: function(request,response){
    var new_sword = new Sword({name: request.body.name, rarity: request.body.rarity, power: request.body.power});
    new_sword.save(function(err){
      if(err){
        console.log('error');
        response.redirect('/');
      }
      else {
        console.log('added sword');
        response.redirect('/');
      }
    })
  },

  //query database for sword by id to show sword to edit
  show_edit: function(request,response){
      Sword.find({_id: request.params.id}, function(err,swords){
        response.render('edit', {sword: swords});
      })
  },

  //query database for sword by id to view
  detail: function(request,response){
    Sword.find({_id: request.params.id}, function(err,swords){
      response.render('details', {sword: swords});
    })
  },

  //destroy sword by id
  destroy: function(request,response){
    Sword.remove({_id: request.params.id}, function(err){
      if (err){
        console.log('error');
      }
      else{
        response.redirect('/');
      }
    })
  },

  //update a sword's entry in db
  edit: function(request,response){
    Sword.update({_id: request.params.id}, {$set: {name: request.body.name, rarity: request.body.rarity, power: request.body.power}}, function(err){
      if (err){
        console.log('error');
      }
      else{
        response.redirect('/');
      }
    })
  },
}
