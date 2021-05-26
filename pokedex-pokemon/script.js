var primeiroPoke = prompt("Digite seu palpite! ")
var resultado = "Pikachu"

if (resultado == primeiroPoke) {
  var resultado = primeiroPoke
  document.write("<h2>Você acertou!</h2>")
} else if (resultado != primeiroPoke) {
  document.write("<h2>Que pena! Tente novamente</h2>")
}