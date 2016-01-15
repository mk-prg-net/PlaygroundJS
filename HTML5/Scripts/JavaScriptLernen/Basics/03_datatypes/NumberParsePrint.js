//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 13.5.2015
//
//  Projekt.......: HTML5
//  Name..........: b04__NumberParsePrint.js
//  Aufgabe/Fkt...: Nummerische Werte aus Zeichenketten einlesen bzw. als Zeichenketten ausgeben
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

function NumberParsePrint() {

    console.log("NumberParsePrint");

    var dbl_from_string = parseFloat("3.14e3");
    var dbl_from_string2 = parseFloat("3,14e3");
    console.assert(dbl_from_string === 3.14e3, ErrMsgFalseAssertion('dbl_from_string === 3.14e3'));
    

    var int_from_string = parseInt("A6", 16);
    var int_from_string2 = parseInt("6A3");
    var int_from_string3 = parseInt("6 A3");
    var int_from_string2 = parseInt(" 6 A3");
    console.assert(int_from_string === 166, ErrMsgFalseAssertion('int_from_string === 166'));

    var int_from_binstring = parseInt("1001", 2);

    var int_from_17string = parseInt("G0", 17);


    // Ausgaben
    var SpeedOfLight = 299792458.0; // m/s

    // Weg, den das Licht in 1 ns zurücklegt (Taktperiode bei einem GHz)
    var LightPathLength1ns = SpeedOfLight * 1e-9;

    // Exponentialschreibweise: Parameter= Anzahl der Nachkommastellen
    var txtExpo = LightPathLength1ns.toExponential(4) + " m";
    console.assert(txtExpo === "2.9979e-1 m", ErrMsgFalseAssertion('txtExpo === "2.9979e-1 m"'));

    // Mit festgelegter Anzahl von Nachkommastellen. Parameter = Anzahl von Nachkommastellen 
    var txtFixed = LightPathLength1ns.toFixed(4) + " m";
    console.assert(txtFixed === "0.2998 m", ErrMsgFalseAssertion('txtFixed === "0.2998 m"'));

    // Mit festgelegter Gesamtzahl an Stellen
    var txtPrec4 = LightPathLength1ns.toPrecision(4) + " m";
    console.assert(txtPrec4 === "0.2998 m", ErrMsgFalseAssertion('txtPrec4 === "0.300 m"'));

    // Mit festgelegter Anzahl von Nachkommastellen. Parameter = Anzahl von Nachkommastellen 
    var txtFixed = SpeedOfLight.toFixed(4) + " m/s";
    console.assert(txtFixed === "299792458.0000 m/s", ErrMsgFalseAssertion('txtFixed === "299792458.0000 m/"'));

    // Mit festgelegter Gesamtzahl an Stellen
    var txtPrec4 = SpeedOfLight.toPrecision(4) + " m/s";
    console.assert(txtPrec4 === "2.998e+8 m/s", ErrMsgFalseAssertion('txtPrec4 === "2.998e8 m/s"'));

    var txtPrec5 = SpeedOfLight.toPrecision(4);

    var Prec5 = 0 + txtPrec5;


    console.log("NumberParsePrint End");

}