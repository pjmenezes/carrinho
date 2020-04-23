const ProdutosItens = [{
  id: 'abc1',
  nome: 'JSRaiz para FW',
  preco: 300,
  descricao: 'Aprenda sobre o melhor curso',
  image: 'https://lorempixel.com/500/300'
}, {
  id: 'axb2',
  nome: 'Docker',
  preco: 200,
  descricao: 'Aprenda tudo sobre docker',
  image: 'https://lorempixel.com/500/300'
}, {
  id: 'axx3',
  nome: 'Kotlin',
  preco: 500,
  descricao: 'Aprenda a desenvolver apps',
  image: 'https://lorempixel.com/500/300'
}];

function ProdutoComponet(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "col-sm-4 mb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card loja__item"
  }, /*#__PURE__*/React.createElement("img", {
    className: "card-card-img-top",
    src: props.item.image
  }), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "card-title"
  }, props.item.nome), /*#__PURE__*/React.createElement("small", null, "R$", props.item.preco), /*#__PURE__*/React.createElement("p", {
    className: "card-text"
  }, props.item.descricao), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: props.onAddCarinho.bind(null, props.item)
  }, "Adcionar"))));
}

function ListarProdutoComponet(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "row loja"
  }, props.children);
}

function ValorTotal(carrinhoitens) {
  return Object.keys(carrinhoitens).reduce(function (acc, produtoId) {
    return acc + carrinhoitens[produtoId].preco * carrinhoitens[produtoId].quantidade;
  }, 0);
}

function CarrinhoComponet(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "carrinho"
  }, /*#__PURE__*/React.createElement("div", {
    className: "carrinho__itens"
  }, Object.keys(props.itens).map(function (produtoId, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: "card carrinho__item",
      key: `item-carrinho-${index}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/React.createElement("h5", {
      className: "card-title"
    }, props.itens[produtoId].nome), /*#__PURE__*/React.createElement("p", {
      className: "card-text"
    }, "Pre\xE7o unidade: R$", props.itens[produtoId].preco, "|  Quantidade: ", props.itens[produtoId].quantidade), /*#__PURE__*/React.createElement("p", {
      className: "card-text"
    }, "Valor: R$", props.itens[produtoId].preco * props.itens[produtoId].quantidade), /*#__PURE__*/React.createElement("button", {
      onClick: props.onRemoveCarrinho.bind(null, produtoId),
      className: "btn btn-danger btn-sm"
    }, "Remover")));
  })), /*#__PURE__*/React.createElement("div", {
    className: "carrinho__total mt-2 p-3"
  }, /*#__PURE__*/React.createElement("h6", null, "TOTAL:", /*#__PURE__*/React.createElement("strong", null, "R$", ValorTotal(props.itens)))));
} //adcionar itens **alterando estado


function AppComponete() {
  const [carrinhoitens, AddCarrinhoItens] = React.useState({});

  function AddCarrinho(produto) {
    console.log(produto);

    if (!carrinhoitens[produto.id]) {
      AddCarrinhoItens({ ...carrinhoitens,
        [produto.id]: { ...produto,
          quantidade: 1
        }
      });
    } else {
      AddCarrinhoItens({ ...carrinhoitens,
        [produto.id]: { ...produto,
          quantidade: ++carrinhoitens[produto.id].quantidade
        }
      });
    }
  }

  function removeCarrinho(produtoId) {
    if (carrinhoitens[produtoId].quantidade <= 1) {
      delete carrinhoitens[produtoId], AddCarrinhoItens({ ...carrinhoitens
      });
    } else {
      AddCarrinhoItens({ ...carrinhoitens,
        [produtoId]: { ...carrinhoitens[produtoId],
          quantidade: --carrinhoitens[produtoId].quantidade
        }
      });
    }
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "col-sm-8"
  }, /*#__PURE__*/React.createElement(ListarProdutoComponet, null, ProdutosItens.map((produto, index) => /*#__PURE__*/React.createElement(ProdutoComponet, {
    item: produto,
    onAddCarinho: AddCarrinho,
    key: `produto-${index}`
  })))), /*#__PURE__*/React.createElement("div", {
    className: "col-sm-4"
  }, /*#__PURE__*/React.createElement(CarrinhoComponet, {
    itens: carrinhoitens,
    onRemoveCarrinho: removeCarrinho
  })));
}

ReactDOM.render(React.createElement(AppComponete), document.getElementById('app'));
