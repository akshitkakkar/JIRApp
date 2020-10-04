const convertBase64 = require("../../utilities/convertBase64");

module.exports = () => {
    
    const EMAIL_ID = 'kakkar.akshit@yahoo.com'
    const API_TOKEN = 'FJoDOrYw2EERauB0IrnS5ECE'

    return convertBase64(EMAIL_ID + ':' + API_TOKEN)
}