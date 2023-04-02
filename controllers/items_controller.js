import { productsServices } from "../services/products_service.js";
//De manera dinamica se despliegan todos los productos localizados en la base de datos dependiendo de su categoria (tambien aplica para los relacionados cuando deseamos ver algun producto en especifico)
const crearNuevaLinea = (urlimagen, nombre, precio, id) =>{
    const linea = document.createElement("div");
    const content = 
    ` 
    <div class="products__caja">
        <ul>
            <li class="products__img"><img src="${urlimagen}"></li>
            <li class="products__nombre">${nombre}</li>
			<li class="products__precio">$${precio}.00</li>
			<li><a class="products__descripcion" href="producto.html?id=${id}">Ver producto</a></li>
        </ul>
     </div>   
    `
linea.innerHTML = content;
return linea;
}

const section1 = document.querySelector("[data-sec1]"); // id "starwars" 
const section2 = document.querySelector("[data-sec2]"); // id "consolas"
const section3 = document.querySelector("[data-sec3]"); // id "diversos"

productsServices.listaProductos().then((data) => {
   
    data.forEach(({urlimagen, categoria, nombre, precio, id}) => {
        const nuevaLinea = crearNuevaLinea(urlimagen, nombre, precio, id);
        if(categoria == section1.id){         
            section1.appendChild(nuevaLinea);
        }
        if(categoria == section2.id){
            section2.appendChild(nuevaLinea);
        }
        if(categoria == section3.id){
            section3.appendChild(nuevaLinea);
        }  
    });

}).catch((error)=>{ 
    console.log("Ocurrio un error ", error);
 });
