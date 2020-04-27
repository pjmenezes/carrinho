import React from 'react';
 
 function ValorTotal(carrinhoitens) {
  return Object.keys(carrinhoitens).reduce(function (acc, produtoId) {
    return acc + (carrinhoitens[produtoId].preco * carrinhoitens[produtoId].quantidade)
  }, 0)
}

export default function CarrinhoComponet(props) {
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

