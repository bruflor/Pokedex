const searchedWord = document.getElementById("searchInput")
const buttonSearch = document.getElementById("buttonSearch")

const searchPokemon = () => {
    console.log(searchedWord.value)
}

buttonSearch.addEventListener('click', searchPokemon)