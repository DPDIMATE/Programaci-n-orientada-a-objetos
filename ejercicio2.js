function Mascota(nombre, especie, edad, peso){
this.nombre = nombre;
this.especie = especie;
this.edad = edad;
this.peso = peso;

this.presentarse = function(){
    return `Hola, yo soy ${this.nombre}, un ${this.especie} de ${this.edad} años y peso ${this.peso} kg.`;
}
}
const mascota1 = new Mascota("Moly", "perro", 2, 10);
const mascota2 = new Mascota("Lukas", "pato", 2, 2);
const mascota3 = new Mascota("Gary", "gato", 5, 5);
console.log(mascota1.presentarse());
console.log(mascota2.presentarse());
console.log(mascota3.presentarse());