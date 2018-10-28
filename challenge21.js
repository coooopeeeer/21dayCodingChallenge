/*
    Challenge #21

    Ship captains have heard of your prowess and want to know the length of their routes through your grid.

    Write a function called calcDistance() which will take two coordinates in the form of 'A3' and calculate the distance between the two points.
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

// 21
function distanceXY(coo) {
    var arrXY = [];
    var colIndex = convertColumn(coo[0]);
    var num = coo.slice(1);
    var parsedInt = parseInt(num, 10) - 1;
    arrXY.push(colIndex);
    arrXY.push(parsedInt);
    return arrXY;
}
function calcDistance(coo1, coo2) {
    var point1 = distanceXY(coo1);
    var point2 = distanceXY(coo2);
    var distanceFormula = ((point2[0] - point1[0]) * 2) + ((point2[1] - point1[1]) * 2);
    var distance = Math.sqrt(distanceFormula).toFixed(2);
    console.log(distance);
}
calcDistance('A3', 'A6');