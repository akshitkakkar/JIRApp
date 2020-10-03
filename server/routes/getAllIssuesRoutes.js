const { API_AUTH_KEY } = require("../config/auth/auth");
const { JIRA_DOMAIN, SEARCH_JIRA_API } = require("../config/constants/urls");

module.exports = (app, request) => {

    const options = {
        url: `${JIRA_DOMAIN}${SEARCH_JIRA_API}`,
        headers: {
            'Authorization' : API_AUTH_KEY
        }
    }

    app.get('/fetchProjects', (req, res) => {
        request(options, function(error, response, body) {
            res.send(body)
        });
    })
}