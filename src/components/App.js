import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventForm from './EventForm'
import Events from './Events'
import PracticeState from './PracticeState'
import OperationLogs from './OperationLogs'
import AppContext from "../contexts/AppContext";
import PracticeState2 from "./PracticeState2"
import reducer from '../reducers'

const App = () => {
  const inisialState = {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, inisialState)
  return (
    <>
      <PracticeState2 />
      <PracticeState />
      <AppContext.Provider value={{ state, dispatch }}>
        <div className='container-fluid'>
          <EventForm />
          <Events />
          <OperationLogs />
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
