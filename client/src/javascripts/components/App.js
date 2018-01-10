import React, { Component } from 'react';
import { Title } from '.';

class App extends Component {
  constructor() {
    super();
    this.state = {
      json: {}
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:3001");
    const json = await response.json();
    console.log(json);
    this.setState({ json });
  }

  render() {
    return (
      <div className="App">
        <Title title="Djello" />
        <pre>{JSON.stringify(this.state.json, null, 2)}</pre>
      </div>
    );
  }
}

export default App;
