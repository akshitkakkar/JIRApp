const auth = require("../config/auth/auth");
const { JIRA_DOMAIN, GET_TRANSITION } = require("../config/constants/urls");

module.exports = (request, issueId, transitions, index) => {
    return new Promise((resolve, reject) => {
        const options = {
            url: `${JIRA_DOMAIN}${GET_TRANSITION}/${issueId}/transitions`,
            method :"POST",
            headers: {
                'Authorization' : auth()
            },
            body: {
               'transition' : {
                   'id' : transitions[index].id
               }
            },
            json: true
        }

        request(options, function(error, response, body) {
            if(error) {
                reject({apiError: true})
            }
            resolve(response.statusCode)
         });
    })
}