export async function cargarPokemones(myContent){
    let datosDePokeapi=(await (await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")).json())
    let defaultImg = "https://i.pinimg.com/originals/27/ae/5f/27ae5f34f585523fc884c2d479731e16.gif";
    let urlDelPokemon
    for (let i=0;i<datosDePokeapi.results.length;i++){
        urlDelPokemon = datosDePokeapi.results[i].url;
        let datosDeCadaPokemon = (await (await fetch(urlDelPokemon)).json());
        console.log(datosDeCadaPokemon);
        myContent.insertAdjacentHTML("beforeend",`
        <div class="pokemonTypeContainer" pokeName="${datosDeCadaPokemon.name}"></div>
        <h2>${datosDeCadaPokemon.name}</h2>
        <img src="${datosDeCadaPokemon.sprites.front_default ? datosDeCadaPokemon.sprites.front_default:defaultImg}" alt="${datosDeCadaPokemon.name}">
                ${datosDeCadaPokemon.types.map(data => `<span>${data.type.name}</span><br>`
                ).join("")}
        </div>
        `);
    }
}
export async function buscarPokemones(myContentSearch,type){
    let datosDePokeapi=(await (await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")).json())
    let defaultImg = "https://i.pinimg.com/originals/27/ae/5f/27ae5f34f585523fc884c2d479731e16.gif";
    let urlDelPokemon
    for (let i=0;i<datosDePokeapi.results.length;i++){
        urlDelPokemon = datosDePokeapi.results[i].url;
        let datosDeCadaPokemon = (await (await fetch(urlDelPokemon)).json());
        console.log(datosDeCadaPokemon);
        datosDeCadaPokemon.types.map(data => {
            console.log(type);
            if (data==type){
                console.log(data);
                myContentSearch.insertAdjacentHTML("beforeend",`
                <div class="pokemonTypeContainer" pokeName="${data.name}"></div>
                <h2>${data.name}</h2>
                <img src="${data.sprites.front_default ? data.sprites.front_default:defaultImg}" alt="${datosDeCadaPokemon.name}">
                        ${data.types.map(data => `<span>${data.type.name}</span><br>`
                        ).join("")}
                </div>
                `);

            }
        })
        // myContent.insertAdjacentHTML("beforeend",`
        // <div class="pokemonTypeContainer" pokeName="${datosDeCadaPokemon.name}"></div>
        // <h2>${datosDeCadaPokemon.name}</h2>
        // <img src="${datosDeCadaPokemon.sprites.front_default ? datosDeCadaPokemon.sprites.front_default:defaultImg}" alt="${datosDeCadaPokemon.name}">
        //         ${datosDeCadaPokemon.types.map(data => `<span>${data.type.name}</span><br>`
        //         ).join("")}
        // </div>
        // `);
    }
}
export async function showListaDeTipos(){
    let allTypesPokemon = [
        'grass', 
        'poison',
        'fire', 
        'flying', 
        'water', 
        'bug', 
        'normal', 
        'electric', 
        'ground', 
        'fairy', 
        'fighting', 
        'psychic', 
        'rock', 
        'steel', 
        'ice', 
        'ghost', 
        'dragon', 
        'dark'
    ];
    let myTypes=document.querySelector(".types");
    allTypesPokemon.map(data=>{
        myTypes.insertAdjacentHTML("beforeend", `
        <li class="type" idName="${data}">${data}</li>
        `);
    })
}