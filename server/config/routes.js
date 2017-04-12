var swords = require('../controllers/swords.js');
module.exports = function Route(app, server){

  //render index.ejs and query database for all swords
  app.get('/', function(request,response){
    swords.show(request,response);
  })

  //render form to create new sword
  app.get('/swords/new', function(request,response){
    response.render('new');
  })

  //render form to edit existing sword
  app.get('/swords/edit/:id', function(request,response){
    swords.show_edit(request, response);
  })

  //view a sword in greater detail
  app.get('/swords/:id', function(request,response){
    swords.detail(request,response);
  })

  //route for adding a new sword to database
  app.post('/swords', function(request,response){
    swords.create(request,response);
  })
  //route for removing a sword from db
  app.post('/swords/destroy/:id', function(request,response){
    swords.destroy(request,response);
  })

  //route that processes edits to a sword
  app.post('/swords/:id', function(request,response){
    swords.edit(request,response);
  })
}
