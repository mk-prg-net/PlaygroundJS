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


// Kapsleung der HTML5 Validierungs API
function IsValidInput(inputEl_IDSelektor) {

    // Zugriff auf das Inputelement mittels id über jQuery
    // get liefert das originale Dom- Element
    var inputEl = jQuery(inputEl_IDSelektor).get(0);
    if (inputEl) {
        return inputEl.validity.valid;
    }
    else {
        return false;
    }
}

function PrintValidationError(inputEl_IDSelektor) {

    // Zugriff auf das Inputelement mittels id über jQuery
    var inputEl = jQuery(inputEl_IDSelektor).get(0);
    jQuery("#ErrMsg").append(inputEl.validationMessage).toggle(true);



}

//jQuery.noConflict();



jQuery(document).ready(function () {


    //jQuery.when(
    //    jQuery.get("/Scripts/cldr/de/numbers.json"),
    //    jQuery.get("/Scripts/cldr/de-CH/numbers.json"),
    //    jQuery.get("/Scripts/cldr/en-US-POSIX/numbers.json"),

    //    jQuery.get("/Scripts/cldr/de/dateFields.json"),
    //    jQuery.get("/Scripts/cldr/de-CH/dateFields.json"),
    //    jQuery.get("/Scripts/cldr/en-US-POSIX/dateFields.json"),

    //    jQuery.get("/Scripts/cldr/de/ca-gregorian.json"),
    //    jQuery.get("/Scripts/cldr/de-CH/ca-gregorian.json"),
    //    jQuery.get("/Scripts/cldr/en-US-POSIX/ca-gregorian.json"),

    //    jQuery.get("/Scripts/cldr/de/timeZoneNames.json"),
    //    jQuery.get("/Scripts/cldr/de-CH/timeZoneNames.json"),
    //    jQuery.get("/Scripts/cldr/en-US-POSIX/timeZoneNames.json"),

    //    jQuery.get("/Scripts/cldr/supplemental/likelySubtags.json"),
    //    jQuery.get("/Scripts/cldr/supplemental/timeData.json"),
    //    jQuery.get("/Scripts/cldr/supplemental/weekData.json"),
    //    jQuery.get("/Scripts/cldr/supplemental/numberingSystems.json"),
    //    jQuery.get("/Scripts/cldr/supplemental/ordinals.json"),
    //    jQuery.get("/Scripts/cldr/supplemental/plurals.json")

    //).then(function () {
    //    // done:
    //    // Normalize jQuery.get results, we only need the JSON, not the request statuses.
    //    return [].slice.apply(arguments, [0]).map(function (result) {
    //        return result[0];
    //    });
    //},
    //    // fail:
    //    function () {
    //        alert("funkt nicht...");
    //    }
    //).then(Globalize.load).then(function () {

        // Jetzt kann endlich globalisiert werden !

        jQuery("#Stop").click(function () {
            CancellationToken.stop = true;
        })


        // Validierung mit jQueryValidation

        // Eigene Validierungsregeln definieren
        jQuery.validator.addMethod("deNum", function (value, element) {

            //var parseInput = Globalize('de').numberParser();

            //var intVal = parseInt(value);

            return parseInt > 0;

            //return this.optional(element) || parseInput(value);

        }, "Kein gültige deutsche Zahl");


        jQuery.validator.addMethod("deDate", function (value, element) {

            var parseInputDate = Globalize('de').dateParser(); //({ date: "short" });

            return this.optional(element) || parseInputDate(value);

        }, "Kein gültige deutsche Zahl");


        jQuery("#EditAddressJQ").validate({
            submitHandler: function () {
                jQuery("#ErrMsg3").toggle(false);
            },

            invalidHandler: function (event, validator) {

                var anzErr = validator.numberOfInvalids();
                jQuery("#ErrMsg3").append("Fehlerzahl" + anzErr + "<br/>").slideToggle();
            },

            rules :{
                ContChilds : "deNum"
            }
        });



        // Validieren mit der HTML5 Validierungs- API
        jQuery("#SubmitForm").click(function () {

            jQuery("#ErrMsg2").empty();

            // Abschnittsweise validieren
            jQuery("#EditAddress")[0].checkValidity();


            // Feldweise validieren
            var plz = jQuery("#PLZ")[0];
            plz.checkValidity();

            if (!plz.validity.valid) {
                // Ursache der Ungültigkeit analysieren
                if (plz.validity.patternMismatch) {
                    jQuery("#ErrMsg").append("Keine PLZ<br/>");
                }

                if (plz.validity.valueMissing) {
                    jQuery("#ErrMsg2").append("PLZ erforderlich<br/>");
                }

                jQuery("#ErrMsg2").append(plz.validationMessage + "<br/>").slideToggle();
                //jQuery("#Birthday").toggle(false);
            } else {
                jQuery("#ErrMsg2").empty().toggle(false);
                //jQuery("#Birthday").toggle(true);
            }

        });

        jQuery("#StartPrimscan").click(function () {

            // Alte Fehlermeldungen löschen und Fehleranzeige verstecken
            jQuery("#ErrMsg").empty().toggle(false);

            if (!IsValidInput("#begin")) {
                PrintValidationError("#begin");
            } else if (!IsValidInput("#end")) {
                PrintValidationError("#end");
            } else {

                // Eingaben erfolgreich validiert
                var begin = parseInt(jQuery("#begin").val());
                var end = parseInt(jQuery("#end").val());

                if (begin > end) {
                    jQuery("#ErrMsg").append("Das Intervallende muss gößer als der Intervallanfang sein!");
                    return;
                }

                // Arbeitsaufwand berchenen, und das Progressmeter damit initialisieren
                var workload = end - begin;
                jQuery("#ProgressMeter").attr("min", "0");
                jQuery("#ProgressMeter").attr("max", workload.toString());

                // Alte Ergebnisse löschen
                jQuery("#result").val("");


                CancellationToken = mko.algo.PrimScan(begin, end,
                    // Callback für die Verarbeitung der Ergebnisse
                    function (CancellationToken, PrimList) {
                        jQuery("#result").val(PrimList.join());
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
            }

        });




    });



//});

