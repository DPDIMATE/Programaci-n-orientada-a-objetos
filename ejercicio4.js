function Libro(titulo, autor, año){
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
    this.prestado = false;
this.prestar = function() {
    if (this.prestado === false) {
        this.prestado = true;
        console.log(`El libro "${this.titulo}" esta prestado.`);
    } else {
        console.log(`El libro "${this.titulo}" ya esta prestado.`);
    }
};
this.devolver = function() {
    if (this.prestado === true) {
        this.prestado = false;
        console.log(`El libro "${this.titulo}" ha sido devuelto.`);
    } else {
        console.log(`El libro "${this.titulo}" no estaba prestado.`);
    }
};
}
const libro1 = new Libro("el psicoanalista", "John Katzanbach", 2002);
libro1.prestar();
libro1.prestar();
libro1.devolver();
libro1.devolver();
///si no controla es estado interno entonces prestaria un libro que ya esta 
/// prestado y generaria un error 
