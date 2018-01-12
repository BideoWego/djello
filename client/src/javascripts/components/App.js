import React, { Component } from 'react';
import { Boards, Title } from '.';


class App extends Component {
  constructor() {
    super();
    this.state = {
      boards: []
    };
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:3001/boards');
    console.log(response);
    const boards = await response.json();
    this.setState({ boards });
  }

  render() {
    return (
      <div className="App">
        <Title title="Djello" />
        <Boards boards={this.state.boards} />
      </div>
    );
  }
}

export default App;
