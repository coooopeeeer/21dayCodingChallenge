/*
    Challenge #15

    Here is an opportunity to prove how powerful your Lighthouse-powering skills are!
    Write a function called firstRock() which will return the coordinates of the first rock in your grid.
    Consider how you might use one of your previously written functions to simplify your task!
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
    return arrRocks;
}

// 15
function firstRock() {
    var rocks = allRocks();
    console.log(rocks[0]);
}
firstRock();