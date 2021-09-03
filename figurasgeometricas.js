//crear clase padre FiguraGeometrica, predefinir propiedades base y altura
// crear 3 clases derivadas de figura geometrica que sean Triangulo, cuadrado y rectangulo
// agregar metodo calcular area de acuerdo a la figura
//triangulo (b*a)/2
//rectanguro b*a
//cuadrado = l*l


class FigurasGeometricas{

    constructor(base, altura){
    
        this.base = base;
        this.altura = altura
    }

}

class Triangulo extends FigurasGeometricas{
    
    calcularArea(){
      return  console.log(`El area del triangulo es: ${(this.base * this.altura)/ 2}`);  
    }
}


class Cuadrado extends FigurasGeometricas{

    calcularArea(){
        return  console.log(`El area es del cuadrado: ${this.base * this.base}`); 
      }
}


class Rectangulo extends FigurasGeometricas{

    calcularArea(){
        return  console.log(`El area del rectangulo es: ${this.base * this.altura}`); 
      }
}


triangulo = new Triangulo(5,8);
console.log(triangulo.calcularArea());

cuadrado = new Cuadrado(9);
console.log(cuadrado.calcularArea());

rectangulo = new Rectangulo(5,10);
console.log(rectangulo.calcularArea());