# Djello

Project management with that great wobbly taste. (Trello clone)

Djello is a full-stack React/Redux and Node/Express.js project management application. Built on top of a PostgreSQL
database.

View the deployed app on Surge (API powered by Heroku) [here](https://bideowego-djello.surge.sh/).


## TL;DR

Djello was a project assigned to the students of Viking Code School. The goal of which is to recreate the features and functionality of the popular app Trello. Djello is split into two separate applications. The first is a front-end SPA built with React, Redux, React-Router and Bootstrap 4 (Reactstrap). The second is a Node/Express.js back-end JSON API that provides end-points to query the Postgres database. Features include the creation and in-place editing of boards, lists, cards, assignment of other members to cards to complete tasks, and card activity feeds.


## Installation and Running

- Clone this repo
- `cd` into the `client/` folder
- Run `npm install`
- `cd` into the `server/` folder
- Run `npm install`
- The app runs on a PostgreSQL database, so have that installed and running
- Create the dev database with `createdb project_djello_development`
- In the `server/` folder run `npm run seeds`
- Create a `.env` file in the `server/` folder with the following contents:
```bash
PG_USERNAME="YOUR_POSTGRES_USERNAME"
JWT_SECRET="SECRET_KEY_FOR_JSON_WEB_TOKENS"
JWT_ISSUER="http://localhost:3000"
JWT_AUDIENCE="http://localhost:3001"
```
- Fire up the project with `npm run start:dev`
    - (_Note this only works in you're on OSX. Otherwise you'll have to run `npm start` in both the `client/` and `server/` folders separately._)


## TODOs [Unreleased]

- Authorize and scope requests to board owner
- Back-end session storage
- Validations (front-end and back-end)
- Use PropTypes
- Card members
- Card activity
- Card due dates
- Registration
- Emails
- Account edit
- Card checklists
- Complete card
- Notifications
- Archive boards, lists, cards
- File uploads
- Websockets
