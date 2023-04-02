import { productsServices } from "../services/products_service.js";
const buscar = document.querySelector("[data-search]");
//Se realiza una busqueda del  producto en base a su nombre y este nos redirige a su pagina (si es que existe alguna)
buscar.addEventListener("click", (evento) =>{
   const quest = document.querySelector("[data-quest]").value; 
   let redireccionar = true;
   productsServices.listaProductos().then((data)=>{ 
      data.forEach(({nombre, id}) => {
         
         if(quest == nombre){
         redireccionar = true;  
          window.location.href = `producto.html?id=${id}`
         }
         else{
         redireccionar = false;         
         }
      });
  
  }).catch((error)=>{ 
     console.log("Ocurrio un error ", error);
  });
  if(!redireccionar){
   alert("No se encontro el producto");
   window.location.reload();
}
});
