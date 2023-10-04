import {cargarPokemones} from "./funciones.js"

let myContent = document.querySelector(".content");
let myContentSearch = document.querySelector(".contentSearch");
addEventListener("DOMContentLoaded",cargarPokemones(myContent))