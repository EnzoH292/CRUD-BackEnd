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

export const obtenerProducto = async (req, res) => {
    try {
        //obtener el parámetro
        console.log(req.params.id)
        //pedirle a la bd buscar el documento que corresponda con el id del parámetro
        const productoBuscado = await Producto.findById(req.params.id);
        //responder con el producto encontrado
        res.status(200).json(productoBuscado);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error, no se pudo encontrar el producto solicitado'
        })
    }
};

export const editarProducto = async (req, res) => {
    try {
        //buscar el producto por el id y luego modificar los datos con el body
        await Producto.findByIdAndUpdate(req.params.id, req.body);
        //responder al front end
        res.status(200).json({
            mensaje:'El producto fue editado correctamente'
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'El producto solicitado, no se pudo modificar'
        })
    }
};
export const borrarProducto = async (req, res) => {
    try {
        //buscar un producto por id y borrar
        await Producto.findByIdAndDelete(req.params.id);
        //responder al front end si se pudo eliminar un producto
        res.status(200).json({
            mensaje: "El producto fue correctamente eliminado" 
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'El producto solicitado, no pudo ser eliminado'
        })
    }
};