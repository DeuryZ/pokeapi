export async function cargarPokemones(myContent){
    let datosDePokeapi=(await (await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")).json())
    console.log(datosDePokeapi)
    let defaultImg = "https://i.pinimg.com/originals/27/ae/5f/27ae5f34f585523fc884c2d479731e16.gif";
    for (let i=0;i<datosDePokeapi.results.length;i++){
        console.log(datosDePokeapi.results[i]);
        let urlDelPokemon
    }


}