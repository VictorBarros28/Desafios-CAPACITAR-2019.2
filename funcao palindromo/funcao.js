
 
 function VerificarPalindromo(fraseUsuario) {
     fraseUsuario = fraseUsuario.toUpperCase().replace();
     
     fraseInversa = fraseUsuario.split("").reverse().toString();
    
     for (var i = 0; i < ((fraseInversa.length) - 1); i++) {
        
         fraseInversa = fraseInversa.replace("", ",", ":");
     }
     
     if (fraseUsuario == fraseInversa) {
         return "a frase é um palindromo";
     } else {
         return "a frase não é um palindromo";
     }
 }

