var restful = require('node-restful');

module.exports = function(app, route) {

	//Setup the controller for REST.
	var rest = restful.model(
		'article',
		app.models.article
	).methods(['get', 'put', 'post', 'delete']);

	rest.register(app, route);

	//Return middleware.
	return function(req, res, next) {
		next();
	};
};