//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 13.5.2015
//
//  Projekt.......: HTML5
//  Name..........: DocumentReady.js
//  Aufgabe/Fkt...: Initialisierung von Basics.html
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


jQuery.noConflict();

jQuery(document).ready(function () {
    
    jQuery("#b03_Datatypes_and_Operators").click(Datatypes);
    jQuery("#b03_Undefined_vs_Null").click(Undefined_vs_Null);
    jQuery("#b03_Number_Operators").click(NumberOperators);
    jQuery("#b03_Number_parse_print").click(NumberParsePrint);
    jQuery("#b03_Boolean_Operators").click(BooleanOperators);
    jQuery("#b03_Boolean_Truthiness").click(Boolean_Truthiness);
    jQuery("#b03_Boolean_bitwise").click(Boolean_bitwise);
    jQuery("#b03_StringOps").click(StringOperatoren);
    jQuery("#b03_Arrays").click(Arrays);


});

