module.exports = async function createPokemon(data){
    data["evolues"] = await api.getEvolvesFromSpecies(data["name"])
    return new Pokemon(data)
}

class Pokemon{
    constructor(data){
        if(!data) return
        this.id = data["id"]
        this.name = data["name"]
        this.weight = data["weight"]
        this.image_url = data["sprites"] ? data["sprites"]["front_default"] : null
        this.type = data["types"] && data["types"][0] && data["types"][0]["type"] ? data["types"][0]["type"]["name"] : null
        this.evoluesOf = data["evolues"] ? data["evolues"] : []
    }
}