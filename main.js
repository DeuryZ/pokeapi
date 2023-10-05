import {cargarPokemones} from "./funciones.js"
import {showListaDeTipos} from "./funciones.js"
import {buscarPokemones} from "./funciones.js"

let myContent = document.querySelector(".content");
let myContentSearch = document.querySelector(".contentSearch");

addEventListener("DOMContentLoaded",
    showListaDeTipos(),
    cargarPokemones(myContent)
);

document.addEventListener("click",async(e) => {
    e.preventDefault();
    if (e.target.matches(".type")) {
        myContent.style.display="none";
        console.log(e.target.getAttribute("idName"));
        buscarPokemones(myContentSearch,e.target.getAttribute("idName"));
    }
    
}
);