let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 0,
  valor:0,
};

function   atualizarSubtoltal(){


quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText =  parseFloat(subtotalInfo.valor) * parseInt(subtotalInfo.quantidade);

 
}


//variaveis

let btnAdicionar = document.querySelector('#btn-adicionar-produto-01')
let btnRemover = document.querySelector('#btn-subtrair-produto-01')
let qtdprodutos = document.querySelector('#quantidade-produto-01')



//funções



function addItem(){
qtdprodutos.value = parseInt(qtdprodutos.value)+1
subtotalInfo.quantidade = subtotalInfo.quantidade +1
subtotalInfo.valor = (parseFloat(subtotalInfo.valor)+ 11.66).toFixed(2)
atualizarSubtoltal()


}

function remover(){
  if(parseInt(qtdprodutos.value)>0){ 
    qtdprodutos.value = parseInt(qtdprodutos.value)-1
  }if(subtotalInfo.quantidade >0){
      subtotalInfo.quantidade =subtotalInfo.quantidade -1
  subtotalInfo.valor = (parseFloat(subtotalInfo.valor)- 11.66).toFixed(2)
   
  }
  atualizarSubtoltal()

}
btnRemover.addEventListener('click', remover)
btnAdicionar.addEventListener("click", addItem)