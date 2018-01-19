import React from 'react';
import { Title } from '.';
import {
  NavigationContainer,
  BoardContainer,
  NewBoardContainer
} from '../containers';
import { Switch, Route } from 'react-router-dom';

const App = ({
  users,
  boards,
  currentUser,
  board,
  isOpenNewBoard,
  onToggleNewBoard
}) => (
  <div className="App mb-5">
    <Title title="Djello" />
    <NewBoardContainer
      isOpen={isOpenNewBoard}
      toggle={onToggleNewBoard} />
    <NavigationContainer
      brand="Djello"
      currentUser={currentUser}
      onClickBoardCreate={onToggleNewBoard}
      boards={boards} />
    <main className="container-fluid mt-4 mb-5">
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
