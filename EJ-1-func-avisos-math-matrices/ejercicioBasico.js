/* Ejercicios

1. Realice una concatenación entre dos cadenas literales para que devuelva su edad en un
console.log( “” )
2. Utilice los elementos de valores numéricos para: Sumar, Restar, Dividir, multiplicar, dividir dos
números.
3. Utilizando condicionales múltiples, realice un <script> que verifique la edad de Jubilación de
una persona.
4. Ídem ejercicio anterior, verificando el sexo, siendo que la edad de Jubilación para el Hombre
es de 65 años y la Mujer a los 60 años.
5. En el siguiente ejemplo se ven los BUCLES de interacción. */

let nombre = "Camilo"
let apellido = "escar"
let edad = 28

let datos = `Su nombre es ${nombre}, y su apellido ${apellido} y tiene ${edad} años`
console.log(`Realice una concatenación entre dos cadenas literales para que devuelva su edad en un console.log( “” )`)

console.log(datos)
console.log()
let n1 = 20
let n2 = 30

console.log(`Utilice los elementos de valores numéricos para: Sumar, Restar, Dividir, multiplicar, dividir dos números.`)
console.log()
console.log(`El primer numero vale... ${n1}`)
console.log(`El segundo numero vale... ${n2}`)

// suma
console.log(`Sumando... ${n1 + n2}`)

//resta
console.log(`Restando... ${n1 - n2}`)

//dividir
console.log(`Dividiendo... ${n1 / n2}`)

//multiplicar
console.log(`Multiplicando... ${n1 * n2}`)

//Dividiendo dos numeros
console.log(`Dividiendo dos numeros... ${n1 / (n1 * n2)}`)


console.log(`Utilizando condicionales múltiples, realice un <script> que verifique la edad de Jubilación de una persona.`)

console.log('Ídem ejercicio anterior, verificando el sexo, siendo que la edad de Jubilación para el Hombre es de 65 años y la Mujer a los 60 años.')
console.log(

)
function puedeJubilarse(edad, sexo, aportes){
    let puedeHacerlo = false;
    if(sexo == "masc"){
         if(edad >= 65){
              if(aportes >= 30){
                   puedeHacerlo = true;
              }
         }
    }else if(sexo == "fem"){
         if(edad >= 60){
              if(aportes >= 30){
                   puedeHacerlo = true;
              }
         }
    }
    return puedeHacerlo
}
console.log(puedeJubilarse('masc', 68, 5))
console.log(

)

console.log('En el siguiente ejemplo se ven los BUCLES de interacción.')