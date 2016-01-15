//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 15.6.2015
//
//  Projekt.......: HTML5
//  Name..........: GetNamespaceMkoLisp.js
//  Aufgabe/Fkt...: Liefert den Namensraum für die Funktionen der Listenverarbeitung.
//                  Diese Funktionen kapseln die Arrayfunktionen in einer API,
//                  die klassischen LISP und modernen LINQ entlehnt ist
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

function GetNamespaceMkoLisp() {

    if (typeof mko !== 'undefined') { } else { mko = {} }
    if ("lisp" in mko) { } else { mko.lisp = {} }

    return mko.lisp;


};

