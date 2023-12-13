const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
let offset = 0;
const limit = 10;


function convertPokemonToLi(pokemon) {
    return ` 
    <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">

            <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
        
            <img src="${pokemon.photo}"
             alt="${pokemon.name}">
        </div>
    </li>
`
}

function loadPokemoItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemoItens(offset, limit)
loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemoItens(offset, limit) 
})