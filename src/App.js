import React from 'react';
import './App.css';
import AutoComplete from './AutoComplete';

function App() {
  return (
    <div className='form'>
      <h1>React AutoComplete Demo</h1>
      <h2>Start typing and experience the autocomplete wizardly !</h2>
      <AutoComplete suggestions={["Derrick","Moses","Mukisa","Kelmo","Able","Hillary","Apple","Kampala","Jinja","Computer","Frontend","Mira","Docker","Cloud"]} />
    </div>
  );
}

export default App;
