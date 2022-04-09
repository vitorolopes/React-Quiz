import React from 'react';
import {useGlobalContext} from './context';
import SetupForm from './SetupForm';
import Loading from './Loading';

function App() {

  const {waiting, isLoading} = useGlobalContext();

  if(waiting){
    return(
      <SetupForm/>
    )
  }

  if(isLoading){
    return(
      <Loading/>
    )
  }

  return (
    <div className="App">
      quiz
    </div>
  );
}

export default App;
