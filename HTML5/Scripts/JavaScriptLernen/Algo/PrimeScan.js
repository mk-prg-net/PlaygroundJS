
//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 25.5.2015
//
//  Projekt.......: HTML5
//  Name..........: PrimeScan.js
//  Aufgabe/Fkt...: Implementierung eines Primzahlscanners in JavasScript
//                  
//
//
//
//
//<unit_environment>
//------------------------------------------------------------------
//  Zielmaschine..: PC 
//  Betriebssystem: Windows 7 mit .NET 4.5
//  Werkzeuge.....: Visual Studio 2013
//  Autor.........: Martin Korneffel (mko)
//  Version 1.0...: 
//
// </unit_environment>
//
//<unit_history>
//------------------------------------------------------------------
//
//  Version.......: 1.1
//  Autor.........: Martin Korneffel (mko)
//  Datum.........: 
//  Änderungen....: 
//
//</unit_history>
//</unit_header>   


MonitorPrimScan = true;

PrimeTest = function (candidate) {

    var primefactor = 2;
    // 1 von den Primzahlen ausschließen, da neutrales Element bezüglich Multiplikation
    if (candidate === 1) return false;

    // Prüfen gegen die Liste der allgemein bekannten Primzahlen
    if ([2, 3, 5, 7, 11, 13, 17, 19].indexOf(candidate) > -1)
        return true;

    // Prüfen auf mögliche Teiler
    while (primefactor * primefactor < candidate && candidate % primefactor != 0)
    {
        primefactor++;
    }

    if (primefactor * primefactor > candidate)
        return true;
    else
        return false;
}

// doneCallback(PrimNums[])
// ProgressInfoCallback(Anzahl bereits gefundener)
PrimeScan = function (begin, end, doneCallback, ProgressInfoCallback) {
    var PrimeNums = [];
    MonitorPrimScan = true;
    PrimeScanPart(PrimeNums, begin, end, doneCallback, ProgressInfoCallback);
}


PrimeScanPart = function (PrimeNums, begin, end, doneCallback, ProgressInfoCallback) {

    if (!MonitorPrimScan)
        doneCallback(PrimeNums);

    if (typeof ProgressInfoCallback !== 'undefined') {
        ProgressInfoCallback(begin);
    }

    var EndOfPart = Math.min(begin + 1000, end);
    for (i = begin; i < EndOfPart; i++) {
        if (PrimeTest(i))
            PrimeNums.push(i);
    }

    if (EndOfPart == end)
        doneCallback(PrimeNums);
    else
        // PrimeScanPart()
        setTimeout(PrimeScanPart, 0,PrimeNums, begin + 1000, end, doneCallback, ProgressInfoCallback);
}


