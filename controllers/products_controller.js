import { productsServices } from "../services/products_service.js";
// Se deslpiegan todos los productos (aplica tanto como para cliente como para administrador)
const crearNuevaLinea = (urlimagen, nombre, precio, id) =>{
    const linea = document.createElement("div");
    const content = 
    ` 
    <div class="todos__productos__caja">
    <ul>
        <li>
            <div class="todos__productos__iconos">
                <a class="todos__productos__editar" href="editar_productos.html?id=${id}"></a>
                <a class="todos__productos__borrar" href="#" id = "${id}" data-del></a>
            </div>
            <img src="${urlimagen}">				
        </li>
        <li class="todos__productos__nombre"> ${nombre}</li>
        <li class="todos__productos__precio">$${precio}.00</li>
        <li class="todos__productos__id">${id}</li>
    </ul>
</div>
`
linea.innerHTML = content;

    const botondel = linea.querySelector("[data-del]"); 
    botondel.addEventListener("click", ()=>{
    const id = botondel.id;
    productsServices.eliminarProductos(id).then(respuesta => {
    console.log(respuesta);
    }).catch((error) =>{
    console.log("Ocurrio un error ", error);
    })
    })

return linea;
}

const lista = document.querySelector("[data-list]"); 
productsServices.listaProductos().then((data)=>{ 

    data.forEach(({urlimagen, nombre, precio, id}) => {
        const nuevaLinea = crearNuevaLinea(urlimagen, nombre, precio, id);
        lista.appendChild(nuevaLinea);      
    });

}).catch((error)=>{ 
   console.log("Ocurrio un error ", error);
});
