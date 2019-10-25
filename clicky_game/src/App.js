import React, { Component } from 'react';
import characters from '../src/characters.json';
import './App.css';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Card from "./components/Card";

class App extends Component {
  state = {
    characters: characters,
    score: 0,
    highscore: 0
  }

gameOver = () => {

}

render() {
  return (
    <Wrapper>
      <Title score={this.state.score} highscore={this.state.highscore}>Memory Game with React</Title>
      {this.state.characters.map(
        character => (
          <Card 
          id={character.id}
          image={character.image} />
        )
      )}      
    </Wrapper>
  );
}
}

export default App;
