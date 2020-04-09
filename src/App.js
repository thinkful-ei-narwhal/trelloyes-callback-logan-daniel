import React from 'react';
import './App.css';
import List from './List';

export default class App extends React.Component {

  state = {
    lists: [
      {
        id: '1',
        header: 'First list',
        cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
      },
      {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
      },
      {
        id: '3',
        header: 'Third list',
        cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
      },
      {
        id: '4',
        header: 'Fourth list',
        cardIds: [ 'l', 'm' ],
      },
    ],
    allCards: {
      'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
      'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
      'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
      'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
      'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
      'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
      'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
      'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
      'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
      'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
      'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
      'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
      'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
    },
  };

  omit = (obj, keyToOmit) => {
    let {[keyToOmit]: _, ...rest} = obj;
    return rest;
  }

  handleDeleteCard = (cid) => {

    const listArray = this.state.lists.map(list => {

      list.cardIds = list.cardIds.filter(id => id !== cid)

      return list;
    })

    const newAllCards = this.omit(this.state.allCards, cid)

    this.setState({
      lists: listArray,
      allCards: newAllCards
    })
  }

  newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }

  // id is based on list id

  handleAddRandomCard = (lid) => {
    
    console.log(lid);

    const newCard = this.newRandomCard();

    
    const cardId = newCard.id;
    
    
    this.setState( {
      allCards: {
        ...this.state.allCards,
        [cardId]: newCard
      },
      lists: this.state.lists.map(list => {
        
        list.id === lid && list.cardIds.push(cardId)
      
        return list;
      })
    })
  }
  
  

  render() {
    const { lists } = this.state;
    const { allCards } = this.state;

    console.log(lists);
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
        { lists.map((ob) => {

          const cards = ob.cardIds.map(el => allCards[el])

          return <List 
            key = {ob.id}
            id = {ob.id}
            header = {ob.header}
            cards = {cards}
            onDeleteCard = {this.handleDeleteCard}
            onAddRandomCard = {this.handleAddRandomCard} />
        })}
        </div>
      </main>
    );
  }
}
