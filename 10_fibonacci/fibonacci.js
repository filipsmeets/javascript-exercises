const fibonacci = function(member) {
    
    const serie = [0,1];

    if (Number(member) < 0) {
        return 'OOPS';
    } else if (Number(member) < 2) {
        return serie[member];
    } else {
        do {
            serie.push(serie[serie.length - 2] + serie[serie.length - 1]);
        } while (serie.length <= member);

        return serie[serie.length - 1];
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
