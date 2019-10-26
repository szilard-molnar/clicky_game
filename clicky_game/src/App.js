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

    this.clickedArcher(id);
}

clickedArcher = (id) => {
  this.setState({
    characters: characters.map(character => {
      if(character.id === id && character.clicked === false)
      {
        //alert("this one exist " + id);
        character.clicked = true;
      }
      else if(character.id===id && character.clicked === true)
      {
        this.gameOver();
      }
    })
  })
  this.shuffleArcher();
}

gameReset = () => {
  //alert("let's reset the game");
  this.setState({score: 0});
}

gameOver = () => {
  alert("you lost");
  this.gameReset();
  //also need to shake wrapper
}

shuffleArcher = (id) => {
  this.setState({characters: this.shuffleImages(this.state.characters)});
  console.log("shuffleArcher is happening now");
}

shuffleImages = (arr) => 
{
    return arr.sort((a,b)=>Math.floor(Math.random()*1000)>500?1:-1);
}

updateScore = () => {

}


render() {
  return (
    <Wrapper>
      <Title score={this.state.score} highscore={this.state.highscore}>Memory Game with React</Title>
      {characters.map(
        character => (
          <Card 
          id={character.id}
          key={character.id}
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
