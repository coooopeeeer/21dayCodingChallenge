/*
    Challenge #6

    Okay, let's get our lighthouse actually doing some work!
    As the lighthouse keeper, sometimes you'll need to shine the light directly on a particular cell in the grid, to alert passing ships to a danger there.

    Your job is to write a function called lightCell() that takes in the coordinates in the form of 'A3' or 'J9' and returns the contents of that specific cell.
    (Ex: lightCell('B4'); would return "")
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
      
    console.log(rowArr[result]);
}
lightCell('B4');