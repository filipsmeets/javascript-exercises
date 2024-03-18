const removeFromArray = function(arg, ...otherArg) {
    let newArray = [];
    arg.forEach(element => {
        if (!otherArg.includes(element)) {
            newArray.push(element);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
