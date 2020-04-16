
// nwe.js
const helper = require('./helper');

var fillCell = function (x, y, result, require, offer) {
    let min = Math.min(offer[x], require[y]);
    result[x][y] = min;
    offer[x] -= min;
    require[y] -= min;
}

var arrBedarf = [60, 70, 100, 50];
var arrAngebot = [80, 80, 120];

var lenA = arrAngebot.length;
var lenB = arrBedarf.length;


var solveNWE = function (arrAngebot, arrBedarf) {
    var ergebnis = helper.createMatrix(lenA, lenB);

    for (var b = 0; b < lenB;) {
        for (var a = 0; a < lenA;) {

            console.log("Angebot: " + arrAngebot[a] + " und " + "Bedarf: " + arrBedarf[b]);

            if (arrAngebot[a] > arrBedarf[b]) {

                ergebnis[a][b] = arrBedarf[b];
                arrAngebot[a] = arrAngebot[a] - arrBedarf[b];
                arrBedarf[b] = 0;
                b++;

                print(a, b);
            }
            else if (arrAngebot[a] < arrBedarf[b]) {
                ergebnis[a][b] = arrAngebot[a];
                arrBedarf[b] = arrBedarf[b] - arrAngebot[a];
                arrAngebot[a] = 0;

                a++;

                print(a, b);
            }
            else if (arrAngebot[a] == arrBedarf[b]) {
                ergebnis[a][b] = arrAngebot[a];
                arrBedarf[b] = 0;
                arrAngebot[a] = 0;
                b++;
                a++;

                print(a, b);
            }
            else {
                b++; a++;
                console.log("nothing");
            }
        }

    }
    return ergebnis;
}

ergebnis = solveNWE(arrAngebot, arrBedarf);
console.dir(ergebnis[0]);
console.dir(ergebnis[1]);
console.dir(ergebnis[2]);

function print(a, b) {
    console.log("AFTER Angebot: " + arrAngebot[a] + " und " + "Bedarf: " + arrBedarf[b]);
}