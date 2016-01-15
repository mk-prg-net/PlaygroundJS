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

    jQuery("#b05_create_functions").click(create_functions_test);

    jQuery("#b05_funcobject_test").click(funcobject_test);


    jQuery("#b05_closures").click(ClosureTest);

    jQuery("#b05_variadic").click(VariadicTest);

    jQuery("#b05_currying").click(currying_test);

    jQuery("#b05_call").click(call_test);

    jQuery("#b05_array_lisp").click(ArrayLisp);


});

