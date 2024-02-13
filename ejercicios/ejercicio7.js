while(n1 >0 || n2>0 || isNaN(n1) || isNaN(n2)){
    var n1=parseInt(prompt("ingresa un numero",0));
    var n2=parseInt(prompt("ingresa un segundo numero",0));
    var i=parseInt(prompt("1.suma, 2.restam,3.multiplicacion,4.division.5 salir"));
    switch(i){

        case 1:
            console.log(n1+n2);
        break;
        case 2:
            console.log(n1-n2);
        break;
        case 3: 
            console.log(n1*n2);
        break;
        case 4:
            console.log(n1/n2);
        break; 
        case 5:
            i=-1;
        break; 
    }
}