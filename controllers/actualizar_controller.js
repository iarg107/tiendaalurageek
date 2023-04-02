import { productsServices } from "../services/products_service.js";

const formulario = document.querySelector("[data-form]");
//Se llenan los campos con los valores de actuales del producto
const obtenerInformacion = async () =>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id == null){
        alert("Ocurrio un error"); 
    }

    const urlimagen = document.querySelector("[data-urlimagen]");
    const categoria = document.querySelector("[data-categoria]");
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");

    try{
        const productos = await productsServices.informacionProducto(id);

        if(productos.urlimagen && productos.categoria && productos.nombre && productos.precio && productos.descripcion){
            urlimagen.value = productos.urlimagen;
            categoria.value = productos.categoria;
            nombre.value = productos.nombre;
            precio.value = productos.precio;
            descripcion.value = productos.descripcion;
        }else{throw new Error();}       
    }catch(error){
        alert("Ocurrio un error"); 
    }
}

obtenerInformacion();
// Se remplazan los valores del producto con aquellos qu sobre escribamos en los campos
formulario.addEventListener("submit", (evento) => {

    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    evento.preventDefault(); 
    const urlimagen = document.querySelector("[data-urlimagen]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

   productsServices.actualizarProducto(urlimagen, categoria, nombre, precio, descripcion, id).then(()=>{
        window.location.href = "check.html"
   }).catch(error =>{
        window.location.href = "error.html"
        console.log("Ocurrio un error", error); 
   })
});
