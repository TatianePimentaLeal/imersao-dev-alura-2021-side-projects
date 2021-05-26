function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector('#filme')
  var filmeFavorito = campoFilmeFavorito.value
  if (filmeFavorito.endsWith('.jpg')){
    listarFilmesNaTela(filmeFavorito)
  } else {
    alert("Imagem inválida")
  }
  campoFilmeFavorito.value = ""
}

function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<img src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}

// Recap do código acima: criamos uma função "adicionarFilme" com os parenteses vazios para inclusão de dados
//Nessa função, incluimos as variáveis campoFilmeFavorito com o document.querySelector que é um comando que faz seleção de um item que identificarmos dentro de uma fila, no caso o id filme ou #filme pois # é o símbolo para id no CSS e JS
//Criamos também uma variável filmeFavorito colocando o .value para indicar valor e colocamos a função if (SE) para dizer ao código o seguinte: se a variável filmeFavorito terminar (.endsWith) .jpg a funcão seguinte listarFilmesNaTela será e deverá aparecer filmeFavorito, pois será VERDADEIRA. Do contrário ela será FALSA e deverá trazer o alerda de Imagem inválida -> no final eu ainda indico que o valor de campoFilmeFavorito será vazio, colocando as aspas duplas sem conteúdo.

// A segunda função listarFilmesNaTela funciona com a primeira como mencionado acima, ela atribui (filme) entre parenteses ao contrário da função de cima, a primeira. 
//Ela diz que na variável listaFilmes teremos novamente o document.querySelector mas agora para a id listaFilmes e a variável de elementoFilme que é a imagem + filme (parenteses, lembra?) e fecho a imagem.
//Por fim temos a variável listaFilmes com o .innerHTML que significa que ela está sendo tirada diretamente do HTML e sendo agregada com o + a variável elementoFilme, ou seja, a imagem e de forma serializada: direto do site developerMozilla:
//var content = element.innerHTML - No retorno, content contém o código HTML serializado descrevendo todos os descendentes dos elementos.