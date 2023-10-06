export async function cargarPokemones(myContent){
    let datosDePokeapi=(await (await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")).json())
    let defaultImg = "https://i.pinimg.com/originals/27/ae/5f/27ae5f34f585523fc884c2d479731e16.gif";
    let urlDelPokemon
    for (let i=0;i<datosDePokeapi.results.length;i++){
        urlDelPokemon = datosDePokeapi.results[i].url;
        let datosDeCadaPokemon = (await (await fetch(urlDelPokemon)).json());
        myContent.insertAdjacentHTML("beforeend",`
        <div>
        <h2>${datosDeCadaPokemon.name}</h2>
        <img class="pokemonTypeContainer" pokeName="${datosDeCadaPokemon.name}" src="${datosDeCadaPokemon.sprites.front_default ? datosDeCadaPokemon.sprites.front_default:defaultImg}" alt="${datosDeCadaPokemon.name}">
                ${datosDeCadaPokemon.types.map(data => `<span>${data.type.name}</span><br>`
                ).join("")}
        </div>
        `);
    }
}
export async function buscarPokemones(myContentSearch,type){
    let datosDePokeapi=(await (await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0")).json())
    let defaultImg = "https://i.pinimg.com/originals/27/ae/5f/27ae5f34f585523fc884c2d479731e16.gif";
    let urlDelPokemon
    for (let i=0;i<datosDePokeapi.results.length;i++){
        urlDelPokemon = datosDePokeapi.results[i].url;
        let datosDeCadaPokemon = (await (await fetch(urlDelPokemon)).json());

        datosDeCadaPokemon.types.map(data => {
            if (data.type.name==type){
                myContentSearch.insertAdjacentHTML("beforeend",`
                <div>
                <h2>${datosDeCadaPokemon.name}</h2>
                <img class="pokemonTypeContainer" pokeName="${datosDeCadaPokemon.name}" src="${datosDeCadaPokemon.sprites.front_default ? datosDeCadaPokemon.sprites.front_default:defaultImg}" alt="${datosDeCadaPokemon.name}">
                        ${datosDeCadaPokemon.types.map(data => `<span>${data.type.name}</span><br>`
                        ).join("")}
                </div>
                `);
            }
        });
    }
}

export async function ventanaEmergentePokemons(namePokemon){
    let res = (await (await fetch("https://pokeapi.co/api/v2/pokemon/"+namePokemon)).json());
    console.log(res);
    let img = res.sprites.front_default;
    let defaultImg = "https://i.pinimg.com/originals/27/ae/5f/27ae5f34f585523fc884c2d479731e16.gif";

    function updateValue(e) {
        const input = e.target;
        const statName = input.getAttribute("pokeStatName");
        const valueDisplay = document.getElementById(statName);
        valueDisplay.textContent = input.value;
    }

    Swal.fire({
        title: `${namePokemon.toUpperCase()}`,
        text: "Modal with a custom image.",
        imageUrl: `${img ? img : defaultImg}`,
        html: `
        ${res.stats.map(data => `<input max="150" type="range" class="range" value="${data.base_stat}" pokeStatName="${data.stat.name}" idName="${res.name}"><label><b id="${data.stat.name}" idBase="${data.stat.name}">${data.base_stat}</b> ${data.stat.name.toUpperCase()} </label><br>`
        ).join("")}
        `,
        imageWidth: "80%",
        imageHeight: "80%",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
        }).then((result) => {
        if (result.isConfirmed) {
        
        } else if (result.isDenied) {
        
        }
    });

    const inputRanges = document.querySelectorAll('.range');
    inputRanges.forEach(input => {
        input.addEventListener('input', updateValue);
    });
    
}
export async function crearObjeto(val, name, statName){
    let res = (await (await fetch("https://pokeapi.co/api/v2/pokemon/"+name)).json());
    let datosDefault = {
        name: res.name,
        hp: res.stats[0].base_stat,
        attack: res.stats[1].base_stat,
        defense: res.stats[2].base_stat,
        specialAttack: res.stats[3].base_stat,
        specialDefense: res.stats[4].base_stat,
        speed: res.stats[5].base_stat
    }
    return datosDefault;
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