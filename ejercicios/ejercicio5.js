var n1=parseInt(prompt("introduce un numero",0));

while(isNaN(n1)){
    var n1=parseInt(prompt("introduce un numero",0));
}

if(n1%2 ==0){
    console.log("el numero es par");
}else{
    console.log("el numero es impar")
}