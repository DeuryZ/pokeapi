import {cargarPokemones} from "./funciones.js"
import {showListaDeTipos} from "./funciones.js"
import {buscarPokemones} from "./funciones.js"
import {ventanaEmergentePokemons} from "./funciones.js"
import {crearObjeto} from "./funciones.js"

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
        ventanaEmergentePokemons(name)
    }
    let datosNew={}
    if (e.target.matches(".range")){
        let val = e.target.value;
        let name = e.target.getAttribute("idName")
        let statName = e.target.getAttribute("pokeStatName")
        let datosDefault =await( crearObjeto(val, name, statName));
        if (datosNew!={}){
            if(statName == "hp"){
                datosNew.hp = val;
            }if(statName == "attack"){
                datosNew.attack = val;
            }if(statName == "defense"){
                datosNew.defense = val;
            }if(statName == "specialAttack"){
                datosNew.specialAttack = val;
            }if(statName == "specialDefense"){
                datosNew.specialDefense = val;
            }if(statName == "speed"){
                datosNew.speed = val;
            }  
        }else{
            if(statName == "hp"){
                datosDefault.hp = val;
            }if(statName == "attack"){
                datosDefault.attack = val;
            }if(statName == "defense"){
                datosDefault.defense = val;
            }if(statName == "specialAttack"){
                datosDefault.specialAttack = val;
            }if(statName == "specialDefense"){
                datosDefault.specialDefense = val;
            }if(statName == "speed"){
                datosDefault.speed = val;
            }    
        }

        console.log('====================================');
        console.log(datosDefault);
        console.log(datosNew);
        console.log('====================================');
    }
});