import React from 'react';

import Home from './Home';
import mrSquishy from '../images/mr-squishy.png'

const Renderer = ({ preMount, categories, onInputChange }) => {
  if (preMount === true) {
    return <img src={mrSquishy} className="squishy" alt="squishy" />
  }
  return (
    <Home categories={categories} onInputChange={onInputChange} />
  );
}

export default Renderer;