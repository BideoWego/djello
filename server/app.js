const express = require('express');
const app = express();


// ----------------------------------------
// App Variables
// ----------------------------------------
app.locals.appName = 'My App';


// ----------------------------------------
// ENV
// ----------------------------------------
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
  app.disable('etag');
}


// ----------------------------------------
// CORS
// ----------------------------------------
const cors = require('cors');
app.use(cors());


// ----------------------------------------
// Body Parser
// ----------------------------------------
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ----------------------------------------
// Sessions/Cookies
// ----------------------------------------
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

app.use(cookieParser());
app.use(cookieSession({
  name: 'session',
  keys: [
    process.env.SESSION_SECRET || 'secret'
  ]
}));

app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});


// ----------------------------------------
// Flash Messages
// ----------------------------------------
const flash = require('express-flash-messages');
app.use(flash());


// ----------------------------------------
// Method Override
// ----------------------------------------
const methodOverride = require('method-override');
const getPostSupport = require('express-method-override-get-post-support');

app.use(methodOverride(
  getPostSupport.callback,
  getPostSupport.options // { methods: ['POST', 'GET'] }
));


// ----------------------------------------
// Referrer
// ----------------------------------------
app.use((req, res, next) => {
  req.session.backUrl = req.header('Referer') || '/';
  next();
});


// ----------------------------------------
// Public
// ----------------------------------------
app.use(express.static(`${__dirname}/public`));


// ----------------------------------------
// Passport
// ----------------------------------------
const passport = require('passport');
app.use(passport.initialize());


// ----------------------------------------
// JWTs
// ----------------------------------------
const {
  JWT_SECRET,
  JWT_ISSUER,
  JWT_AUDIENCE
} = process.env;
const {
  Strategy: JwtStrategy,
  ExtractJwt
} = require('passport-jwt');
const { User } = require('./models');

passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET,
  issuer: JWT_ISSUER,
  audience: JWT_AUDIENCE
}, async (payload, next) => {
  try {
    const id = payload.id;
    const user = await User.findById(id);

    if (user) {
      return next(null, user);
    }

    next(null, false);
  } catch (e) {
    next(e, false);
  }
}));


// ----------------------------------------
// Logging
// ----------------------------------------
const morgan = require('morgan');
const morganToolkit = require('morgan-toolkit')(morgan);

app.use(morganToolkit());


// ----------------------------------------
// Routes
// ----------------------------------------
const sessionsRouter = require('./routers/sessions');
app.use('/', sessionsRouter);

const usersRouter = require('./routers/users');
app.use('/users', usersRouter);

const boardsRouter = require('./routers/boards');
app.use('/boards', boardsRouter);

const listsRouter = require('./routers/lists');
app.use('/lists', listsRouter);

const cardsRouter = require('./routers/cards');
app.use('/cards', cardsRouter);


// ----------------------------------------
// Server
// ----------------------------------------
const port = process.env.PORT ||
  process.argv[2] ||
  3001;
const host = 'localhost';

const args = process.env.NODE_ENV === 'production' ?
  [port] :
  [port, host];

args.push(() => {
  console.log(`Listening: http://${ host }:${ port }\n`);
});

if (require.main === module) {
  app.listen.apply(app, args);
}


// ----------------------------------------
// Error Handling
// ----------------------------------------
const createError = require('http-errors');

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  console.error(err);

  err = err.status ?
    createError(err.status, err.message) :
    createError(500);

  res.status(err.status).json({
    error: {
      status: err.status,
      statusCode: err.status,
      message: err.message
    }
  });
});


module.exports = app;






