import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Flashcards from './components/Flashcards';
import './App.css';
import { Container } from 'semantic-ui-react';

class App extends Component {
  
  
  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <Flashcards/>
        </Container>
      </div>
    );
  }
}

export default App;
