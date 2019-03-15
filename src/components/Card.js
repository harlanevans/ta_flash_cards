import React from 'react';
import { Card, Button, } from 'semantic-ui-react';

const CardBoy = ({ id, showAnswer, answer, question, toggleCard, edit, remove}) => (
  <div>
    <Card>
    <Card.Content>
            <Card.Header>
              {showAnswer ? "Answer" : "Question"}
            </Card.Header>
            <Card.Description>
             {showAnswer ? answer : question}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui three buttons">
              <Button 
              basic 
              color="blue"
              onClick={() => toggleCard(id)}
              >
                Show
              </Button>
              <Button 
              basic 
              color="green"
              onClick={() => edit()}
              >
                Edit
              </Button>
              <Button 
              basic 
              color="red"
              onClick={() => remove(id)}
              >
                Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
  </div>
)

export default CardBoy;