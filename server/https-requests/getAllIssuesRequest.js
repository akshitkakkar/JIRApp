const auth = require("../config/auth/auth");
const { JIRA_DOMAIN, SEARCH_JIRA_API } = require("../config/constants/urls");

module.exports = (request) => {
    return new Promise((resolve, reject) => {
        const options = {
            url: `${JIRA_DOMAIN}${SEARCH_JIRA_API}`,
            headers: {
                'Authorization' : auth()
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