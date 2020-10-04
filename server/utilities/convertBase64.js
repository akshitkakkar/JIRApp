module.exports = (stringToConvert) => {
    let buff = new Buffer.from(stringToConvert);
    let convertedString = buff.toString('base64');
    return 'Basic ' + convertedString
}