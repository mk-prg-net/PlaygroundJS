//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 7.6.2015
//
//  Projekt.......: HTML5
//  Name..........: DocumentReady.js
//  Aufgabe/Fkt...: Funktionen auf semantischen Strukturen.
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

    // time Demo
    // Zugriff auf eine Datums-Zeit- Auszeichnung
    var timeObj = $("#timeDemoNow").get(0);
    
    if (typeof timeObj.valueAsDate == "undefined") {
        timeObj.innerHTML = new Date().toLocaleDateString();
    } else {
        timeObj.valueAsDate = new Date();
    }

    // Suchmaschine für mark- Demo implementieren
    $("#SearchPattern").change(function () {

        // 0. Falls vorhanden, alte Treffermarkierungen aufheben
        Unmark();

        // 1. Suchmuster einlesen
        var pattern = $("#SearchPattern option:selected").attr("value")

        if (pattern != "none") {

            // 2. Suchmuster sichern, um später die Treffermarkierungen wieder aufzuheben
            $("#searchCountMatches").data("pattern", pattern);

            // 2. Anzahl der Treffer bestimmen und ausgeben
            var searchCount = $(pattern).size() || 0;
            $("#searchCountMatches").html(searchCount.toString() + " " + pattern + " gefunden");

            // 3. Markieren aller Treffer
            $(pattern).wrap("<mark style='color: red; background-color: yellow'></mark>")
        }
    });

    function Unmark() {
        // 1. Suchmuster einer vorausgegangenen Suche laden
        $("#searchCountMatches").empty();
        var pattern = $("#searchCountMatches").data("pattern");
        if (pattern != undefined) {
            // 2. Markieungen der Treffer entfernen
            $(pattern).unwrap();
        }
    }

});