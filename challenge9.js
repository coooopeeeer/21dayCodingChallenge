/*
    Challenge #9

    And last, but certainly not least, there are cells with ships in them!
    We need to be able to query any cell in our GRID area and find out if it is occupied by a ship.

    Write a function called isShip() which will take in a coordinate in the form of 'I9' and return a true or a false boolean value depending on whether there is a ship in that cell or not.
    (Example: isShip('B3') would return true)
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

// 9
function isShip(name4) {
    var inCell = lightCell(name4);
    if (inCell === 'v') {
      console.log(true);
    } else {
      console.log(false);
    }
}
isShip('B3');