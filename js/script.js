




















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

 
 

const $pratoDetalhes = document.querySelector('.prato-detalhes');
const $fotoPequena = document.querySelectorAll(".fotoPequena")
 const $fotoGrande = document.querySelectorAll('.fotoGrand');

$fotoPequena.forEach((foto)=>{
  foto.addEventListener('click',()=>{
    console.log(foto.id);
$fotoGrande.forEach((fotog)=>{
fotog.classList.add('esconde')
foto.classList.add('mostra');


  if (fotog.id === foto.id){
    foto.classList.add('esconde')
    fotog.classList.remove('esconde')
  }
})


  })
})
$fotoGrande.forEach((foto) => {
  foto.addEventListener('click', () => {
    console.log(foto.id);
    $fotoPequena.forEach((fotog) => {
      if (fotog.id === foto.id) {
        foto.classList.add('esconde');
        fotog.classList.remove('esconde');
      }
    });
  });
});



 
