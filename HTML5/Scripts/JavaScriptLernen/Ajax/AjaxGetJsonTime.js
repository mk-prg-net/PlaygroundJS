//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 11.6.2015
//
//  Projekt.......: HTML5
//  Name..........: AjaxGetJsonTime.js
//  Aufgabe/Fkt...: Abruf von Daten via Ajax und JSON
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


function AjaxGetJsonTime() {

    // Cache Abschalten, da sonst nur der 1. Aufruf funkt
    $.ajaxSetup({
        // Disable caching of AJAX responses
        cache: false
    });


    // 1. Actionlink bestimmen
    var url = $("#ZiffernblattJson").attr("data-websrv-url");


    $.ajax({
        type: "GET",
        //dataType: "json",
        url: url //,
        //data: ""
    }).done(function (Data, status, req) {

        // Es hat geklappt
        console.log(Data.toString());
        var TimeObj = JSON.parse(Data);
        // var TimeObj = Data;

        $("#ZiffernblattJson").html('<span class="glyphicon glyphicon-time"></span>&nbsp;<time datetime="' + TimeObj.TimeRobo + '">' + TimeObj.TimeInfo + '</time>');       

    }).fail(function (jqXHR, textStatus, errorThrown) {

        // Leider ein Fehler
        console.log(jqXHR.status.toString());
    });



}