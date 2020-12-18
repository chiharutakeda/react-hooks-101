import React, { useState } from 'react';

const App = (props) => {

  const [state, setState] = useState(props);
  const {name,price}=state;

  return (
    <>
      <p>現在の{name}は{price}です</p>
      <button onClick={() => setState({...state,price:price + 1})}>+1</button>
      <button onClick={() => setState({...state,price:price - 1})}>-1</button>
      <br />
      <input value={state.name} onChange={(e) => setState({...state,name:e.target.value})}></input>
      <button onClick={() => setState(props)}>clear</button>
    </>
  );
}

//propsの初期値
App.defaultProps = {
  name: 'sample',
  price: 1000
}

export default App;