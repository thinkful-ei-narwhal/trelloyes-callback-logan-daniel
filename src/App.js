import React from 'react';
import './App.css';
import List from './List.js';
import STORE from './store';

function App(props) {

  const newList = STORE.lists.map(function(ob) {

    const cards = ob.cardIds.map(el => STORE.allCards[el])

    return <List key={ob.id} header={ob.header} cards={cards}/>;
  });
  
  

  return (
    <main className="App">
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">
    {newList}
    </div>
  </main>
  );
}

export default App;
