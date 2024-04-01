const findTheOldest = function(array) {

    const oldest = array.reduce((person1, person2) => {
        
        const currentYear = (new Date(Date.now())).getFullYear();
        if (person1.yearOfDeath === undefined) {
            person1.yearOfDeath = currentYear;
            if (person2.yearOfDeath === undefined) {
                person2.yearOfDeath = currentYear;
            }
        }
    
        if (person1.yearOfDeath - person1.yearOfBirth > person2.yearOfDeath - person2.yearOfBirth) {
            return person1;
        } else {
            return person2;
        }

    })

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
