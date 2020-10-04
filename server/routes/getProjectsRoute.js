const auth = require("../config/auth/auth");
const { JIRA_DOMAIN, GET_JIRA_PROJECTS } = require("../config/constants/urls");

module.exports = (app, request) => {

    const options = {
        url: `${JIRA_DOMAIN}${GET_JIRA_PROJECTS}?expand=lead`,
        headers: {
            'Authorization' : auth()
        }
    }

    app.get('/fetchProjects', (req, res) => {
        request(options, function(error, response, body) {
            if(error) {
                res.send({apiError: true})
            }
            res.send(body)
        });
    })
}