//Declaramos constantes
const menu = document.getElementById("menu_hamburguesa");
const contWhatsapp = document.getElementById("contenedor_whatsapp");
const iconHamburguesa = document.getElementById('icon_hamburguesa');
const iconCerrarHamburguesa = document.getElementById('cerrar_menu');

//Funcion abrir el menu hamburguesa
export function abrir_menu(){
    iconHamburguesa.addEventListener('click', () => {
        menu.classList.add("visible");

        //Cerramos div whatsapp
        contWhatsapp.classList.add("invisible");
    });
};

//Funcion cerrar el menu hamburguesa
export function cerrar_menu(){
    iconCerrarHamburguesa.addEventListener('click', () => {
        menu.classList.remove("visible");

        //Abrimos div whatsapp
        contWhatsapp.classList.remove("invisible");
    });
};