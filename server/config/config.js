module.exports = {
  "development": {
    "username": process.env.PG_USERNAME,
    "password": null,
    "database": "project_djello_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.PG_USERNAME,
    "password": null,
    "database": "project_djello_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres"
  }
};

