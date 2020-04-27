import React from 'react';

export default function ProdutoComponet(props) {
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