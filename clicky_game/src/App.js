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

clickEvent = (id) => {
  //alert("Archer clicked");
  //after click "score" should always be +1
    this.setState({
      score: this.state.score + 1,
      clicked: true
    });
  //set highscore if score is greater to highscore (needs to be fixed)
  if(this.state.score > this.state.highscore)
  {
    this.setState({highscore: this.state.score})
  }
  if(this.state.score === 12)
  {
    alert("Congratulations, you win!");
    this.setState({score: 0})
  }
  // after clicking an image put all images into random order
  
}

/* shuffleImages = (arr) => 
{
    return arr.sort((a,b)=>Math.floor(Math.random()*1000)>500?1:-1);
} */


render() {
  return (
    <Wrapper>
      <Title score={this.state.score} highscore={this.state.highscore}>Memory Game with React</Title>
      {this.state.characters.map(
        character => (
          <Card 
          key={character.id}
          id={character.id}
          image={character.image}
          onClick={this.clickEvent}
          clicked={character.clicked}
          />
        )
      )}      
    </Wrapper>
  );
}
}

export default App;
