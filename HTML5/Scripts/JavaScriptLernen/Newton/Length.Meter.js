
//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 28.6.2015
//
//  Projekt.......: HTML5
//  Name..........: Length.Meter.js
//  Aufgabe/Fkt...: Längenmesswerte in der Einheit Meter darstellen
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

    var ns = GetNamespaceMkoNewton();

    ns.Meter = function (Value) {

        if(!(this instanceof ns.Meter)){
            return new ns.Meter(Value); 
        }


        ns.Length.call(this, ns.OrderOfMagnitude.One, Value);
    }

    // Leeres Objekt der Length- Klasse als Prototyp anlegen und als neuen Prototyp 
    // von Meter definieren. So entsteht eine Kette verknüpfter Prototypenobjekte.
    // Denn der Prototyp des Length- Objektes ist wiederum Measurement.
    ns.Meter.prototype = Object.create(ns.Length.prototype); //new ns.Length();

    // Einstellen des Konstruktor im neu erstellten Prototypenobjekt
    ns.Meter.prototype.constructor = ns.Meter;

    // Erstellt ein Metermaß aus einer anderen Längeneinheit
    ns.Meter.prototype.From = function(otherLengthMeasurement){

        var meter = new ns.Meter(ns.OrderOfMagnitude.From(otherLengthMeasurement.OofM, otherLengthMeasurement.Value));
        return meter;
    }

})();