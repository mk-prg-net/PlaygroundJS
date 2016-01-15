//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 27.5.2015
//
//  Projekt.......: HTML5
//  Name..........: GetNamespaceMkoAlgo.js
//  Aufgabe/Fkt...: Erstellt den Namensraum mko.algo, falls noch nicht vorhanden
//                  
//
//
//
//
//<unit_environment>
//------------------------------------------------------------------
//  Zielmaschine..: WebBrowser HTML5
//  Werkzeuge.....: Visual Studio 2012
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

function GetNamespaceMkoAlgo() {

    if (typeof mko !== 'undefined') { } else { mko = {} }
    if ("algo" in mko) { } else { mko.algo = {} }

    return mko.algo;
}