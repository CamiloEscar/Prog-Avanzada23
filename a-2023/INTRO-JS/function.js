function saludar(nombre) {
    console.log (`Bienvenido ${nombre}`);
}

saludar('juan');

//function exression

const cliente = function(nombreDev, skill) {
    console.log(`mostrando datos del cliente: ${nombreDev} ${skill}`);
}

cliente(`Ernesto ledesma`)