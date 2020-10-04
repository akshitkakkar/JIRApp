const { API_AUTH_KEY } = require("../config/auth/auth");
const { JIRA_DOMAIN, GET_TRANSITION } = require("../config/constants/urls");

module.exports = (request, issueId) => {
    return new Promise((resolve, reject) => {
        const options = {
            url: `${JIRA_DOMAIN}${GET_TRANSITION}/${issueId}/transitions`,
            headers: {
                'Authorization' : API_AUTH_KEY
            }
        }

        request(options, function(error, response, body) {
            if(error) {
                reject({apiError: true})
            }
            resolve(body)
         });
    })
}