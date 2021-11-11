const express = require('express');
const apiRoutes = require('../Note-Taker/routes/apiRoutes')
const htmlRoutes = require('../Note-Taker/routes/htmlRoutes')

const PORT = process.env.PORT || 3001;
const app = express();

// setup server to open routes to css and js files
app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incomingJSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes)

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});