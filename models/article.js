var mongoose = require('mongoose');

//Create ArticleSchema.
var ArticleSchema = new mongoose.Schema({
	title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
});

//Export the model scheme.
module.exports = ArticleSchema;
mongoose.model('article', ArticleSchema);
