var userData = 'junior';
var passwordData = 807022;
var userName = 'nioritos';
var passwordUser = 807022;
function verifyDatasUser(name, pass) {
    if (name === userData && pass === passwordData) {
        return "welcome";
    }
    else {
        return false;
    }
    //else if(name === userData || pass === passwordData) {
    //     return "any is wrong, attention in your fieds, try again."
    // }
}
;
verifyDatasUser(userName, passwordUser);
