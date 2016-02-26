//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 25.2.2016
//
//  Projekt.......: HTML5
//  Name..........: CanvasMouseToolRect.js
//  Aufgabe/Fkt...: Steuert den Prozess der Erstellung eines Rechtecks mit der Maus:
//                  Zwei Ecken definieren und Rechteck zeichnen
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

GetNamespaceMkoAlgo().RectMouseTool = (function () {

    // Promise anlegen
    var deferred = Q.defer();


    // 

    return {
        Start: function (idSelCanvas) {
            $(idSelCanvas).click(function (e) {

                // Eckpunkt zeichen
                var offset = $(this).offset();



                deferred.resolve();
            });
            return deferred.promise;
        }

    };
})();