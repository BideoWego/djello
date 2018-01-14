import React from 'react';
import { Boards, Title } from '.';
import { NavigationContainer } from '../containers';

const App = ({ users, boards, currentUser }) => (
  <div className="App">
    <Title title="Djello" />
    <NavigationContainer
      brand="Djello"
      currentUser={currentUser}
      boards={boards} />
  </div>
);

export default App;
