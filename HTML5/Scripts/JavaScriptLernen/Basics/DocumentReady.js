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

    if (typeof jQuery("#b01_loging") != undefined)
        jQuery("#b01_loging").click(DemoConsole);

    if (typeof jQuery("#b02_Names_Literals_and_Blocks") != undefined)
        jQuery("b02_Names_Literals_and_Blocks").click(NameLiteralsBlocks);

    if (typeof jQuery("#b03_global_vs_local") != undefined)
        jQuery("b03_global_vs_local").click(GlobalVsLocal);

    if (typeof jQuery("#b04_Datatypes_and_Operators") != undefined)
        jQuery("#b04_Datatypes_and_Operators").click(Datatypes);

    if (typeof jQuery("#b05_ControlBlocks") != undefined)
        jQuery("#b05_ControlBlocks").click(Branches);

    // 
    jQuery("#StartBasics").click(function (e) {


        Intro();


        Kontrollstrukturen();

        Arrays();

        Funktional();

        OO();

        var guthabenentwicklung = sparen(1000, 3, 10);

        jQuery('#Buchungsliste > tbody:last').children().remove();

        guthabenentwicklung.forEach(function (Buchung) {

            jQuery('#Buchungsliste > tbody:last').append('<tr><td>' + Buchung.Jahr + '</td><td>' + Buchung.Guthaben.toFixed(2) + '</td><td>' + Buchung.Zinsertrag.toFixed(2) + '</td><td>' + Buchung.NeuesGuthaben.toFixed(2) + '</td></tr>')
        });

        //alert("Bin fertig");
    });


    // Eventhandler am Button "römisch in arabisch" registrieren
    jQuery("#StartRomToArab").click(function (event) {

        var romzahl = jQuery("#romzahl").val();

        var arabzahl = mko.algo.RomToArab(romzahl);

        if (isNaN(arabzahl))
            jQuery("#arabzahl").val("ungültige Romzahl");
        else
            jQuery("#arabzahl").text("" + arabzahl);

    });

});

