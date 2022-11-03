import Producto from "../models/producto"

export const listarProductos = async (req, res)=>{
    try {
 
    //Buscar todos los productos en la base de datos
    const listaProductos = await Producto.find();

    //responder al usuario que todo salio bien
    res.status(200).json(listaProductos)
    } catch (error) {
       console.log(error);
       res.status(404).json({
           mensaje: 'Error al intentar buscar los productos'
       }); 
    }
};

export const crearProductos = async (req, res)=>{
   
    try {
        //extraer del body los datos
    console.log(req.body)
    // agregar la validacion correspondiente

    const productoNuevo = new Producto(req.body);
    //guardar ese producto en la base de datos
    await productoNuevo.save();
    //responder al usuario que todo salio bien
    res.status(201).json({
        mesaje:'El producto fue correctamente creado'
    }); 
    } catch (error) {
       console.log(error);
       res.status(400).json({
           mensaje: 'Error al intentar agregar un producto'
       }); 
    }
};