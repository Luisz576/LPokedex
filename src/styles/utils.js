export default {
    toUpperCaseFirtsLetter(value = ""){
        return (value && value.length > 0) ? `${value.substr(0, 1).toUpperCase()}${value.substr(1, value.length)}` : ""
    },
    getColorFromType(type){
        switch(type.toLowerCase()){
            case "grass":
                return "green"
            case "fire":
                return "red"
            case "water":
                return "blue"
            case "bug":
                return "green"
            case "normal":
                return "gray"
            case "poison":
                return "purple"
            case "electric":
                return "#EACE09"
            case "ground":
                return "brown"
            case "fairy":
                return "pink"
            case "fighting":
                return "brown"
            case "psychic":
                return "purple"
            case "rock":
                return "gray"
            case "ice":
                return "aqua"
            case "dragon":
                return "red"
            case "dark":
                return "black"
            case "ghost":
                return "gray"
            default:
                return "#000"
        }
    }
}