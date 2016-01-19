
//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 25.6.15
//
//  Projekt.......: HTML5
//  Name..........: create_functions.js
//  Aufgabe/Fkt...: Erzeugungsmuster für JavaScript- Funktionen.
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

function create_functions_test() {

    // Funktionen können innerhalb von Funktionen deklariert werden. Ihre Namen sind 
    // dann nur innerhalb der umschließenden Funktion gültig.

    // Bei der Deklaration einer Funktion wird unterschieden in: 

    // Funktionsanweisung (benannter Funktionsblock) U: D -> Pi*D
    function Ucirc(D) {
        return Math.PI * D;
    }

    // Funktionsausdruck (Zuweisen eines mittels Funktionsanweisung instanziierten Funktionsobjekts 
    // an eine Variable)
    // Parser: function AreaCircel(D) -> new AreaCircleD(...)
    var Acirc = function AreaCircle(D) {
        return Math.PI * D * D / 4.0;
    }

    //var flaecheninhalt = AreaCircle(10);

    // Funktionsausdruck mit anonymer Funktion:
    // Parser vergibt einen automat. generierten Namen dem Funktionsobjekt
    var Arect = function (a, b) {
        return a * b;
    }

    // Aufzählungstyp wird emuliert
    // (bekant aus C++, C# als enum)
    var LengthUnits = {
        mm: 0.001,
        cm: 0.01,
        m: 1,
        km: 1000
    };

    // Eine Fabrikmethode für Funktionsobjekte zur Umrechnung von Längeneinheiten in die Basiseinheit Meter
    function Length(Unit) {
        // Rückgabe eines Funktionsobjektes, das einen Wert, gemessen in einer Einheit, in die Basiseinheit umrechnet zurückgibt.
        return function (l_in_unit) {
            return Unit * l_in_unit;
        }
    }

    // ... jezt können wir passende Umrechnungsmethoden erzeugen
    var Millimeter = Length(LengthUnits.mm);
    var Centimeter = Length(LengthUnits.cm);
    var Meter = Length(LengthUnits.m);
    var KilometerInMeter = Length(LengthUnits.km);

    var WegHotelSchulungInMeter = KilometerInMeter(11.3);

    function toRad(deg) {
        return deg * Math.PI / 180.0;
    }

    function polar_to_cartesian(phi, r) {
        return { x: r * Math.cos(phi), y: r * Math.sin(phi) };
    }



    var Einheitskreisumfang = Ucirc(2);
    var Einheitskreisflaeche = Acirc(2);
    var Rechteckflaeche = Arect(2, 5);

    var Weglaenge = Centimeter(125) + Meter(0.5) + Millimeter(1750);
    var Weglaenge2 = Length(LengthUnits.cm)(125);
    var Weglaenge3 = Length(LengthUnits.cm)(125) + Meter(0.5) + Millimeter(1750);

    // Komposition
    var Flugzeugposition = polar_to_cartesian(toRad(45), 14142.135623);

}