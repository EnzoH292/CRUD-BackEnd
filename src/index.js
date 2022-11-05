import express from 'express'
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import productosRouter from './routes/productos.routes';
import './database'

//crear una instalciar de express
const app = express();

//creamos una variable
app.set('port', process.env.PORT || 4000);

//usar el puerto
app.listen( app.set('port'), ()=>{
    console.log( 'Estoy en el puerto ' + app.get('port') );
} )

//middlewares: funciones que se configuran antes de las rutas
app.use(morgan('dev')); //Da informacion extra en la terminal
app.use(cors());//pedir peticiones remotas

//middlewares para interpretar los objetos json que llegan en las peticiones
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//cargar un archivo estático
app.use(express.static( path.join(__dirname, '../public') ))
//console.log(path.join(__dirname, '../public')) sirve para pronbar la ruta

//Rutas: nombre de dominio + ----
// http://localhost:4000/prueba
app.use('/apicafe', productosRouter)