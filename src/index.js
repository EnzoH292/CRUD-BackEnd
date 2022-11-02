import express from 'express'

//crear una instalcia de express
const app = express();

//creamos una variable
app.set('port', process.env.PORT || 4000);

//usar el puerto
app.listen( app.set('port'), ()=>{
    console.log( 'Estoy en el puerto ' + app.get('port') );
} )

console.log("Hola Mundo");