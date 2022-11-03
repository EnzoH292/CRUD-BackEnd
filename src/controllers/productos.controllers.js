
export const listarProductos = (req, res)=>{
    res.send('Aquí tengo que retornar un arreglo')
}

export const crearProductos = (req, res)=>{
    //extraer del body los datos
    console.log(req.body)
    // agregar la validacion correspondiente
    //guardar ese producto en la base de datos
    res.send('Esto es una prueba de la peticion Post')
}