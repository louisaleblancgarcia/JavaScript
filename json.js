class Persona{

    constructor(nombre, apPaterno,apMaterno, email){

        this.nombre = nombre;
        this.apPaterno =apPaterno;
        this.apMaterno = apMaterno;
        this.email = email;
    }

    imprimePersona =  function(){
        console.log(this);

    }

}


let persona1 = new Persona("Luisa Itzel", "Garcia","Hernandez", "luisa.garcia@gmail.com");
persona1.imprimePersona();

let persona2 = new Persona("Angel Ivan", "Tequida","Andujo", "angel.t@gmail.com");
persona2.imprimePersona();

let persona3 = new Persona("Eva", "Villagomez","Dominguez", "eva@gmail.com");
persona3.imprimePersona();


let personas= [];
personas.push(persona1);
personas.push(persona2);
personas.push(persona3);
console.log(JSON.stringify(personas)); // convierte a JSON

var persona4 = '{ "Nombre": "Lui","apPaterno" : "garcia", "apMaterno" : "Hernandez","email" : "lui@gmail.com" }';


console.log(JSON.parse(persona4)); // verifica si una cadena contiene json valido