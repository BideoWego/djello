import React from 'react';
import { Title } from '.';
import { NavigationContainer, BoardContainer } from '../containers';
import { Switch, Route } from 'react-router-dom';

const App = ({ users, boards, currentUser, board }) => (
  <div className="App">
    <Title title="Djello" />
    <NavigationContainer
      brand="Djello"
      currentUser={currentUser}
      boards={boards} />
    <main className="container">
      <Switch>
        <Route path="/boards/:id" component={BoardContainer} />
        <Route
          path="*"
          render={() => (
            <p className="text-muted text-center">Select or create a board</p>
          )} />
      </Switch>
    </main>
  </div>
);

export default App;
