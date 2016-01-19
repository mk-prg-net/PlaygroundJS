//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 27.6.2015
//
//  Projekt.......: HTML5
//  Name..........: ArrayLisp.js
//  Aufgabe/Fkt...: Funktionales Programmieren auf Arrays
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


function ArrayLisp() {

    debugger;

    var Planeten = ["Merkur", "Venus", "Erde", "Mars", "Jupiter", "Saturn", "Uranus", "Neptun"];

    // Funktionale Programmierung mittels Iterationsmethoden

    console.log("Array mit forEach auflisten");
    Planeten.forEach(function (val) {
        // funktionsrumpf vom Callback
        console.log(val);
    });

    console.log("Funktionale Abbildung eines Array mittels map auf ein Bild");
    var PlaneteGross = Planeten.map(function (val) {
        return val.toUpperCase();
    });


    console.log('Alle Planetennamen, die mit "M" beginnen, herausfiltern');
    var PlantennamenMitMBeginnend = Planeten.filter(function (Planetenname) {
        return Planetenname.length > 0 && Planetenname.toLowerCase()[0] == 'm';
    });


    var PlanetenGross2 = [];
    Planeten.forEach(function (val) {
        // funktionsrumpf vom Callback
        PlanetenGross2.push(val.toUpperCase());
    });


    var PlanetenlisteTxt = Planeten.join("; ");

    var NameMit6Zeichen = Planeten.find(function (p) { return p.length === 6 });

}
