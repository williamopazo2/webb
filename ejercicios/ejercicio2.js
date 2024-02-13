var suma=0;

var contador=0;

do{
    var numero = parseInt(prompt("introduce numeros"));

    if(numero >=0){
        suma=suma+numero;
        contador++;
    }
    console.log(suma);
    console.log(contador);
}while(numero>=0)
alert(suma);
alert(suma/contador);