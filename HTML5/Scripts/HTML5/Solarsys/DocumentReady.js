//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 8.6.2015
//
//  Projekt.......: HTML5
//  Name..........: DocumentReady.js
//  Aufgabe/Fkt...: Initialisieren des Solarsys- Verzeichnisses
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

$(document).ready(function () {

    // Liste aller Sonnenabstände
    var DistSun = [];

    // 1. Alle Sonnenabstände einlesen
    $("meter[title=DistSun]").each(function () {
        var valTxt = $(this).attr("value");
        DistSun.push(parseFloat(valTxt));
    });

    // 2. Minimum und Maximum der Sonnenabstände berechnen
    var minDist = Number.MAX_VALUE;
    var maxDist = 0.0;
    DistSun.forEach(function (val) {
        minDist = Math.min(minDist, val);
        maxDist = Math.max(maxDist, val);
    });

    // 3. Minimum und Maximum der Sonnenabstände in allen meter- Elementen für den Sonnenabstand eintragen
    $("meter[title=DistSun]").attr("min", minDist);
    $("meter[title=DistSun]").attr("max", maxDist);

    // Liste aller Planetendurchmesser
    var D = [];

    // 1. Alle Planetendurchmesser einlesen
    $("meter[title=D]").each(function () {
        var valTxt = $(this).attr("value");
        D.push(parseFloat(valTxt));
    });

    // 2. Minimum und Maximum der Sonnenabstände berechnen
    var minD = Number.MAX_VALUE;
    var maxD = 0.0;
    D.forEach(function (val) {
        minD = Math.min(minD, val);
        maxD = Math.max(maxD, val);
    });

    // 3. Minimum und Maximum der Sonnenabstände in allen meter- Elementen für den Sonnenabstand eintragen
    $("meter[title=D]").attr("min", minD);
    $("meter[title=D]").attr("max", maxD);


});
