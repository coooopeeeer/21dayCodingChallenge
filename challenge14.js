/*
    Challenge #14

    While we are reporting on things, let's make a report for all of the ships in our area.
    This one is for Transport Canada, as they are the ones watching all the movements of ships.

    Write a function called allShips() which, when called, will return an array of the coordinates of all the ships in your grid.
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
    console.log(arrShips);
}
allShips();