const searchedWord = document.getElementById("searchInput")
const buttonSearch = document.getElementById("buttonSearch")

const searchPokemon = async() => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchedWord.value}`)
    const data = await response.json()
    console.log(data)
}

buttonSearch.addEventListener('click', searchPokemon)