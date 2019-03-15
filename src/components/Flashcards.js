import React from 'react';
import Flashcard from './Flashcard';
// import { Card } from 'semantic-ui-react';


class Flashcards extends React.Component {
  state = {
    flashcards: [
      {id: 1, question: "Who are you?", answer: 'Harlan'},
      {id: 2, question: "Who is she?", answer: "Satan"},
      {id: 3, question: "Who is god?", answer: 'Me'},
    ],
    showAnswer: false,
  };

  toggleCard = () => {
    this.setState({showAnswer: !this.state.showAnswer})
  }
  
  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .toSubstring(1);
  };

  deleteCard = (id) => {
    const flashcards = this.state.flashcards.filter(flashcard => {
      if (flashcard.id !== id) 
      return flashcard;
    })
    this.setState({flashcards: [...flashcards], })
  };

  editCard = (cardData) => {
    const flashcards = this.state.flashcards.map(card => {
      if (card.id === cardData.id)
        return cardData;
      return card
    });
    this.setState({ flashcards, });
  }  

  
  render() {
    return(
      <div>
        <Flashcard
        cards={this.state.flashcards}
        remove={this.deleteCard}
        toggleCard={this.toggleCard}
        showAnswer={this.state.showAnswer}
        id={this.state.flashcards.id}
        edit={this.editCard}
        />        
      </div>
    )
  }
};

export default Flashcards;