/*
    Challenge #11

    Now that you can return the contents of the cells of a row, we also need to be able to return the cells of a column.

    Write a function called lightColumn() that takes in the letter of the column from the grid, and returns an array that is the contents of that grid column.
    (Ex: lightColumn('C'); would return ["", "v", "", "", "", "", "", "~", "", ""])
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

// 11
function lightColumn(name6) {
    var result = convertColumn(name6);
    var array = [];
    for (i = 0; i < GRID.length; i++) {
        var each = GRID[i][result];
        array.push(each);
    }
    console.log(array);
}
lightColumn('C');