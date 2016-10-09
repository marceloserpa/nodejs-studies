var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/app_database');
// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var userSchema  = {
    "name" : String,
    "surname" : String
};
// create model if not exists.
module.exports = mongoose.model('User',userSchema);
