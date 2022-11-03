import { Router } from "express";
import {crearProductos,listarProductos,} from "../controllers/productos.controllers";

const router = Router(); //se inicializa el enrutador de express

router.route("/productos").get(listarProductos).post(crearProductos);

export default router;
// app.get('/productos', (req, res)=>{
//     res.send('Esto es una prueba de la peticion GET')
// })
// app.post('/productos', (req, res)=>{
//     res.send('Esto es una prueba de la peticion GET')
// })
// app.get('/productos2', (req, res)=>{
//     res.send('Esto es una prueba de la peticion GET')
// })
