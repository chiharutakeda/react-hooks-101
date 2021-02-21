import React ,{useState}from 'react'

const PracticeState = () => {
  const [name,setName] = useState("");
  const setStateName = (e) => {
      setName(e.target.value);
  };

  const [number, setNumber] = useState("");
  const setStateNumber = (e) => {
    setNumber(e.target.value);
  };

  
  return (
    <div>
      名前<input type="text" value={name} onChange={setStateName}/>
      番号<input type="number" value={number} onChange={setStateNumber}/>
    </div>
  )
}

export default PracticeState
