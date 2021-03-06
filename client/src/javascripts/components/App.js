import React from 'react';
import { Title } from '.';
import {
  NavigationContainer,
  BoardContainer,
  NewBoardContainer,
  CardDetailContainer,
  LoginContainer,
  LogoutContainer
} from '../containers';
import { Switch, Route } from 'react-router-dom';

// TODO: add PropTypes
const App = ({
  isOpenNewBoard,
  onToggleNewBoard
}) => (
  <div className="App mb-5">
    <Title title="Djello" />
    <LoginContainer>
      <Route exact path="/logout" component={LogoutContainer} />
      <Route path="/cards/:id" component={CardDetailContainer} />
      <NewBoardContainer
        isOpen={isOpenNewBoard}
        toggle={onToggleNewBoard} />
      <NavigationContainer
        brand="Djello"
        onClickBoardCreate={onToggleNewBoard} />
      <main className="container-fluid mt-4 mb-5">
        <Switch>
          <Route path="/boards/:id" component={BoardContainer} />
          <Route path="/cards/:id" render={
            props => <BoardContainer isCardBackground {...props} />
          } />

          {/* TODO figure out 404 handler here or in index.js */}
          <Route
            path="*"
            render={props => (
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
    </LoginContainer>
  </div>
);

export default App;
