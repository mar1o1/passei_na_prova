
function verificar(){
  const nota1 =parseFloat(document.getElementById("nota1").value)
  const nota2 =parseFloat(document.getElementById("nota2").value)
  const media = (nota1+nota2)/2
  const resultado = document.getElementById("resultado")

   if(media>=7){
    resultado.innerText="Parabéns você está aprovado(a)"
    resultado.style.color='green'
   }else{
   resultado.innerText="Você foi reprovado(a) e precisa estudar mais"
   resultado.style.color="red"
   
} 

document.getElementById("calcular").addEventListener("click", verificar)
}

