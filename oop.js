class Animal
{
    constructor(categoria){
        this.categoria = categoria;
    }

}

class CuentaBancaria
{

    constructor(saldo, tipo){
        this.saldo = saldo;
        this.tipo = tipo
    }

     deposito(cantidad){
        this.saldo += cantidad;
    }

    retiro(cantidad){
        this.saldo -= cantidad;
    }
}

class TarjetaDeCredito extends CuentaBancaria{

    constructor(s=0,t="M",fc="xx/xx/xx", pm=0)
    {
        super(s,t);
        this.fechaDeCorte = fc;
        this.pagoMinimo = pm;
    }

    imprimirFechaDeCorte()
    {
        console.log("La fecha de corte es: ");
    }

    imprimirRecibo()
    {
        console.log("El pago minimo es: ");
    }
}






let perro = new Animal('perro');
let gato = new Animal('gato');
let conejo = new Animal('conejo');

console.log(perro.categoria);
console.log(gato.categoria);
console.log(conejo.categoria);

    let cuenta1 =  new CuentaBancaria(5000, "E");
     cuenta1.deposito(2000, "M");
     cuenta1.deposito(4000);
     cuenta1.retiro(1000);
    console.log(cuenta1.saldo);
    console.log(cuenta1.tipo);

    let cuenta2 =  new CuentaBancaria(500000,"E");
    cuenta2.retiro = (300000);
    console.log(cuenta2.saldo);
    console.log(cuenta2.tipo);

    let cuenta3 =  new CuentaBancaria();


    let cuenta4 = new TarjetaDeCredito(500, 'TC', '01/01/90');
    console.log(cuenta2.saldo);
    console.log(cuenta4.tipo);
    cuenta4.imprimirFechaDeCorte();
    cuenta4.imprimirRecibo();
    console.log(true);
