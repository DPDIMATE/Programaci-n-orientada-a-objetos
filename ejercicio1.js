function computador(marca, procesador, ram, precio) {
    this.marca = marca;
    this.procesador = procesador;
    this.ram = ram;
    this.precio = precio;
}

const computadora1 = new computador("Apple", "Intel core i7", "16GB", 4500000);
const computadora2 = new computador("HP", "Intel core i7", "16GB", 3200000);
const computadora3 = new computador("Lenovo", "Intel core i9", "32GB", 5200000);

console.log(computadora1);
console.log(computadora2);
console.log(computadora3);
/// la ventaja es poder crear varios computadores sin repetir la estructura 
