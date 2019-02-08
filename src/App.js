import React, { Component } from 'react';
import Header from "./components/Header/header";
import Board from "./components/Board/board";
import images from "./image";
import './App.css';

class App extends Component {
  state = {
    "message": "Welcome to Clicky Game. Click on a picture to get started",
    "currentScore": 0,
    "highScore": 0,
    "images": images,
    "imagesClickedOn": []
  }

  clickedOnFunction = (target) => {
    console.log(target)
    let clicked = this.state.imagesClickedOn.slice(0);
    let cScore = this.state.currentScore
    let hScore = this.state.highScore
    if (!clicked.includes(target)) {
      console.log("not in here")
      clicked.push(target)
      this.setState({
        "message": "Good Guess keep going!",
        "currentScore": this.state.currentScore + 1,
        "imagesClickedOn": clicked
      })
      if (cScore > hScore || cScore === hScore) {
        this.setState({
          "highScore": cScore + 1
        })
      }
    } else {
      console.log("in here")
      this.setState({
        "message": "Game Over. You clicked on that image already. Click on an image to start over",
        "currentScore": 0,
        "imagesClickedOn": []
      })
    }
    let images = this.state.images.slice(0);
    images.sort(() => Math.random() - 0.5);
    this.setState({ images });
  }
  render() {
    return (
      <div className="container">
        <Header
          message={this.state.message}
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />
        <Board
          images={this.state.images}
          clickHandler={this.clickedOnFunction}
        />

      </div>
    );
  }
}

export default App;
