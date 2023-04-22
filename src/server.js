const express=require('express'); //dependencia express
const mongoose=require('mongoose'); //dependencia mongoose
const personsRoutes=require('./routes/persons');    //ruta de persons
require("dotenv").config(); //variable de ambiente

mongoose.Promise=global.Promise;
const app=express();    //iniciamos la aplicacion de express
const port=process.env.PORT || 3000;    //usamos el puerto establecido, si no usamos el puerto 3000

app.set('view engine', 'ejs');  //establecemos el motor de vistas
app.use(express.urlencoded({extended: false}));
app.use(personsRoutes); //usamos la ruta de persons


//ruta principal de mi servidor
app.get("/", (req,res)=>{
    res.send('Mi servidor')
})

//coneccion con mongoDB
mongoose
.connect(process.env.MONGODB) 
.then(()=>console.log('connected to MongoDB Atlas database "TEST"'))//mensaje a la consola para verificar la conexion
.catch((error)=>console.log(error))//en caso de error

app.listen(port,()=>console.log('server listening on port', port)); //mensaje para mi consola para saber que esta funcionado correctamente al correr el documento
