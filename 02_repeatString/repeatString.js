const repeatString = function(string,num) {

    let result = '';

    if (num >= 0) {
        for (let index = 0; index < num; index++) {
            result = result + string;            
        }
        return result;
    } else {
        return 'ERROR'
    }

};

// Do not edit below this line
module.exports = repeatString;
