//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 28.6.2015
//
//  Projekt.......: HTML5
//  Name..........: Length.Centimeter.js
//  Aufgabe/Fkt...: Längenmesswerte in der Einheit Centimeter darstellen
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

define(["./OrderOfMagnitudes", "./Length"], function (OrderOfMagnitude, Length) {

    var Centimeter = function (Value) {

        if(!(this instanceof Centimeter)){
            return new Centimeter(Value); 
        }

        // Konstruktor der Basisklasse aufrufen
        Length.call(this, OrderOfMagnitude.Centi, Value);
    }

    // Leeres Objekt der Length- Klasse als Prototyp anlegen und als neuen Prototyp 
    // von Centimeter definieren. So entsteht eine Kette verknüpfter Prototypenobjekte.
    // denn der Prototyp des Length- Objektes ist wiederum Measurement.
    Centimeter.prototype = Object.create(Length.prototype); //new ns.Length();

    // Einstellen des Konstruktor im neu erstellten Prototypenobjekt
    Centimeter.prototype.constructor = Centimeter;

    // Erstellt ein Centimetermaß aus einer anderen Längeneinheit
    Centimeter.prototype.From = function (otherLengthMeasurement) {

        var cm = new Centimeter(OrderOfMagnitude.FromTo(
            otherLengthMeasurement.OofM,
            OrderOfMagnitude.Centi,
            otherLengthMeasurement.Value));
        return cm;
    }

    return Centimeter;
});