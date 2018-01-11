import React, { Component } from 'react';
import { Boards, Title } from '.';


class App extends Component {
  constructor() {
    super();
    this.state = {
      boards: [
       { id: 1, name: 'Foo' },
       { id: 2, name: 'Bar' }
      ]
    };
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
