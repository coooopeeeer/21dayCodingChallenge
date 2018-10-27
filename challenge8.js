/*
    Challenge #8

    There are also areas where the currents are too strong for boats to be effective, and boats run the risk of being smashed up against the rocks if they get caught here.
    Strong currents are indicated with the ~ symbol.

    Write a function called isCurrent() which will take in a coordinate in the form of 'A4' and return a true or a false boolean value depending on whether there is a strong current in that cell or not.
    (Example: isCurrent('E2'); would return true)
*/

const GRID = [
    ["", "", "", "^", "", "", "", "", "", ""],
    ["", "", "v", "", "~", "", "", "", "", ""],
    ["", "v", "", "", "^", "^", "", "", "", ""],
    ["", "", "", "", "^", "^", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "v", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "^", "~", "~", "", "", "", "^", "", ""],
    ["", "^", "", "~", "~", "", "", "", "", ""],
    ["", "^", "", "", "~", "~", "", "", "", ""],
];

// 5
function convertColumn(name) {
    var array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var result = array.indexOf(name[0]);
    return result;
}

// 6
function lightCell(name1) {
    var strRow = name1.slice(1);
    var row = Number(strRow);
    var rowArr = GRID[row - 1];
    
    var result = convertColumn(name1);
      
    return rowArr[result];
}

// 8
function isCurrent(name3) {
    var inCell = lightCell(name3);
    if (inCell === '~') {
      console.log(true);
    } else {
      console.log(false);
    }
}
isCurrent('E2');