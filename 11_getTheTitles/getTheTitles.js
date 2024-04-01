const getTheTitles = function(books) {

    const titles = []
    books.forEach(element => {
        titles.push(element.title); 
    });
    console.log(titles);
    return titles;

}

// Do not edit below this line
module.exports = getTheTitles;
