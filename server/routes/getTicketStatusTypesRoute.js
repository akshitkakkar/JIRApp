const { API_AUTH_KEY } = require("../config/auth/auth");
const { JIRA_DOMAIN, GET_JIRA_PROJECTS } = require("../config/constants/urls");

module.exports = (app, request) => {

    app.get('/getTicketStatusTypes/:key', (req, res) => {
        
        const options = {
            url: `${JIRA_DOMAIN}${GET_JIRA_PROJECTS}/${req.params.key}/statuses`,
            headers: {
                'Authorization' : API_AUTH_KEY
            }
        }

        request(options, function(error, response, body) {
            res.send(body)
        });
    })
}