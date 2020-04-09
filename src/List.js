import React from 'react';
import Card from './Card';
import './List.css';


export default function List(props) {
  return (
    <section className="List">
        <header className="List-header">
          <h2>{props.header}</h2>
          <button 
          onClick={() => props.onAddRandomCard(props.id)}
          type="button">Add Random Card</button>
        </header>
        <div className="List-cards">
        {props.cards.map(card => <Card
          key={card.id}
          id={card.id}
          title={card.title}
          content={card.content}
          onDeleteCard={props.onDeleteCard}
          />)}
        </div>
      </section>
  );
}