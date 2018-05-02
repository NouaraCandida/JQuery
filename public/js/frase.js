$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria(){
   // $.get("http://localhost:3000/frases", trocaFraseAleatoria );
   $.get("http://localhost:3000/frases", function(data){
       var frase = $(".frase");


   });

   function trocaFraseAleatorio(data){
       var frase = $(".frase");
       var numeroAleatorio
   }

}
