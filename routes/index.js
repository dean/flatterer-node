var general    = require('./general')
  , compliment = require('./compliment')

module.exports = app => {
    app.get('/index', (req, resp) => {
        resp.send('Index page for Flatterer.');
    });
    app.get('/home', general.home);
    app.get('/compliment/:gender', compliment.compliment_gender);
}
