import React from 'react';
import { Card, Button, Container } from "semantic-ui-react";
import CardBoy from './Card';

const Flashcard = ({ id, cards, edit, remove, toggleCard, showAnswer}) => (  
    <Container>
      <Card.Group style={styles.paddin}>

        {
          cards.map(card => (
            
            <CardBoy
            key={card.id}
            {...card}
            toggleCard={toggleCard}
            showAnswer={showAnswer}
            remove={remove} 
            edit={edit}
            remove={remove}
            id={id}
            />
            
            ))
          }
      </Card.Group>
      </Container>
)


export default Flashcard;

const styles = {
  paddin: {
    padding: "10px",
    display: 'flex',
  }
}