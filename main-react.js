const ProdutosItens = [
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
function ProdutoComponet(props){
  return(
     React.createElement('div', {className: 'col-sm-4 mb-3'},
      React.createElement('div', {className: 'card loja__item'},
      React.createElement('img', {className:'card-img-top', src: props.item.image }),
      React.createElement('div', {className: 'card-body'},
      React.createElement('h5', {className: 'card-title'}, props.item.nome),
      React.createElement('small', null, `R$ ${props.item.preco}` ),
      React.createElement('p', {className: 'card-text'}, props.item.descricao),
      React.createElement('button', {className: 'btn btn-primary', onClick:
      props.onAddCarinho.bind(null, props.item) },   
      'Adcionar' )))
      )
  )
}
function ListarProdutoComponet(props){
  
  return (
    React.createElement('div', {className: 'row-loja'},
    props.children) 
  )
}



function ValorTotal(carrinhoitens){
  return Object.keys(carrinhoitens).reduce(function(acc, produtoId){
    return acc + (carrinhoitens[produtoId].preco *carrinhoitens[produtoId].quantidade)
  },0)
}

function CarrinhoComponet(props){
  return(
    React.createElement('div', {className: 'carrinho'},
    React.createElement('div', {className: 'carrinho__itens'},

    Object.keys(props.itens).map(function(produtoId, index){ 
      return(
      React.createElement('div', {className: 'card carrinho__item', 
      key: `item-carrinho-${index}`},
      React.createElement('div', {className: 'card-body'},
      React.createElement('h5', {className:'card-title'}, props.itens[produtoId].nome),
      React.createElement('p', {className:'card-text'}, 

      `Preço unidade R$ 
      ${props.itens[produtoId]
        .preco}| 
      Quantidade: ${props.itens[produtoId]
        .quantidade} `),

      React.createElement( 'p', {className: 'card-text'}, `Valor: R$${props.itens[produtoId].preco * props.itens[produtoId].quantidade}`),

      React.createElement('button', 
      {className: 'btn btn-danger btn-sm'}, 
      'Remover' )
       )))
    })
    ),
    React.createElement('div', {className: 'carrinho__total mt-2 p-3'},
    React.createElement('h6',  null, 
      'TOTAL: ',
      React.createElement('strong', null, `R$${ValorTotal(props.itens)}`)) 
    )
    )
  )
}

  function AppComponete(){
    const [carrinhoitens, AddCarrinhoItens] = React.useState({
      
    });

    function AddCarrinho(produto){
      console.log(produto)
      if(!carrinhoitens[produto.id]){
        AddCarrinhoItens({
          ...carrinhoitens,
          [produto.id]: {
            ...produto,
            quantidade:1
          }
        })
      } else{
        AddCarrinhoItens({
          ...carrinhoitens,
          [produto.id]: {
            ...produto,
            quantidade: ++carrinhoitens[produto.id].quantidade
          }
        })
      }
    }
  return(
    React.createElement(React.Fragment, null,
      React.createElement('div', {className: 'col-sm-8'}, 
      React.createElement(ListarProdutoComponet, null,
        ProdutosItens.map(function(produto, index){
          return React.createElement(ProdutoComponet, {item: produto,
             onAddCarinho: AddCarrinho, key: `produto-${index}`} )
        })
        )
      ),
      

      React.createElement('div', {className: 'col-sm-4'},
        React.createElement(CarrinhoComponet, {itens: carrinhoitens})
      )  
  ))
}

ReactDOM.render(
  React.createElement(AppComponete),
  document.getElementById('app')
)
