import React from 'react';

import Home from './Home';
import mrSquishy from '../images/mr-squishy.png'

const Renderer = ({ preMount, categories }) => {
  if (preMount === true) {
    return <img src={mrSquishy} className="squishy" alt="squishy" />
  }
  return (
    <Home categories={categories} />
  );
}

export default Renderer;