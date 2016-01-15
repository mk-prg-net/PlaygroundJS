//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 15.6.2015
//
//  Projekt.......: HTML5
//  Name..........: GetNamespaceMkoThermodyn.js
//  Aufgabe/Fkt...: Liefert den Namensraum für Funktionen zur Berechnung 
//                  hermodynamischer Prozesse wie Wärmeleitung durch Wände etc. 
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

function GetNamespaceMkoThermodyn() {

    if (typeof mko !== 'undefined') { } else { mko = {} }
    if ("thermodyn" in mko) { } else { mko.thermodyn = {} }

    return mko.thermodyn;


};

