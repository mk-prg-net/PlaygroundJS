//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart 2011,2012, 2015
//
//  Projekt.......: mko.Newton
//  Name..........: OrderOfMagnitude
//  Aufgabe/Fkt...: Tabellen der physikalischen Größenordnungen
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
//  Änderungen....: Portierung nach JavaScript
//
//</unit_history>
//</unit_header>        

define(function () {

    var OMdescriptor = function (sym, factor) {
        return { Symbol: sym, Factor: factor };
    };

    // Tabelle der physikalischen Größenordnungen
    var OrderOfMagnitude =
    {
        self: this,
        Atto: OMdescriptor("a", 1e-18),
        Femto: OMdescriptor("f", 1e-15),
        Pico: OMdescriptor("p", 1e-12),
        Nano: OMdescriptor("n", 1e-9),
        Micro: OMdescriptor("µ", 1e-6),
        Milli: OMdescriptor("m", 1e-3),
        Centi: OMdescriptor("c", 1e-2),
        Deci: OMdescriptor("d", 1e-1),
        One: OMdescriptor("", 1.0),
        Deca: OMdescriptor("da", 10.0),
        Hecto: OMdescriptor("h", 100.0),
        Kilo: OMdescriptor("K", 1000.0),
        Mega: OMdescriptor("M", 1e6),
        Giga: OMdescriptor("G", 1e9),
        Terra: OMdescriptor("T", 1e12),
        Peta: OMdescriptor("P", 1e15),
        Exa: OMdescriptor("E", 1e18),

        // Umrechnungsfunktionen

        // Rechnet in die Größenordnung 1 um 
        toOne: function (FromOofMDescriptor, Value) {
            return FromOofMDescriptor.Factor * Value;
        },

        FromTo: function (FromOofMDescr, ToOofMDescriptor, Value) {
            return Value * FromOofMDescr.Factor / ToOofMDescriptor.Factor;
        }
    };

    return OrderOfMagnitude;

});