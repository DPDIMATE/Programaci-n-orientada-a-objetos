const prompt = require('prompt-sync')();
function Vehiculo(marca, modelo, año, color, combustible){ 
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.color = color;
    this.combustible = combustible;
    this.mostrarInformacion = function() {
        console.log(`vehiculo: ${this.marca} ${this.modelo}, año: ${this.año}, color: ${this.color}, combustible: ${this.combustible}`);
    };
    this.cambiarColor = function(nuevoColor) {
        this.color = nuevoColor;
        console.log(`El color del vehiculo ${this.marca} ${this.modelo} ha sido cambiado a: ${this.color}`);
    };
this.cambiarCombustible = function(nuevoCombustible) {
    this.combustible = nuevoCombustible;
    console.log(`El tipo de combustible del vehiculo ${this.marca} ${this.modelo} ha sido cambiado a: ${this.combustible}`);
};
}
const marca1 = prompt("Ingrese la marca del vehiculo 1");
const modelo1 = prompt("Ingrese el modelo del vehiculo 1");
const año1 = prompt("Ingrese el año del vehiculo 1");
const color1 = prompt("Ingrese el color del vehiculo 1");
const combustible1 = prompt("Ingrese el tipo de combustible del vehiculo 1");

const marca2 = prompt("Ingrese la marca del vehiculo 2");
const modelo2 = prompt("Ingrese el modelo del vehiculo 2");
const año2 = prompt("Ingrese el año del vehiculo 2");
const color2 = prompt("Ingrese el color del vehiculo 2");
const combustible2 = prompt("Ingrese el tipo de combustible del vehiculo 2");

const marca3 = prompt("Ingrese la marca del vehiculo 3");
const modelo3 = prompt("Ingrese el modelo del vehiculo 3");
const año3 = prompt("Ingrese el año del vehiculo 3");
const color3 = prompt("Ingrese el color del vehiculo 3");
const combustible3 = prompt("Ingrese el tipo de combustible del vehiculo 3");

const vehiculo1 = new Vehiculo(marca1, modelo1, año1, color1, combustible1);
const vehiculo2 = new Vehiculo(marca2, modelo2, año2, color2, combustible2);
const vehiculo3 = new Vehiculo(marca3, modelo3, año3, color3, combustible3);

vehiculo1.mostrarInformacion();
vehiculo1.cambiarColor("rosa");
vehiculo1.cambiarCombustible("eléctrico");
vehiculo2.mostrarInformacion();
vehiculo3.mostrarInformacion();

/// el programa puede trabajr con diferentes datos sin tener que modificar el codigo cada rato
