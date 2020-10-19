import React from 'react';

import Home from './Home';
import Game from './Game';
import mrSquishy from '../images/mr-squishy.png'

const Renderer = ({ preMount, categories, onInputChange, onTriviaButtonClick, gameState, questions }) => {
  if (preMount) {
    return <img src={mrSquishy} className="squishy" alt="squishy" />
  } else if (!preMount && !gameState) {
    return (
      <Home categories={categories} onInputChange={onInputChange} onTriviaButtonClick={onTriviaButtonClick} />
    );
  } else if (!preMount && gameState) {
    return (
      <Game questions={questions} />
    );
  }
}

export default Renderer;