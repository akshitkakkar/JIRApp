const express = require('express')
const app = express()
const request = require('request');
const getProjectsRoute = require('./routes/getProjectsRoute');
const getTicketsRoute = require('./routes/getTicketsRoute');
const getTicketStatusTypesRoute = require('./routes/getTicketStatusTypesRoute');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

getProjectsRoute(app, request)
getTicketStatusTypesRoute(app, request)
getTicketsRoute(app, request)

const PORT = 5000;

app.listen(PORT, () => {
    console.log('Proxy Server on PORT 5000')
})