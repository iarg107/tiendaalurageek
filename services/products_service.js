//Se utiliza el metodo fetch para conectar a la base de datos, cada uno de los metodos mostrados cambia ya sea por su accion o atributos requeridos
const listaProductos = () => fetch("https://apiprueba-gi9l.onrender.com/productos").then( respuesta =>respuesta.json()).catch(err =>console.log("error ",err)); 

const crearProductos = (urlimagen, categoria, nombre, precio, descripcion) =>{
  return fetch("https://apiprueba-gi9l.onrender.com/productos", {
    method: "POST",
    headers:{
      "Content-Type" : "application/json",  
    },
    body:JSON.stringify({urlimagen, categoria, nombre, precio, descripcion, id:uuid.v4()}),
  })
}

const eliminarProductos = (id) =>{
  return fetch(`https://apiprueba-gi9l.onrender.com/productos/${id}`, {
      method: "DELETE",                      
  })  
}

const informacionProducto = (id) =>{
  return fetch(`https://apiprueba-gi9l.onrender.com/productos/${id}`).then((respuesta) => respuesta.json());
}

const actualizarProducto = (urlimagen, categoria, nombre, precio, descripcion, id) =>{
    return fetch(`https://apiprueba-gi9l.onrender.com/productos/${id}`, {
      method:"PUT",
      headers:{
        "Content-Type" : "application/json",  
      },
      body:JSON.stringify({urlimagen, categoria, nombre, precio, descripcion,}),
    }).then(respuesta => respuesta).catch(error =>console.log(error))
}

export const productsServices = {
    listaProductos,
    crearProductos,
    eliminarProductos,
    informacionProducto,
    actualizarProducto,
  };
