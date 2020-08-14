function botao(num){
  valor = document.calc.valuep.value += num ;
}

function converter(){
  let valuep = document.getElementById("valuep").value;
  let result = document.getElementById("result") ;

  if (valuep >= 0.05) {
  result.innerHTML = "O resultado da sua análise " + valuep +  " não foi significativo";
} else {
  result.innerHTML = "O resultado da sua análise " + valuep +  " foi significativo"
}
result.style.display = "block"
}


function resetar(){
  document.getElementById('valuep').value='';
document.getElementById('result').value='';
    result.style.display = "none"
}