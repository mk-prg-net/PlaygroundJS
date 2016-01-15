
PrimeTest = function (candidate) {

    var primefactor = 2;
    // 1 von den Primzahlen ausschließen, da neutrales Element bezüglich Multiplikation
    if (candidate === 1) return false;

    // Prüfen gegen die Liste der allgemein bekannten Primzahlen
    if ([2, 3, 5, 7, 11, 13, 17, 19].indexOf(candidate) > -1)
        return true;

    // Prüfen auf mögliche Teiler
    while (primefactor * primefactor < candidate && candidate % primefactor != 0) {
        primefactor++;
    }

    if (primefactor * primefactor > candidate)
        return true;
    else
        return false;
}


// doneCallback(PrimNums[])
// ProgressInfoCallback(Anzahl bereits gefundener)
PrimeScan2 = function (begin, end, doneCallback, ProgressInfoCallback) {
    var PrimeNums = [];

    var MonitorPrimScan = { stop: false };

    PrimeScanPart2(MonitorPrimScan, PrimeNums, begin, end, doneCallback, ProgressInfoCallback);

    return MonitorPrimScan;
}


PrimeScanPart2 = function (MonitorPrimScan, PrimeNums, begin, end, doneCallback, ProgressInfoCallback) {

    try {

        if (MonitorPrimScan.stop) {
            doneCallback(PrimeNums);
            return;
        }

        if (typeof ProgressInfoCallback !== 'undefined') {
            ProgressInfoCallback(begin);
        }

        var EndOfPart = Math.min(begin + 1000, end);

        console.log("begin: " + begin + " endPart: " + EndOfPart);

        for (i = begin; i < EndOfPart; i++) {
            if (PrimeTest(i))
                PrimeNums.push(i);
        }

        if (EndOfPart == end)
            doneCallback(PrimeNums);
        else
            // PrimeScanPart()
            setTimeout(PrimeScanPart2, 0, MonitorPrimScan, PrimeNums, begin + 1000, end, doneCallback, ProgressInfoCallback);

    } catch (err) {
        console.log("PrimeScanPart2 ist abgestürtzt: " + err);
    }
}


