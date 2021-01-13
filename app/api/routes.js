module.exports = function(app){
    var api = require('./controllers/api');
    app.get('/', api.findAll);
    app.get('/:id', api.findById);
    app.post('/', api.add);
    app.put('/id', api.update);
    app.delete('/id', api.delete);
}
