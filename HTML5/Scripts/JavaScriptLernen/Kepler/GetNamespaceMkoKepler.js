
//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 28.6.2015
//
//  Projekt.......: HTML5
//  Name..........: GetNamespaceMkoKepler.js
//  Aufgabe/Fkt...: Namensraum einer Bibliothek, die Objekte des 
//                  Sonnensystems auf JavaScript- Objkete abbildet
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


function GetNamespaceMkoKepler() {

    if (typeof mko !== 'undefined') { } else { mko = {} }
    if ("kepler" in mko) { } else { mko.kepler = {} }

    return mko.kepler;
}