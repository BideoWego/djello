// ----------------------------------------
// API End-Point
// ----------------------------------------
const env = process.env.NODE_ENV || 'development';
const API_URL = {
  development: 'http://localhost:3001',
  test: 'http://localhost:8888',
  production: 'http://bideowego-djello-api.herokuapp.com'
}[env];

const apiUrlFor = uri => `${ API_URL }${ uri }`;

export { apiUrlFor };
