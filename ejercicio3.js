function Estudiante(nombre, edad, nota) {
    this.nombre = nombre;
    this.edad = edad;
    this.nota = nota;
    this.aprobado = this.nota >= 3.0;
    this.MostrarResultado = function() {
      if (this.aprobado) {
        return `${this.nombre} ha aprobado con una nota de ${this.nota}.`;
        } else {
            return `${this.nombre} ha reprobado con una nota de ${this.nota}.`;
}
    };
}
const estudiante1 = new Estudiante("Diana", 25, 5.0);
const estudiante2 = new Estudiante("Jorge", 50, 2.9);
const estudiante3 = new Estudiante("Evelyn", 20, 1.0);
const estudiante4 = new Estudiante("Ana", 35, 4.2);
console.log(estudiante1.MostrarResultado());
console.log(estudiante2.MostrarResultado());
console.log(estudiante3.MostrarResultado());
console.log(estudiante4.MostrarResultado());
///que cada estudiante puede conocer si aprobo o no 

