const { API_AUTH_KEY } = require("../config/auth/auth");
const { JIRA_DOMAIN, SEARCH_JIRA_API } = require("../config/constants/urls");

module.exports = (app, request) => {

    app.get('/getTickets/:key', (req, res) => {
        
        const options = {
            url: `${JIRA_DOMAIN}${SEARCH_JIRA_API}?jql=project=${req.params.key}`,
            headers: {
                'Authorization' : API_AUTH_KEY
            }
        }

        request(options, function(error, response, body) {
            if(error) {
                res.send({apiError: true})
            }
            res.send(body)
        });
    })
}