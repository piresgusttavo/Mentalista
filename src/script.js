function adivinhacao(){
  
var numeroSecreto = parseInt(Math.random() * 1001);
var tentativas = 0;
var limiteTentativas = 10;  
  
while(chute != numeroSecreto && tentativas < limiteTentativas){
  var chute = prompt('Tentativa ' + (tentativas + 1) + ' de ' + limiteTentativas + '\nDigite um número entre 1 e 1000');
  
  if (chute === null) {
      alert('Jogo cancelado pelo usuário.');
      return; // Sai da função
    }
      
    if(chute == numeroSecreto){
      alert("Acertou! O Número Secreto era " +numeroSecreto);
    }
    else if(chute > numeroSecreto){
      alert("Você chutou: "+chute+ ". Errou... O Número Secreto é Menor ");
    }
    else if(chute < numeroSecreto){
      alert("Você chutou: "+chute+ ". Errou... O Número Secreto é Maior ");
    }
  
    tentativas++;
  }
  
        if (chute != numeroSecreto) {
  alert('Suas 10 tentativas acabaram. O número secreto era ' + numeroSecreto);
}
}