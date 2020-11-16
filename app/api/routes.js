module.exports = function(app){
    var api = require('./controllers/api');
    app.get('/node', api.findAll);
    app.get('/node/:id', api.findById);
    app.post('/node', api.add);
    app.put('/node/id', api.update);
    app.delete('/node/id', api.delete);
}
