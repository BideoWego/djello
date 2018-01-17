import React from 'react';
import { Title, NewBoard } from '.';
import { NavigationContainer, BoardContainer } from '../containers';
import { Switch, Route } from 'react-router-dom';

const App = ({
  users,
  boards,
  currentUser,
  board,
  isOpenNewBoard,
  onToggleNewBoard
}) => (
  <div className="App">
    <Title title="Djello" />
    <NewBoard isOpen={isOpenNewBoard} toggle={onToggleNewBoard} />
    <NavigationContainer
      brand="Djello"
      currentUser={currentUser}
      onClickCreateBoard={onToggleNewBoard}
      boards={boards} />
    <main className="container">
      <Switch>
        <Route path="/boards/:id" component={BoardContainer} />
        <Route
          path="*"
          render={() => (
            <p className="text-muted text-center">
              Select or {' '}
              <a href="" onClick={e => {
                e.preventDefault();
                onToggleNewBoard()
                return false;
              }}>create a board</a>
            </p>
          )} />
      </Switch>
    </main>
  </div>
);

export default App;
