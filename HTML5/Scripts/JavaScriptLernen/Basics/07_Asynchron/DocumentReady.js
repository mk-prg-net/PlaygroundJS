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

CancellationToken = mko.algo.CreateCancellationToken();

jQuery(document).ready(function () {

    jQuery("#Stop").click(function () {
        CancellationToken.stop = true;
    })

    jQuery("#StartPrimscan").click(function () {

        var begin = parseInt(jQuery("#begin").val());
        var end = parseInt(jQuery("#end").val());

        // Arbeitsaufwand berchenen, und das Progressmeter damit initialisieren
        var workload = end - begin;
        jQuery("#ProgressMeter").attr("min", "0");
        jQuery("#ProgressMeter").attr("max", workload.toString());

        // Alte Ergebnisse löschen
        jQuery("#result").val("");

        // Alte Fehlermeldungen löschen und Fehleranzeige verstecken
        jQuery("#ErrMsg").empty().toggle(false);
        jQuery("#result").empty();

        CancellationToken = mko.algo.PrimScan(begin, end,
            // Callback für die Verarbeitung der Ergebnisse
            function (CancellationToken, PrimList) {
                //jQuery("#ProgressInfo").val(PrimList.length);
                jQuery("#result").append(PrimList.join(", "));

                // Hintereinandrschalten einer weiteren async Methode
                mko.algo.PredSuccRatio(PrimList,

                    function (CancellationToken, PredSucc) {
                        jQuery("#result").append(PredSucc.join(", "));
                    },
                    function (err) {
                        jQuery('#ErrMsg').append(err).toggle(true);
                    },
                    function (beginPart) {
                        jQuery("#ProgressInfo").val(beginPart);
                        jQuery("#ProgressMeter").val(beginPart);
                    }
                    );

            },

            // Callback für Behandlung von Fehlern
            function (err) {
                jQuery('#ErrMsg').append(err).toggle(true);
            },

            // Callback für die Anzeige des Arbeitsfortschrittes
            function (beginPart) {
                jQuery("#ProgressInfo").val(beginPart);
                jQuery("#ProgressMeter").val(beginPart);
            });

    });

});

