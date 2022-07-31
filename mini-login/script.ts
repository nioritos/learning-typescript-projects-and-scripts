const userData: string = 'junior';
const passwordData: number = 807022;

const userName: string = 'nioritos';
const passwordUser: number = 807022;

function verifyDatasUser(name: string, pass: number) {
    if(name === userData && pass === passwordData) {
        return "welcome"
    }else {
        return false
    } 
    
    
    //else if(name === userData || pass === passwordData) {
    //     return "any is wrong, attention in your fieds, try again."
    // }
};

verifyDatasUser(userName, passwordUser);