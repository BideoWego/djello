import createBrowserHistory from 'history/createBrowserHistory';

// ----------------------------------------
// API End-Point
// ----------------------------------------
const env = process.env.NODE_ENV || 'development';
const API_URL = {
  development: 'http://localhost:3001',
  test: 'http://localhost:8888',
  production: 'https://bideowego-djello.herokuapp.com'
}[env];

const apiUrlFor = uri => `${ API_URL }${ uri }`;

export { apiUrlFor };


// ----------------------------------------
// History
// ----------------------------------------
const history = createBrowserHistory();

export { history };
