const mongoose=require('mongoose'); //dependencia mongoose
let PersonsSchema=new mongoose.Schema({
    nombre:String,
    edad:String,
    tipoSangre: String,
    nss: String
});

module.exports=mongoose.model('Persons',PersonsSchema)