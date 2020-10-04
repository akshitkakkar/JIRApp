const express = require('express')
const app = express()
const request = require('request');
const getProjectsRoute = require('./routes/getProjectsRoute');
const getTicketsRoute = require('./routes/getTicketsRoute');
const getTicketStatusTypesRoute = require('./routes/getTicketStatusTypesRoute');
const scheduleIssueUpdate = require('./scheduler/scheduleIssueUpdate');
const cron = require('node-cron')

//cron job scheduled for every minute to be able to see changes
//to change to 24 hours instead of a minute use ==> '59 23 * * *' instead
cron.schedule('* * * * *', function() {
  console.log('**************** RUNNING ISSUE UPDATE SCHEDULER ********************')
  scheduleIssueUpdate(request)
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

getProjectsRoute(app, request)
getTicketStatusTypesRoute(app, request)
getTicketsRoute(app, request)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Proxy Server on PORT ${PORT}`)
})