module.exports = function(app){
    console.log(__dirname);
    var api = require(`${__dirname}/controllers/api`);
    app.get('/', api.findAll);
    app.get('/:id', api.findById);
    app.post('/', api.add);
    app.put('/id', api.update);
    app.delete('/id', api.delete);
}
