/*
    Challenge #20

    Lighthouse HQ also wants a report of the safety of your GRID.
    Write another function called `safetyReport()` which will return your GRID with all of the values replaced by the percentage for how dangerous they are.
    The percentages for how dangerous a cell is were established in question #18.
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
      
    return rowArr[result];
}

// 18
function howDangerous(name8) {
    var inCell = lightCell(name8);
    if (inCell === '^') {
        return 100;
    } else if (inCell === '~') {
        return 50;
    } else {
        return 0;
    }
}

// 20
function safetyReport() {
    var array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    return GRID.map(function(row, rowIndex) {
        return row.map(function(col, colIndex) {
            var coordinate = array[colIndex] + (rowIndex + 1);
            console.log(howDangerous(coordinate));
        })
    })
}
safetyReport();