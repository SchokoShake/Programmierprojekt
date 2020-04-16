const helper = require('./helper');

// solver für Matrix Minimum Verfahren
var solveMMR = function (einheitskosten, arrBedarf, arrAngebot) {

    var lenA = arrAngebot.length;
    var lenB = arrBedarf.length;

    // erstelle ergebnismatrix
    var ergebnis = helper.createMatrix(lenA, lenB);
   
    var minimum = findMin(einheitskosten, lenA, lenB);
    var help=0;
    while (minimum != null) {
        console.log(ergebnis);
        //console.log(arrAngebot);
        //console.log(arrBedarf);
        helper.fillCell(minimum[0], minimum[1], ergebnis, arrBedarf, arrAngebot,einheitskosten);
        
        // finde niedrigste zelle die gefüllt werden soll
        minimum = findMin(einheitskosten, lenA, lenB);
        help++;
        if(help==100){break;}
        //console.log(einheitskosten);
    }

    console.log(ergebnis);

}

var findMin = function (einheitskosten, lenX, lenY) {
    var min = new Array(2);
    var temp = Infinity;
    for (var x = 0; x < lenX; x++) {
        for (var y = 0; y < lenY; y++) {
            
            if (!(einheitskosten[x][y]==null)&&(einheitskosten[x][y] < temp)) {
                temp = einheitskosten[x][y];
                min[0] = x;
                min[1] = y;
            }
        }
    }
    if (min.includes(undefined)) {
        return null;
    }
    return min;
}

var einheitskosten = [  [12, 14, 10, 5], 
                        [11, 15, 10, 8], 
                        [10, 18, 15, 9]];


var arrBedarf = [60, 70, 100, 50];
var arrAngebot = [80, 80, 120];

var a = solveMMR(einheitskosten, arrBedarf, arrAngebot);


