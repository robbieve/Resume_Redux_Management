var mongoose = require('mongoose');
var schema = mongoose.Schema;

var databaseSchema = new schema({
    DatabaseName: {type:String, required: true},
    IsActive: {type:Boolean, default: true},
    IsDelete: {type:Boolean, default: false}
});

module.exports = mongoose.model('Database', databaseSchema);
