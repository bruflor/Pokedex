export const searchedPokemon = async(element: HTMLButtonElement) => {
    const input = document.getElementById("searchInput") as HTMLInputElement
    const buttonSearch = document.getElementById("buttonSearch")
    const searchApi = async() => {
        const searchBy = input.value
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchBy}`)
        const data = await response.json()
        console.log(data)
        element.innerHTML = `pokemon is ${data.name}`

        return data
    }
    buttonSearch?.addEventListener('click', searchApi)

}
