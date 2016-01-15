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


//jQuery.noConflict();

$(document).ready(function () {

    jQuery("#btnTranslate").click(function () {

        // Selektierten Wert in der Drop-Down- Liste abrufen
        var SrcCult = $("#SrcCult Option:selected").attr("value");
        var SrcNum = $("#SrcNumber").val();
        var SrcDate = $("#SrcDate").val();

        var DestCult = $("#DestCult Option:selected").attr("value");

        TranslateNumber(
            SrcCult,
            DestCult,
            SrcNum,
            SrcDate,
            function (DestNum, DestDate) {
                $("#DestNumber").val(DestNum);
                $("#DestDate").val(DestDate);
            });

    });

});

