//Declaramos constantes
const menu = document.getElementById("menu_hamburguesa");
const contWhatsapp = document.getElementById("contenedor_whatsapp");

//Funciones
//Funcion abrir el menu hamburguesa
function abrir_menu(){
    //Abrimos menu
    menu.classList.add("visible")

    //Cerramos div whatsapp
    contWhatsapp.classList.add("invisible")
}

//Funcion cerrar el menu hamburguesa
function cerrar_menu(){
    //Cerramos menu
    menu.classList.remove("visible")

    //Abrimos div whatsapp
    contWhatsapp.classList.remove("invisible")
}

