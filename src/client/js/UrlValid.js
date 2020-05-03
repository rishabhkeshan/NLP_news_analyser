function checkForValidity(inputText) {
var validUrl = require('valid-url');
    if (validUrl.isUri(inputText)){
        return true;
    } else {
        return false;
    }
}
export { checkForValidity }