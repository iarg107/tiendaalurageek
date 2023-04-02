import { productsServices } from "../services/products_service.js";
// Con la informacion de los campos se crea un nuevo producto en la "base de datos"
const formulario = document.querySelector("[data-form]");
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); 
    const urlimagen = document.querySelector("[data-urlimagen]").value;
    const categoria = document.querySelector("[data-categoria]").value.toLowerCase();
    const nombre = document.querySelector("[data-nombre]").value.toLowerCase();
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value.toLowerCase();

   productsServices.crearProductos(urlimagen, categoria, nombre, precio, descripcion).then(()=>{
     window.location.href = "check.html"
   }).catch(error =>{
     window.location.href = "error.html"
        console.log("Ocurrio un error", error); 
   })
});

