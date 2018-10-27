/*
    Challenge #17

    Transport Canada called back.
    They want something similar to what you did for firstRock() and firstCurrent() but they want both the first AND the last ship in your area.

    Write a function called shipReport() which does not take any parameters, but will return an array of the coordinates of the ship furthest to the west (left) and east (right) of your GRID.
    (Example: shipReport() would return ['B3', 'I5'].)
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

// 14
function allShips() {
    var array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var arrShips = [];
    for (i = 0; i < GRID.length; i++) {
        for (t = 0; t < GRID[i].length; t++) {
            if (GRID[i][t] == 'v') {
                var a = array[t];
                var n = i + 1;
                var an = a + n;
                arrShips.push(an);
            }
        }
    }
    return arrShips;
}

// 17
function shipReport() {
    var arrShips = [];
    var ships = allShips();
    arrShips.push(ships[0]);
    arrShips.push(ships[ships.length - 1]);
    console.log(arrShips);
}
shipReport();