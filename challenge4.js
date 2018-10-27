/*
    Challenge #4

    Awesome job!
    Other lighthouse operators are jealous of your grid.
    Just to show off, let's write a new function for the system which will count up how many cells total there are.
    Given the code you just wrote, this should be pretty easy.

    Write a new function called totalCells() which will return the total number of cells in your grid.
    For this grid, it should return 100, but again make sure that is a calculated value and not just a number you type in for your function to return.
    We want to make all the other lighthouse operators jealous.
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

// 1
function countRows() {
    var numRow = GRID.length;
    return numRow;
}

// 2
function countColumns() {
    for (i = 0; i < GRID.length; i++) {
        var numCol = GRID[i].length;
        return numCol;
    }
}

// 3
var numRows = countRows();
var numCols = countColumns();
function gridSize() {
    return numCols + ' x ' + numRows;
}

// 4
function totalCells() {
    var numCells = numRows * numCols;
    console.log(numCells);
}
totalCells();