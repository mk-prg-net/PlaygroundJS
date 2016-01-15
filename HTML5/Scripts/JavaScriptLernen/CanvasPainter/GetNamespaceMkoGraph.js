//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 27.5.2015
//
//  Projekt.......: HTML5
//  Name..........: GetNamespaceMkoAlgo.js
//  Aufgabe/Fkt...: Erstellt den Namensraum mko.graph, falls noch nicht vorhanden
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

function GetNamespaceMkoGraph() {

    if (typeof mko !== 'undefined') { } else { mko = {} }
    if ("graph" in mko) { } else { mko.graph = {} }

    if ('toRad' in mko.graph) {}
    else{
        mko.graph.toRad = function(Angle) {
            return Math.PI * Angle / 180.0;
        }
    }

    return mko.graph;
}