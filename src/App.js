import React from 'react';
import './App.css';

import Renderer from './components/Renderer';

import APIUrlGenerator from './controllers/APIUrlGenerator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preMount: true,
      categories: {},
      triviaCriteria: {},
    }
    this.mounter = this.mounter.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onTriviaButtonClick = this.onTriviaButtonClick.bind(this);
  }

  mounter() {
    this.setState({ preMount: false });
  }

  componentDidMount() {
    fetch('https://opentdb.com/api_category.php')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      this.setState({ categories: data });
      setTimeout(this.mounter, 2000 );
    })
    .catch((err) => {
      alert(err);
    });
  }

  onInputChange(e) {
    const { triviaCriteria } = this.state;
    e.preventDefault();
    triviaCriteria[e.target.id] = e.target.value;
    if (!e.target.value) {
      delete triviaCriteria[e.target.id];
    }
    this.setState(triviaCriteria);
  }

  onTriviaButtonClick(e) {
    const { categories, triviaCriteria } = this.state;
    e.preventDefault();
    const url = APIUrlGenerator(categories, triviaCriteria);
  }


  render() {
    const { preMount, categories} = this.state;
    return (
      <div className="container">
        <div className="title-box">
          <p className="tite">Trivster</p>
        </div>
        <div className="body-box">
          <Renderer
            preMount={preMount}
            categories={categories}
            onInputChange={this.onInputChange}
            onTriviaButtonClick={this.onTriviaButtonClick}/>
        </div>
      </div>
    );
  }
}

export default App;
