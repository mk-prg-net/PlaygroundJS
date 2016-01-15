//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 13.5.2015
//
//  Projekt.......: HTML5
//  Name..........: b04__StringOperators.js
//  Aufgabe/Fkt...: Demo Zeichenkettenoperatoren
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


function StringOperatoren() {


    // Achtung: repeat funktioniert in IE X nicht. Erst ab Edge. In Chrome und Firefox kein Problem
    var Eingabe = "  \n\t \r\f    3,142" + " ".repeat(12);

    Eingabe = eatWhiteSpace(Eingabe);
    console.log(Eingabe === "3,142      ");

    // Einlesen als Number
    var PI = parseFloat(Eingabe);
    console.assert(PI === 3.142, "Einlesen von PI wegen , gescheitert");

    // Gegenmaßnahme: Wandele gnadenlos Komma in Punkt um
    // Funktionale Prog: Eingabe wird auf geänderte Ausgabe abgebildet
    Eingabe= Eingabe.replace(',', '.');

    PI = parseFloat(Eingabe);
    console.assert(PI === 3.142, "Nun ist aber was faul !");

    // 


}

function eatWhiteSpace(inString) {
    // Entfernt alle führenden Leerraumzeichen im übergeben String
    return inString.replace(/^\s+/, "");
}
