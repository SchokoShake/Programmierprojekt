exports.createMatrix = function (x, y) {
    let arr = new Array(x);
    for (var i = 0; i < x; i++) {
        arr[i] = new Array(y);
        for (var z = 0; z < y; z++) {
            arr[i][z] = null;
        }
    }
    return arr;
}

exports.fillCell = function (x, y, result, require, offer, einheitskosten) {
    switch (true) {

        case (offer[x] == require[y]):
            strikeOutExhausted(x, y, einheitskosten);
            break;

        case (offer[x] < require[y]):
            strikeOutExhausted(x, null, einheitskosten);
            break;

        case (offer[x] > require[y]):
            strikeOutExhausted(null, y, einheitskosten);
            break;

    }
    let min = Math.min(offer[x], require[y]);
    result[x][y] = min;
    offer[x] -= min;
    require[y] -= min;
    console.log(min);
}

var strikeOutExhausted = function (x, y, einheitskosten) {
    if ((x != null) && (y != null)) {
        strikeOutExhausted(null, y, einheitskosten);
        strikeOutExhausted(x, null, einheitskosten);
    }
    for (var i = 0; i < einheitskosten.length; i++) {
        if (y != null) { einheitskosten[i][y] = null; }
        if (x != null) { einheitskosten[x][i] = null; }
    }
}