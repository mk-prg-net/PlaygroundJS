//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 30.6.2015
//
//  Projekt.......: HTML5
//  Name..........: CreateNamespace.js
//  Aufgabe/Fkt...: Allgemeine Funktion zum Anlegen eines verschchtelten Namespaces
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

// Parameter: root: Wurzelnamespaceobjekt
//            "subNs": Name des Namespaces unterhalb der Wurzel, falls vorhanden
//            "subSubNs":  Name des Namespaces unterhalb des subNs, falls vorhanden usw.
function GetNamespace(rootName) {
    // Sicherstellen der Existenz der root

    var root = null;
    var test = "if (typeof " + rootName + " !== 'undefined') { root = " + rootName + " } else { " + rootName + " = {}; root = " + rootName +" }";
    eval(test);

    var nsPart = root;
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            // Anlegen des Teilnamspaces, falls noch nicht existiert
            if (!(arguments[i] in nsPart))
            {
                nsPart[arguments[i]] = {};
            }
            nsPart = nsPart[arguments[i]];
        }
    }

    return nsPart;

}
