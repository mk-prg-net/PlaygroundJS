//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 27.6.2015
//
//  Projekt.......: HTML5
//  Name..........: funcobject.js
//  Aufgabe/Fkt...: Funktionen als Objekte
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

function funcobject_test() {

    function toRad(deg) {
        return deg * Math.PI / 180.0;
    }

    function polar_to_cartesian(phi, r) {

        // Eigenschaften des Funktionsobjektes abrufen
        console.log("polar_to_cartesian wurde aufgerufen von" + polar_to_cartesian.caller.name);
        console.log("polar_to_cartesian.name: " + polar_to_cartesian.name);

        // Anzahl der formal in der Parameterliste definierten Parameter
        console.log("polar_to_cartesian.length: " + polar_to_cartesian.length);

        // Anzahl der tatsächlich übergebenen Parameter
        console.log("polar_to_cartesian.arguments.length: " + arguments.length);
        
        console.log("aktuelle Parameter von arguments:")
        for (var i = 0; i < arguments.length; i++) {
            console.log(arguments[i].toString());
        }

        return { x: r * Math.cos(phi), y: r * Math.sin(phi) };
    }

    // Die Namenseigenschaft kann nur in Google Chrome erfolgreich abgerufen werden.
    var name = polar_to_cartesian.name;

    // toString liefert vollständiges Skript
    var str = polar_to_cartesian.toString();

    // Die arguments- Eigenschaft wird erst im Rahmen eines Funktionsaufrufes initialisiert
    console.assert(polar_to_cartesian.arguments == null);

    // Anzahl der Parameter in der Funktionsdeklaration. Tatsächlich kann die 
    // Anzahl der übergebenen Parameter davon abweichen 
    var anzParam = polar_to_cartesian.length;
    console.assert(anzParam === 2);

    var posPlane = polar_to_cartesian(Math.PI / 4, 10000);

    var posPlane2 = polar_to_cartesian(Math.PI / 4, 10000, "Hallo Flugzeug");

    

}