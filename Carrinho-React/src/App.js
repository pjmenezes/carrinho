import React from  'react';


import ProdutosItens from './data'

import ProdutoComponet from './Componets/Produto'
import ListarProdutoComponet from './Componets/listaProduto'
import CarrinhoComponet from './Componets/Carrinho'



//adcionar itens **alterando estado
export default function AppComponete(){
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