const palindromes = function (txt) {

    const txtClean = txt.toLowerCase().replace((/,|\.|!| /g),'');
    const reverseTxt = txt.toLowerCase().replace((/,|\.|!| /g),'').split('').reverse().join('');
    
    if (txtClean === reverseTxt) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
