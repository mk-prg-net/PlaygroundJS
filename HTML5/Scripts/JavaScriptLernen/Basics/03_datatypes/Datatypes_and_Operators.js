//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 12.5.2015
//
//  Projekt.......: HTML5
//  Name..........: b04_Datatypes.js
//  Aufgabe/Fkt...: Elementare Datentypen
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


function ErrMsgWrongTypeAssumption(value, WrongTypeAssumption) {
    return value.toString() + " ist kein " + WrongTypeAssumption + " sondern " + typeof value;
}


function Datatypes() {

    console.log("Datatypes");

    // == Prüfung auf Gleichheit bezüglich des Wertes (um Vergleich durchzuführen, erfolgen wenn notwendig automatische Typkonversionen)
    console.assert(1.0 == "1.0");

    // === Prüfung auf Gleichheit bezüglich Wert und Typ
    console.assert(!(1.0 === "1.0"));

    // Typinformation kann zur Laufzeit abgerufen werden mittels typeof-Operator:
    console.assert(typeof true === "boolean", ErrMsgWrongTypeAssumption(true, "boolean"));
    console.assert(typeof 1.0 === "number", ErrMsgWrongTypeAssumption(1.0, "number"));
    console.assert(typeof 1 === "number", ErrMsgWrongTypeAssumption(1, "number"));
    console.assert(typeof NaN === "number", ErrMsgWrongTypeAssumption(NaN, "number"));
    console.assert(typeof "Hallo" === "string", ErrMsgWrongTypeAssumption("Hallo", "string"));
    console.assert(typeof [1, 2, 3] === "array", ErrMsgWrongTypeAssumption([1, 2, 3], "array"));
    console.assert(typeof [1, 2, 3] === "object", ErrMsgWrongTypeAssumption([1, 2, 3], "object"));
    console.assert(typeof { X: 1, Y: 2 } === "object", ErrMsgWrongTypeAssumption({ X: 1, Y: 2 }, "object"));

    // Variablen, die noch nicht definiert wurden, liefern undefined
    console.assert(typeof wer_bin_ich === "undefined", ErrMsgFalseAssertion('typeof wer_bin_ich === "undefined"'));

    // Best Practise: Sicherstellen, ob eine Variable deklariert ist: typsichere Vergleich auf not undefined
    if (typeof wer_bin_ich !== "undefined") {
        // wer_bin_ich existiert!
        var prot = wer_bin_ich * 10;
    } else {
        wer_bin_ich = 99;
        var prot = wer_bin_ich * 10;
    }

    // Variablen, denen kein Wert zugewiesen wurden, sind im Zustand undefiniert
    var wer_bin_ich;
    console.assert(typeof wer_bin_ich === "undefined", ErrMsgFalseAssertion('typeof wer_bin_ich === "undefined"'));

    // Der zugewiesene Wert bestimmt den Datentyp- wird auch werbetechnisch "dynamisch typisiert" bezeichntes
    // (früher hätte man von untypisiert gesprochen)
    wer_bin_ich = "jetzt eine String- Variable";
    console.assert(typeof wer_bin_ich === "string", ErrMsgFalseAssertion('typeof wer_bin_ich === "string"'));

    // Speicherplatz einer Variable wieder freigeben durch Zuweisen von undefined
    wer_bin_ich = undefined;
    console.assert(typeof wer_bin_ich === "undefined", ErrMsgFalseAssertion('typeof wer_bin_ich === "undefined"'));

    // Die grundlegenden Datentypen sind:

    // Boolean: Wert von Aussagen
    var ich_fahre_bahn = true;

    // so funktioniert es auch, sollte aber vermieden werden
    var ich_habe_einen_Fahrschein = new Boolean(false);
    console.assert(typeof ich_fahre_bahn === "boolean", ErrMsgFalseAssertion('(typeof ich_fahre_bahn === "boolean"'));

    // Number: Gleitpunktzahlen, 64 bit
    var DistanceEarthSun = 1.496e8;

    // so funktioniert es auch, sollte aber vermieden werden
    var DistanceErthMoon = new Number(300000);
    console.assert(typeof DistanceEarthSun === "number", ErrMsgFalseAssertion('typeof DistanceEarthSun === "number"'));

    // Im Namespace Number ist der Wertebereich von Number definiert
    console.log("Number Min: " + Number.MIN_VALUE + " Max: " + Number.MAX_VALUE);

   
    // Integers werden ebenfalls durch 64- Bit Gleitpunktzahlen dargestellt. Es erfolgt jedoch keine Rundung der Nachkommastellen
    var permutationen = 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10 * 11 * 12;
    console.assert(typeof permutationen === "number", ErrMsgFalseAssertion('typeof permutationen === "number"'));

    // Integers können auch als Hex- Zahlen notiert werden:
    var address = 0x0000FF13;
    console.assert(address === 65299, ErrMsgFalseAssertion('address === 65299'));

    // String: Zeichenketten
    var InputMoons = "Callisto, Io, Ganymede, Europa";
    var InputPlanets = "";
    console.assert(typeof InputMoons === "string", ErrMsgFalseAssertion('typeof InputMoons === "string"')); 

    // Array: Liste
    var MoonsOfJupiter = ["Callisto", "Io", "Ganymede", "Europa"];

    // Auch bei Arrays gilt: die Initialisierung mittels Literal dem Konstruktor
    // bevorzugen
    var Trabanten_der_Sonne = new Array("Merkur", "Venus");
    var Sterne_der_galaxie = [];
    console.assert(typeof MoonsOfJupiter === "object", ErrMsgFalseAssertion('typeof MoonsOfJupiter === "object"'));
    
    // Object
    var Jupiter = { Name: "Jupiter", Moons: ["Callisto", "Io", "Ganymede", "Europa"] };
    console.assert(typeof Jupiter === "object", ErrMsgFalseAssertion('typeof Jupiter === "object"'));

    // undefiniertes Objekt
    var Uranus = null;
    var typename = typeof Uranus;

    var Pluto;
    typename = typeof Pluto;

    console.log("Datatypes End");

}







