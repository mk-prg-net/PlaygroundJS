//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 20.1.2022
//
//  Projekt.......: HTML5
//  Name..........: AjaxAutocomplete.js
//  Aufgabe/Fkt...: Implementiert eine Autocomplete- Box mit Ajax
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

// Liefert zu einem gegebenen Prefix eine Liste von Erweiterungsvorschlägen
function AjaxAutoCompleteGetProposals(prefix) {

    "use strict";
    //debugger;

    // Cache Abschalten, da sonst nur der 1. Aufruf funkt
    $.ajaxSetup({
        // Disable caching of AJAX responses
        cache: false
    });

    // 1. Actionlink bestimmen
    var url = $("#Autocomplete").attr("data-websrv-url");

    if (prefix) {
        $("#AutocompleteProposalBoxes").load(url + "?pre=" + prefix);    
    }
}

function AutoCompleteInit() {

    // Laden des Textes
    $("#AutocompleteText").keyup(function () {
        var prefix = $("#AutocompleteText").text().trim().replace(" ", "_");
        AjaxAutoCompleteGetProposals(prefix);
    });

}

//$(document).ready(function () {

//    AutoCompleteInit();

//});