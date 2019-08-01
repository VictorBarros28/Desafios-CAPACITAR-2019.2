var sequencia = [];


function retornaprimos(sequencia) {
    var Quantidade = window.prompt("digite a quantidade de numeros que serão inseridos"); 
    var primo = 0;
    for (i = 0; i < Quantidade; i++) { 

        var numero = prompt("digite um numero");
        sequencia.push(numero);
        var divisv=0; 

        for(j=1;j<=numero;j++){
        if(numero % j == 0){
            divisv++;
        }
        }
        if(divisv == 2){  
            primo++;
        }

    }
    return primo;
}