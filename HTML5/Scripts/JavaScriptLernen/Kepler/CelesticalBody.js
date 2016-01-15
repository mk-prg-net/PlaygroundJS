
//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 28.6.2015
//
//  Projekt.......: HTML5
//  Name..........: CelesticalBody.js
//  Aufgabe/Fkt...: Proltotyp aller Objekte des Sonnensystems
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


(function () {

    var ns = GetNamespaceMkoKepler();

    // Konstruktor 
    ns.CelesticalBody = function (name, mass_in_kg) {

        // Sicherstellen, das Aufruf des Konstruktors über new- Operator erfolgte 
        if (!(this instanceof ns.CelesticalBody)) {
            return new ns.CelesticalBody(name, mass_in_kg);
        } else {
            this.name = name;
            this.mass_in_kg = mass_in_kg;
        }
    }


})();
