import React from 'react';
import { Boards, Title } from '.';

const App = ({ users, boards, currentUser }) => (
  <div className="App">
    <Title title="Djello" />
    <div className="currentUser">
      <h1>Current User</h1>
      <pre>
        {JSON.stringify(
          currentUser,
          (k, v) => k === 'passwordHash' ? '[FILTERED]' : v ,
          2
        )}
      </pre>
    </div>
    <div className="users">
      <h1>Users</h1>
      <pre>
        {JSON.stringify(
          users,
          (k, v) => k === 'passwordHash' ? '[FILTERED]' : v ,
          2
        )}
      </pre>
    </div>
    <Boards boards={boards} />
  </div>
);

export default App;
