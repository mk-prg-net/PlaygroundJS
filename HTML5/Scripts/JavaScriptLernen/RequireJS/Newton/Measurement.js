
//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 28.6.2015
//
//  Projekt.......: HTML5
//  Name..........: Measurement.js
//  Aufgabe/Fkt...: Basisklasse von Messwerten
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
//  Datum.........: 21.9.2015
//  Änderungen....: Getter der Eigenschaft Unit von Unit in GetUnit umbenannt
//
//</unit_history>
//</unit_header>        

define(["./OrderOfMagnitudes"], function (OrderOfMagnitude) {

    // Konstruktor für einen Messwert
    // Parameter: OrderofMag, unitSymbol, Value
    var Measurement = function (OofM, UnitSymbol, Value) {

        // Sicherstellen, das MeasuredValue über new aufgerufen wurde
        if (!(this instanceof Measurement)) {
            return new Measurement(OofM, UnitSymbol, Value);
        }

        this.OofM = OofM;
        this.UnitSymbol = UnitSymbol;
        this.Value = Value;
    }

    Measurement.prototype.GetUnit = function () {
        return this.OofM.Symbol + this.UnitSymbol;
    }

    // Ausgabe des Messwertes als Zeichenkette der Form (mx, my, ..., mz)[Unit] 
    Measurement.prototype.toString = function (accuracy) {

        if (accuracy) {
            return this.Value.toFixed(accuracy) + " [" + this.GetUnit() + "]";;
        } else {
            return this.Value.toString() + " [" + this.GetUnit() + "]";;
        }
    }

    return Measurement;

});