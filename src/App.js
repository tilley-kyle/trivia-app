import React from 'react';
import './App.css';

import Home from './components/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    fetch('https://opentdb.com/api_category.php')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
  }

  render() {
    return (
      <div className="container">
        <div className="title-box">
          <p>Trivster</p>
        </div>
        <Home />
      </div>
    );
  }
}

export default App;
