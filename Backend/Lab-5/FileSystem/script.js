const fs = require('fs')
const path = require('path')

let data = "This is temp Data"

let loc = path.join(__dirname, 'data', 'file1.txt')

fs.writeFile(loc, data, (err) => {
    if (err) {
        return console.log("There is an error");

    }
    console.log("Data written successfully")
})


fs.readFile(loc, (err, data) => {
    if (err) {
        return console.log("Error in this file")
    }
    else if (data) {
        console.log('From first method');
        console.log(data.toString());
    }
})



fs.readFile(loc, 'utf-8', (err, data) => {
    if (err) {
        return console.log("Error in this file")
    }
    else if (data) {
        console.log('From second method');
        console.log(data);
    }
})


//////////////////// write code for recive the file from data folder and then sort the number and return the output.txt //////////////
