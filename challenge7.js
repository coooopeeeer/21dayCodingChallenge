/*
    Challenge #7

    In the area where the lighthouse is watching, the grid, there are many rocks which ships would need to avoid.
    Rocks are indicated with the ^ symbol on the grid.

    Write a function called isRock() which will take in a coordinate in the form of 'C7' and return a true or a false boolean value depending on whether there is a rock in that cell or not.
    (Example: isRock('D1'); would return true)
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

// 7
function isRock(name2) {
    var inCell = lightCell(name2);
    if (inCell === '^') {
      console.log(true);
    } else {
      console.log(false);
    }
}
isRock('D1');