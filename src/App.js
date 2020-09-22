import React from 'react';
import './App.css';

import Renderer from './components/Renderer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preMount: true,
      categories: {},
    }
    this.mounter = this.mounter.bind(this);
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


  render() {
    const { preMount, categories} = this.state;
    return (
      <div className="container">
        <div className="title-box">
          <p className="tite">Trivster</p>
        </div>
        <div className="body-box">
          <Renderer preMount={preMount} categories={categories} />
        </div>
      </div>
    );
  }
}

export default App;
