//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 11.6.2015
//
//  Projekt.......: HTML5
//  Name..........: AjaxPArtialView.js
//  Aufgabe/Fkt...: Lädt vom Server eine partielle View und bettet sie im DOM ein
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

function AjaxPartialView() {

    // Cache Abschalten, da sonst nur der 1. Aufruf funkt
    $.ajaxSetup({
        // Disable caching of AJAX responses
        cache: false
    });

    // 1. Actionlink bestimmen
    var url = $("#Ziffernblatt").attr("data-websrv-url");

    $("#Ziffernblatt").load(url);

}