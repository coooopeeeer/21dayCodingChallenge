/*
    Challenge #16

    That was outstanding!
    Now do the same thing with firstCurrent().
    Don't reinvent the wheel here, re-use existing code.
    This is one of the most important skills you can build as a coder...er, uh, I mean Lighthouse operator.
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
    return arrCurrents;
}

// 16
function firstCurrent() {
    var currents = allCurrents();
    console.log(currents[0]);
}
firstCurrent();