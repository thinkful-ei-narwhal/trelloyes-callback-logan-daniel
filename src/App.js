import React from 'react';
import './App.css';
import List from './List.js';
import STORE from './store';


function App(STORE) {
  
  const cards = STORE.allCards;

  const newList = STORE.lists.map(ob => <List key={ob.id} header={ob.header} cards={cards}/>)
  
  

  return (
    <main class="App">
    <header class="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div class="App-list">
    {newList}
    </div>
  </main>
  );
}

export default App;
