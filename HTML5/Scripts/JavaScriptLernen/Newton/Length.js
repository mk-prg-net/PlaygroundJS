//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 2011, 12
//
//  Projekt.......: mko.Newton
//  Name..........: Distance.js
//  Aufgabe/Fkt...: Abstands/Längenmaße
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
//  Datum.........: 15.6.2015
//  Änderungen....: Portierung nach JAvaScript
//
//</unit_history>
//</unit_header>        

(function () {

    var ns = GetNamespaceMkoNewton();

    var LengthBaseUnitSymbol = "m";

    ns.Length = function (OofM, Value) {
        if(!(this instanceof ns.Length)){
            return new ns.Length(OofM, Value); 
        }

        //  Mittels Konstruktor der Basisklasse wird Objekt mit
        //  eigenschaften und Instanzmethoden der Bamsisklasse 
        //  konfiguriert
        ns.Measurement.call(this, OofM, LengthBaseUnitSymbol, Value);
    }

    ns.Length.prototype = Object.create(ns.Measurement.prototype); // new ns.Measurement();
    //ns.Length.prototype.__proto__ = ns.Measurement.prototype;
    ns.Length.prototype.constructor = ns.Length;

})();