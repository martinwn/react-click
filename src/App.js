import React, { Component } from "react";
import "./App.css";
import Images from "./components/Images";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Boomer from "./BoomerKuwanger.gif";
import Penguin from "./ChillPenguin.gif";
import Mammoth from "./FlameMammoth.gif";
import Octopus from "./LaunchOctopus.gif";
import Sigma from "./Sigma.gif";
import Mandrill from "./SparkMandrill.gif";
import Chameleon from "./StingChameleon.gif";
import Eagle from "./StormEagle.gif";
import Armadillo from "./ArmoredArmadillo.gif";

class App extends Component {
  state = {
    images: [
      {
        id: 1,
        clicked: false,
        srcImage: Armadillo
      },
      { id: 2, clicked: false, srcImage: Boomer },
      { id: 3, clicked: false, srcImage: Penguin },
      { id: 4, clicked: false, srcImage: Mammoth },
      { id: 5, clicked: false, srcImage: Sigma },
      { id: 6, clicked: false, srcImage: Octopus },
      { id: 7, clicked: false, srcImage: Mandrill },
      { id: 8, clicked: false, srcImage: Chameleon },
      { id: 9, clicked: false, srcImage: Eagle }
    ],
    score: 0,
    highScore: 0,
    hideHeader: false,
    showGame: false
  };

  handleImageClick = image => {
    if (image.clicked) {
      this.handleReset();
    } else {
      const images = [...this.state.images];
      const index = images.indexOf(image);
      image.clicked = true;
      images[index] = { ...image };
      this.setState({ images, score: this.state.score + 1 });
      this.highScoreCheck();
    }
    this.randomizeArray();
  };

  handleReset = () => {
    const images = this.state.images.map(image => {
      image.clicked = false;
      return image;
    });
    this.setState({ images: images, score: 0 });
  };

  handleGameStart = () => {
    this.setState({ hideHeader: true, showGame: true });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar score={this.state.score} highScore={this.state.highScore} />
        <Header
          score={this.state.score}
          hide={this.state.hideHeader}
          onGameStart={this.handleGameStart}
        />
        <Images
          onImageClick={this.handleImageClick}
          images={this.state.images}
          show={this.state.showGame}
          score={this.state.score}
        />
      </React.Fragment>
    );
  }

  randomizeArray() {
    const images = this.state.images.map(image => {
      return image;
    });

    let counter = images.length;

    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = images[counter];
      images[counter] = images[index];
      images[index] = temp;
    }

    this.setState({ images });
  }

  highScoreCheck() {
    this.state.score + 1 > this.state.highScore &&
      this.setState({ highScore: this.state.score + 1 });
  }
}

export default App;
