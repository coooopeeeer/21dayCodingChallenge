/*
    Challenge #13

    Environment Canada has called and wants a report sent to them of all the rocks and currents in your grid, for use in their latest map.

    Write a function called allRocks() which when called will return an array of the coordinates of all the rocks in your grid.
    (Example: allRocks() should return ['D1', 'E3', 'F3', 'E4', 'F4', 'B8', 'H8', 'B9', 'B10'])

    Write a function called allCurrents() which, when called, will return an array of the coordinates of all the strong currents in your grid.
    (Example: allCurrents() should return ['E2', 'C8', 'D8', 'D9', 'E9', 'E10', 'F10'])
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

// 13 - 1
function allRocks() {
    var array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var arrRocks = [];
    for (i = 0; i < GRID.length; i++) {
        for (t = 0; t < GRID[i].length; t++) {
            if (GRID[i][t] == '^') {
                var a = array[t];
                var n = i + 1;
                var an = a + n;
                arrRocks.push(an);
            }
        }
    }
    console.log(arrRocks);
}
allRocks();

// 13 - 2
function allCurrents() {
    var array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var arrCurrents = [];
    for (i = 0; i < GRID.length; i++) {
        for (t = 0; t < GRID[i].length; t++) {
            if (GRID[i][t] == '~') {
                var a = array[t];
                var n = i + 1;
                var an = a + n;
                arrCurrents.push(an);
            }
        }
    }
    console.log(arrCurrents);
}
allCurrents();