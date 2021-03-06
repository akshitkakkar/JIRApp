const auth = require("../config/auth/auth");
const { JIRA_DOMAIN, GET_JIRA_PROJECTS } = require("../config/constants/urls");

module.exports = (app, request) => {

    app.get('/getTicketStatusTypes/:key', (req, res) => {
        
        const options = {
            url: `${JIRA_DOMAIN}${GET_JIRA_PROJECTS}/${req.params.key}/statuses`,
            headers: {
                'Authorization' : auth()
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