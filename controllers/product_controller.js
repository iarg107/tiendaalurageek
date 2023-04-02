import { productsServices } from "../services/products_service.js";
//Se deslpiegan los datos de un producto 
const crearNuevaLinea = (urlimagen, nombre, precio, descripcion) =>{
    const linea = document.createElement("div");
    const content = 
    `      
        <img class = "imagen__producto" src="${urlimagen}" alt= "Imagen del producto"/>
			<div  class="producto__descripcion"> 			
				<h2 class="titulo__producto">${nombre}</h2>
                <h3 class="titulo__secundario__producto">$${precio}.00</h3>
				<p class="descripcion__producto">
                ${descripcion}	
				</p>
		    </div>	
    `
linea.innerHTML = content;
return linea;
}

const obtenerInformacion = async () =>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id == null){
        alert("Ocurrio un error"); 
    }

    const product = document.querySelector("[data-product]"); 

    try{
        const productos = await productsServices.informacionProducto(id);

        if(productos.urlimagen && productos.nombre && productos.precio && productos.descripcion){
            
             const nuevaLinea = crearNuevaLinea(productos.urlimagen, productos.nombre, productos.precio, productos.descripcion);
             product.appendChild(nuevaLinea); 
             const sec = document.querySelector("[data-sec1]"); 
             sec.id = productos.categoria;
        }else{throw new Error();}       
    }catch(error){
        alert("Ocurrio un error"); 
    }
}

obtenerInformacion();