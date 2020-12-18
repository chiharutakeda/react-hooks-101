import React, { useState } from 'react';

const App = props => {

  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);

  return (
    <>
    <button onClick={()=>setPrice(price+1)}>+1</button>
    <button onClick={()=>setPrice(price-1)}>-1</button>
    <button onClick={()=>setPrice(props.price)}>clear</button>
    <br/>
    <input value={name} onChange={(e)=>setName(e.target.value)}></input>
    <button onClick={()=>setName(props.name)}>clear</button>
    <p>現在の{name}は{price}です</p>
    </>
  );
}

//propsの初期値
App.defaultProps = {
  name:'sample',
  price:1000
}

export default App;
