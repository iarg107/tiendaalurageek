
const formulario = document.querySelector("[data-form]");
//Una verificacion simple para accder a la seccion de administrador
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); 
    const nombre = document.querySelector("[data-nombre]").value; 
    const password = document.querySelector("[data-password]").value; 

    if (nombre == "usuario" && password == "password"){
        window.location.href = "todos_productos.html"       
    }
    else{     
        alert("Usuario o contrasena incorrectas") 
    }
})

