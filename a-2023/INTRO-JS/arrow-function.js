//function exression
let viajando = function(destino) {
    return `viajando a la ciudad de ${destino}`
}

let viaje = viajando('roma')
console.log(viaje)

//arrow functions

let viajando2 = (destino, duracion) => `Viajando a la ciudad de ${destino} por ${duracion} `

let viaje2 = viajando2('londres', '9 dias')

// area

let lado1 = 2
let lado2 = 3

// let triangulo = fuction(lado1, lado2) {
//     return (lado1 * lado2 / 2)
// }

let triangulo2 = (lado1, lado2) => `${lado1} ${lado2}`

let area = triangulo2(lado1 * lado2 / 2)