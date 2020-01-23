 /* <div  class="col-sm-4 mb-3">
 <div class="card">
 <div class="card loja__item">
   <img class="card-img-top" src="https://lorempixel.com/500/300" alt="">
   <div class="card-body">
     <h5 class="card-title">JSRaiz para FW</h5>
     <small>R$300,00</small>
     <p class="card-text">O melhor curso do mundo.</p>
     <button href="#" data-value="300" class="btn 
     btn-primary">Adcionar</button>
   </div>
  </div>
 </div>
</div >
*/
function AppComponente(){
  
  return(
    React.createElement(React.Fragment, null,
      React.createElement('div', {className: 'col-sm-8'},
      React.createElement('div',  {className: 'row loja'},
      React.createElement('div',  {className: 'col-sm-4 mb-3'},
      React.createElement('div',  {className: 'loja__item-3'},
      React.createElement('img',  {className: 'lard-img-top', src:'https://lorempixel.com/500/300'}),
      React.createElement('div',  {className: 'card-body'},
     ))))),

      React.createElement('div', {className: 'col-sm-4'},
      React.createElement('div', {className: 'carrinho'},
      React.createElement('div',  {className: 'loja__item-3'},      
      React.createElement('div', {className: 'carrinho__total mt-2 p-3'})
      )
      ) 
  )))
}
ReactDOM.render(
  React.createElement(AppComponente),
  document.getElementById('app')
);
