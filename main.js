import {cargarPokemones} from "./funciones.js"
import {showListaDeTipos} from "./funciones.js"
import {buscarPokemones} from "./funciones.js"
import {seleccionVentanaEmergente} from "./funciones.js"
import {guardarPokemon} from "./funciones.js"
import { editarPokemon } from "./funciones.js"

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
        myContentSearch.innerHTML="";
        buscarPokemones(myContentSearch,e.target.getAttribute("idName"));
    }
    if (e.target.matches(".pokemonTypeContainer")){
        let name = e.target.getAttribute("pokeName")
        seleccionVentanaEmergente(name)
        guardarPokemon(name);
    }
    if (e.target.matches(".range")){
        let nombreStat = e.target.getAttribute("pokestatname");
        let valorStat = e.target.value;
        let idPokemon = e.target.getAttribute("idMokapi");
        editarPokemon(idPokemon, nombreStat, valorStat);
    }
});


