const produtos = [
  {
    id: 'abc1',
    nome: 'JSRaiz para FW',
    preco: 300,
    descricao: 'Aprenda sobre o melhor curso',
    image: 'https://lorempixel.com/500/300',
    
  },
  {
    id: 'axb2',
    nome: 'Docker',
    preco: 200,
    descricao: 'Aprenda tudo sobre docker',
    image: 'https://lorempixel.com/500/300',
    
  },
  {
    id: 'axx3',
    nome: 'Kotlin',
    preco: 500,
    descricao: 'Aprenda a desenvolver apps',
    image: 'https://lorempixel.com/500/300'
  },
]

const carrinhoItens = {};

function rederinzar(produto, index) {
  return ` 
  <div  class="col-sm-4 mb-3">
  <div class="card">
  <div class="card loja__item">
    <img class="card-img-top" src="${produto.image}" alt="">
    <div class="card-body">
      <h5 class="card-title"> ${produto.nome} </h5>
      <small> ${produto.preco} </small>
      <p class="card-text"> ${produto.descricao} </p>
      <button data-index = "${index}" class="btn  btn-primary btn-add">Adcionar</button>
    </div>
   </div>
  </div>
</div >
`
}

function rederinzaProduto() {
  let html = ''
  for (let i = 0; i<produtos.length; i++){
    html = html + rederinzar(produtos[i], i);
  }
  return html;
}

function rederinzaItemCarrinho(produtoCarrinho) {
  return ` 
  <div class="card carrinho__item">
  <div class="card-body">
    <h5 class="card-title"> ${produtoCarrinho.nome} </h5>
    <p class="card-text"> Preço unidade R$ ${produtoCarrinho.preco} | 
      Quantidade: ${produtoCarrinho.quantidade} </p>
    <p class="card-text">${produtoCarrinho.preco * produtoCarrinho.quantidade}</p>
    <button data-produto-id = "${produtoCarrinho.id}" class= "btn btn-danger btn-sm btn-remove">Remover</button>
  </div>
</div>
  `
}

function rederinzaCarrinho (){
  let html = '';
  for(let produtoId in carrinhoItens){
    html = html + rederinzaItemCarrinho(carrinhoItens[produtoId]);
  } 
  document.querySelector('.carrinho__itens').innerHTML = html;
}

function renderCarrinhoTotal(){
  let total = 0;
  for(let produtoId in carrinhoItens){
    total = total + (carrinhoItens[produtoId].preco * carrinhoItens[produtoId].quantidade);
  } 
  document.querySelector('.carrinho__total')
  .innerHTML = `<h6>TOTAL: <strong>R$ ${total}</strong> </h6>` 
  
}

function adcionaItemNoCarinho(produto){
  if (!carrinhoItens[produto.id]) {
    carrinhoItens[produto.id] = produto;
    carrinhoItens[produto.id].quantidade = 0;        
  }
  ++ carrinhoItens[produto.id].quantidade;
  rederinzaCarrinho()
  renderCarrinhoTotal()

}

document.body
.addEventListener('click', function(event){
   const elemento = event.target;

   if  (elemento.classList.contains('btn-add')){ 

     const index = parseInt(elemento.getAttribute('data-index'), 10); 
     const produto = produtos[index];

     adcionaItemNoCarinho(produto)
   }  
   if (elemento.classList.contains('btn-remove')) {
     const produtoId = elemento.getAttribute('data-produto-id')
     
     if (carrinhoItens[produtoId].quantidade <= 1) {
       delete carrinhoItens[produtoId]     
   } else{
     --carrinhoItens[produtoId].quantidade;
   }
   rederinzaCarrinho();
   renderCarrinhoTotal();
  }
});

document.querySelector('.loja').innerHTML = rederinzaProduto();


