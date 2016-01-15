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
    
    jQuery("#b04_ControlBlocks").click(Kontrollstrukturen);

    jQuery("#b04_rekurisve").click(function () {
        var Laufzeit = jQuery("#Laufzeit").val();
        var Guthaben = jQuery("#Guthaben").val();
        var Zinssatz = jQuery("#Zinssatz").val();

        var Ergebnis = GuthabenRecu(Laufzeit, Guthaben, Zinssatz/100.0);

        jQuery("#ErgebnisRekursiv").val(Ergebnis.toFixed(2));

        var guthabenentwicklung = sparen(1000, 3, 10);

        jQuery('#Buchungsliste > tbody:last').children().remove();

        guthabenentwicklung.forEach(function (Buchung) {

            jQuery('#Buchungsliste > tbody:last').append('<tr><td>' + Buchung.Jahr + '</td><td>' + Buchung.Guthaben.toFixed(2) + '</td><td>' + Buchung.Zinsertrag.toFixed(2) + '</td><td>' + Buchung.NeuesGuthaben.toFixed(2) + '</td></tr>')
        });

    });
    
});

