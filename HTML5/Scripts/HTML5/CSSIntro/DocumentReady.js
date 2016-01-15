//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 7.6.2015
//
//  Projekt.......: HTML5
//  Name..........: DocumentReady.js
//  Aufgabe/Fkt...: Implementierung einer CSS Sandbox
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

$(document).ready(function () {

    $("#SetStyle").click(function () {

        // 1. Selektor einlesen
        var sel = $("#Selector").val();

        // 2. CSS-Eigenschaftszuweisungen einlesen
        var propSett = $("#PropSett").val().trim();

        // 3. Elemente selektiern und Styleeigenschaft setzen
        $("#sandbox " + sel).attr("style", propSett);

    });

});