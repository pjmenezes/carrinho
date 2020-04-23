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

function ProdutoComponet(props) {
  return (<div className="col-sm-4 mb-3">
      <div className="card loja__item">
        <img className="card-card-img-top" src={props.item.image} />
        <div className="card-body">
          <h5 className="card-title">{props.item.nome}</h5>
          <small>R${props.item.preco}</small>
          <p className="card-text">{props.item.descricao}</p>
          <button className="btn btn-primary" onClick={props.onAddCarinho.bind(null, props.item)}>Adcionar</button>
        </div>
      </div>
    </div>
  )
}

function ListarProdutoComponet(props) {
  return (<div className="row loja">{props.children}</div>
  )
}

function ValorTotal(carrinhoitens) {
  return Object.keys(carrinhoitens).reduce(function (acc, produtoId) {
    return acc + (carrinhoitens[produtoId].preco * carrinhoitens[produtoId].quantidade)
  }, 0)
}

function CarrinhoComponet(props) {
  return (<div className="carrinho">
      <div className="carrinho__itens">
        {Object.keys(props.itens).map(function (produtoId, index) {
          return(
            <div className="card carrinho__item" key={`item-carrinho-${index}`}>
            <div className="card-body">
              <h5 className="card-title">{props.itens[produtoId].nome}</h5>
              <p className="card-text">Preço unidade: R${props.itens[produtoId].preco}|  Quantidade: {props.itens[produtoId].quantidade}</p>
              <p className="card-text">Valor: R${props.itens[produtoId].preco * props.itens[produtoId].quantidade}</p>
              <button onClick={props.onRemoveCarrinho.bind(null, produtoId)}
                className="btn btn-danger btn-sm">Remover</button>
            </div>
          </div>)
        })}
      </div>
      <div className="carrinho__total mt-2 p-3">
        <h6>TOTAL:<strong>R${ValorTotal(props.itens)}</strong></h6>
      </div>
    </div>
  )
}
//adcionar itens **alterando estado
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

function removeCarrinho(produtoId){
  if (carrinhoitens[produtoId].quantidade<=1){
    delete carrinhoitens[produtoId],
    AddCarrinhoItens({
      ...carrinhoitens
    })
  }
  else{
    AddCarrinhoItens({
      ...carrinhoitens,
      [produtoId]:{
        ...carrinhoitens[produtoId],
        quantidade: --carrinhoitens[produtoId].quantidade
      }
    })
    
  }
}

  return (<React.Fragment>
      <div className="col-sm-8">
        <ListarProdutoComponet>
          {ProdutosItens.map((produto, index) => (
            <ProdutoComponet
              item={produto}
              onAddCarinho={AddCarrinho}
              key={`produto-${index}`}
            />
          ))}
        </ListarProdutoComponet>
      </div>

      <div className="col-sm-4">
        <CarrinhoComponet itens={carrinhoitens} onRemoveCarrinho={removeCarrinho} />
      </div>
    </React.Fragment>
  )
}

ReactDOM.render(
  React.createElement(AppComponete),
  document.getElementById('app')
)