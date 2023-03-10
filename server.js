const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
//change
app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public/images'));
app.get('/public/images/logo-parkhopper.png', (req, res) => {
  res.sendFile(__dirname + '/public/images/logo-parkhopper.png');
});
app.get('/public/images/hero-cacti.png', (req, res) => {
  res.sendFile(__dirname + '/public/images/hero-cacti.png');
});
app.get('/public/images/hero-glacier.png', (req, res) => {
  res.sendFile(__dirname + '/public/images/hero-glacier.png');
});
app.get('/public/images/hero-waterfall.png', (req, res) => {
  res.sendFile(__dirname + '/public/images/hero-waterfall.png');
});
app.get('/public/images/hero-arches.png', (req, res) => {
  res.sendFile(__dirname + '/public/images/hero-arches.png');
});
app.get('/public/images/hero-bryce.png', (req, res) => {
  res.sendFile(__dirname + '/public/images/hero-bryce.png');
});
app.get('/public/images/hero-canyon.png', (req, res) => {
  res.sendFile(__dirname + '/public/images/hero-canyon.png');
});
app.get('/public/images/hero-zions.png', (req, res) => {
  res.sendFile(__dirname + '/public/images/hero-zions.png');
});
app.get('/public/images/background.png', (req, res) => {
  res.sendFile(__dirname + '/public/images/background.png');
});
app.get('/public/images/icon-closed.png', (req, res) => {
  res.sendFile(__dirname + '/public/images/icon-closed.png');
});
app.get('/public/images/icon-open.png', (req, res) => {
  res.sendFile(__dirname + '/public/images/icon-open.png');
});
app.get('/public/images/bg-hills.png', (req, res) => {
  res.sendFile(__dirname + '/public/images/bg-hills.png');
});
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
