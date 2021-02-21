import React, { useReducer } from 'react'
const initialState = { name: "", number: "" };

function reducer(state, action) {
  switch (action.type) {
    case 'changenamge':
      return { ...state, name: action.payload };
    case 'changenumber':
      return { ...state, number: action.payload };
    default:
      throw new Error();
  }
}

export default function PracticeState2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      名前<input type="text" value={state.name} onChange={(e) => dispatch({ type: 'changenamge', payload: e.target.value })} />
      番号<input type="number" value={state.number} onChange={(e) => dispatch({ type: 'changenumber', payload: e.target.value })} />
    </>
  );
}