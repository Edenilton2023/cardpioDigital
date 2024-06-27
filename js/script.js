



















const botaoLi = document.querySelectorAll('.topo li');
const secaoId = document.querySelectorAll('section');

botaoLi.forEach((botao) => {
  botao.addEventListener('click', (event) => {
    secaoId.forEach((item) => {
      item.classList.remove('aparecer'); // Esconde todas as seções

      const botaoAtua = event.target;
      if (botaoAtua.id === item.id) {
        item.classList.add('aparecer'); // Mostra a seção correspondente
      }
    });
  });
});


 const trocarFoto =(itemA ,itemB)=>{
  if (itemA.classList.contains('ativa')){
    itemA.classList.add('esconde')&& itemB.classList.remove("esconde")

  }
 }

const $pratoDetalhes = document.querySelector('.prato-detalhes');
 const $combo = document.querySelector('.combos')
 const $fotoGrande = document.querySelector('.flex-container');

$pratoDetalhes.addEventListener('click',()=>{
 $pratoDetalhes.classList.add('esconde'),$fotoGrande.classList.remove('esconde')
}
)
$fotoGrande.addEventListener('click', () => {
$fotoGrande.classList.add('esconde'),
    $pratoDetalhes.classList.remove('esconde');
});
//  a iadeia e fazer esta funçao trocar baseada no id de cad alelemeto 


 