import React from 'react';
import { Title } from '.';
import {
  NavigationContainer,
  BoardContainer,
  NewBoardContainer,
  CardContainer
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
    <Route path="/cards/:id" component={CardContainer} />
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
        {/* TODO: Put logic in board container to get board from board or card id or wrap board container with a component to resolve the board from either */}
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
