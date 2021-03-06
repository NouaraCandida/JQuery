
//Animações com botões
$("#botao-placar").click(mostrarPlacar);

$("#botao-placar").mouseenter(function()
{
    scrollPlacar()
    $(".placar").stop().slideToggle();
    

});

$("#botao-placar").mouseleave(function()
{
    scrollPlacar()
    $(".placar").stop().slideToggle();
    
});
function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Douglas"
    var numPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.append(linha);
    $(".placar").slideDown(500);
    scrollPlacar();  
}
function scrollPlacar(){
    var posicaoPlacar = $(".placar").offset().top;
    $("body").animate(
    {
        scrollTop:posicaoPlacar +  "px"
    },1000);
}

function novaLinha(usuario, palavras) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botao-remover").attr("href", "#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha() {
    event.preventDefault();
    var linhas = $(this).parent().parent();
    linhas.fadeOut(1000);
    setTimeout(function(){
        linhas.remove();
    }, 1000);
   
}

function mostrarPlacar(){
    $(".placar").stop().slideToggle(800);
}