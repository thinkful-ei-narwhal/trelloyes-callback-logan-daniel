import React from 'react';
import Card from './Card.js';


function List(header, cards) {
const newCard = cards.map(card => <Card title={card.title} content={card.content}/>);
  return (
    <section class="List">
        <header class="List-header">
          <h2>{header}</h2>
        </header>
        <div class="List-cards">
        {newCard}
        </div>
      </section>
  );
}

export default List;