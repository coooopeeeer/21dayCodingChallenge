/*
    Challenge #12

    The weekend lighthouse operator isn't as smart as you are, and sometimes tells the Lighthouse9000™ system to do invalid things, causing the repairman to have to come out and fix the lighthouse.
    Upgrade the lightCell() method so that if an invalid cell is passed in, it returns false.
    (Example: lightCell('Z3'); would return false as would lightCell('A11');)
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

// 12
function lightCell(name7) {
    var strRow = name7.slice(1);
    var num = Number(strRow);
      
    var alpha = convertColumn(name7);
      
    if (num > 10) {
        console.log(false);
    } else if (alpha > 9) {
        console.log(false);
    } else {
        console.log(true);
    }
}
lightCell('Z3');