/*
    Challenge #19

    It's time for monthly reporting to Lighthouse HQ.
    Your supervisor calls you and tells you that they need a report of what percentage of your grid is rocks and what percentage has strong currents.
    This data should be sent as an array of two number values, in that specific order.

    Write a function percentageReport() that returns the right percentages.
    (Example: calling percentageReport() should return the following array: [9.00, 7.00], as 9% of your GRID is rocks, and 7% is currents.)
    Your grid produces nice easy integers.
    However, not all grids will.
    Just to be certain, make sure your results always return 2 decimal places.
    This will really help ALL the Lighthouse9000™ operators.
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

function percentageReport() {
    var countAll = 0;
    var countRocks = 0;
    var countCurrents = 0;
    var arrPercentage = [];
    for (i = 0; i < GRID.length; i++) {
        for (t = 0; t < GRID[i].length; t++) {
            countAll++;
            if (GRID[i][t] == '^') {
                countRocks++;
            } else if (GRID[i][t] == '~') {
                countCurrents++;
            }
        }
    }
    var perRocks = countRocks / countAll * 100
    var perCurrents = countCurrents / countAll * 100
    arrPercentage.push(perRocks.toFixed(2));
    arrPercentage.push(perCurrents.toFixed(2));
    console.log(arrPercentage);
}
percentageReport();