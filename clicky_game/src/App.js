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
    highscore: 0,
    clickedCards: []
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
        this.setState({
          score: this.state.score + 1,
          highscore: Math.max(this.state.score +1 , this.state.highscore)
        })
        const clickedCardsCopy = this.state.clickedCards;
        clickedCardsCopy.push(character.id);
        this.setState({clickedCards: clickedCardsCopy});
        this.gameWin();
      }
      else if(character.id===id && character.clicked === true)
      {
        this.gameOver();
        this.gameReset();
      }
    })
  })
  this.shuffleArcher();
}

gameReset = () => {
  //alert("let's reset the game");
  this.setState({
    score: 0,
    clickedCards: [],
    characters: characters.map(character => {
      character.clicked = false;
    })
  });
}

gameOver = () => {
  alert("you lost");
  this.gameReset();
  //also need to shake wrapper
}

gameWin = () => {
  if(this.state.clickedCards.length === this.state.characters.length)
  {
    alert("Congratulations, you win!");
    this.gameReset();
  }
}

shuffleArcher = (id) => {
  this.setState({characters: this.shuffleImages(this.state.characters)});
  console.log("shuffleArcher is happening now");
}

shuffleImages = (arr) => 
{
    return arr.sort((a,b)=>Math.floor(Math.random()*1000)>500?1:-1);
}

render() {
  console.log(this.state.clickedCards);
  return (
    <Wrapper>
      <Title score={this.state.score} highscore={this.state.highscore}>Click Archer!!!</Title>
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
