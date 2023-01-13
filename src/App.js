import React from 'react';
import './App.css';
import AutoComplete from './AutoComplete';

function App() {
  return (
    <div className='form'>
      <h1>React AutoComplete Demo</h1>
      <h2>Start typing and experience the autocomplete wizardly !</h2>
      <AutoComplete suggestions={["kellen","moses","mukisa","kelmo","able","hillary"]} />
    </div>
  );
}

export default App;
