const fibonacci = function(member) {
    // The following number is the sum of the previous two numbers
    // 1,1,2,3,5,8,13,21,34
    
    let nr1 = 0;
    let nr2 = 1;
    let nr3 = nr1 + nr2;
    const serie = [nr1, nr2, nr3];
    
    do {
       
        nr1 = nr2;
        console.log(nr1);
       
        nr2 = nr3;
        console.log(nr3);

        nr3 = nr1 + nr2;
        console.log(nr3);

        serie.push(nr3);
        console.log(serie);

    } while (serie.length <= member -1);

    return serie[serie.length-1];

};

// Do not edit below this line
module.exports = fibonacci;
