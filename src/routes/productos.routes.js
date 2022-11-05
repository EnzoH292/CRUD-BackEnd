import { Router } from "express";
import {borrarProducto, crearProductos,editarProducto,listarProductos, obtenerProducto,} from "../controllers/productos.controllers";
import {check} from "express-validator";

const router = Router(); //se inicializa el enrutador de express

router.route("/productos")
.get(listarProductos)
.post([
    check('nombreProducto')
    .notEmpty()
    .withMessage('El nombre del producto es un caso obligadotorio')
    .isLength({min:2, max:50})
    .withMessage('El nombre debe tener entre 2 y 50 caracteres'),

    check('precio')
    .notEmpty()
    .withMessage('El precio es un dato obligatorio')
    .isNumeric()
    .withMessage('El precio debe ser un número')
    .custom((value)=>{
        if( value >= 1 && value <= 10000 ){
            return true;
        }else{
            throw new Error('El precio debe estar entre 1 y 10000')
        }
    }),

    check('imagen')
    .notEmpty()
    .withMessage('El URL de la imagen es un campo obligatorio')
    .matches(/https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
    .withMessage('Debe enviar una URL válida'),

    check('categoria')
    .notEmpty()
    .withMessage('La categoría es un valor obligatorio')
    .isIn(['bebida caliente', 'bebida fria', 'dulce', 'salado'])
    .withMessage('La categoría debe ser una permitida/correcta')

], crearProductos);




router.route('/productos/:id')
.get(obtenerProducto)
.put([
    check('nombreProducto')
    .notEmpty()
    .withMessage('El nombre del producto es un caso obligadotorio')
    .isLength({min:2, max:50})
    .withMessage('El nombre debe tener entre 2 y 50 caracteres'),

    check('precio')
    .notEmpty()
    .withMessage('El precio es un dato obligatorio')
    .isNumeric()
    .withMessage('El precio debe ser un número')
    .custom((value)=>{
        if( value >= 1 && value <= 10000 ){
            return true;
        }else{
            throw new Error('El precio debe estar entre 1 y 10000')
        }
    }),

    check('imagen')
    .notEmpty()
    .withMessage('El URL de la imagen es un campo obligatorio')
    .matches(/https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
    .withMessage('Debe enviar una URL válida'),

    check('categoria')
    .notEmpty()
    .withMessage('La categoría es un valor obligatorio')
    .isIn(['bebida caliente', 'bebida fria', 'dulce', 'salado'])
    .withMessage('La categoría debe ser una permitida/correcta')
    
],
editarProducto)
.delete(borrarProducto)


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
