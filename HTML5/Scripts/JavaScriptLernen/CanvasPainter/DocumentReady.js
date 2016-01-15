//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 27.5.2015
//
//  Projekt.......: HTML5
//  Name..........: DocumentReady.js
//  Aufgabe/Fkt...: Kurzbeschreibung
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

// Liste aller Scripte
var Scripts = [];

var picKey = "pic"

// Sichern der Zeichnung im Browser
function SavePic() {

    if (typeof localStorage !== "undefined") {
        localStorage.setItem(picKey, JSON.stringify(Scripts));
    }
}

// Wiederherstellen der Zeichung aus dem lokalen Speicher des Browsers
function RestorePic() {
    var canvas = $("#CanvasPainter").get(0);

    if (typeof localStorage !== "undefined") {

        if (localStorage.length > 0 && localStorage.key(0) === picKey) {
            var strPic = localStorage.getItem(picKey);
            Scripts = JSON.parse(strPic);

            var anz = 0;
            for (var i = 0, anz = Scripts.length; i < anz; i++) {
                // IFFY hier notwendig, um eine echte lokale Variable typeId bereitzustellen
                (function () {

                    // Die lokale Variable muss hier angelegt werden, damit ein korrekter
                    // Closure in toString gegeben ist
                    var typeId = Scripts[i].type;

                    Scripts[i].toString = function () {
                        return mko.graph.enumCScriptTypeToString(typeId);
                    }
                })()
            }
            mko.graph.CanvasRobot(canvas.getContext('2d'), Scripts);

            // Die Liste der Canvas- Befehle ausgeben
            $("#Scripts").empty().append(Scripts.map(function (script) {
                return "<tr><td>" + script.toString() + "</td></tr>";
            }));
        }
    }
}


$(document).ready(function () {

    var width = $("#CanvasPainter").attr("width");
    var height = $("#CanvasPainter").attr("height");
    var canvas = $("#CanvasPainter").get(0);

    mko.graph.InitCanvas(canvas, width, height);

    mko.graph.Intro(canvas, width, height);

    $("#Save").click(SavePic);

    $("#Restore").click(RestorePic);


    // Alles löschen
    $("#ClearCanvas").click(function () {
        var ctx = canvas.getContext('2d');

        // Bild löschen
        ctx.beginPath();
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, width, height);
        ctx.fill();
        ctx.closePath();

        // Aufzeichnungen löschen
        Scripts = [];
        $("#Scripts").empty()


    });

    // Kreis- Zeichnen Tool
    $("#Circle").click(function () {

        var tool = new mko.graph.CircleMouseTool(canvas.getContext('2d'));
        tool.Start();

        // Click- Eventhandler zur erfassung des Mittelspunktes registrieren
        $("#CanvasPainter").click(function (e) {

            console.assert(tool.CircleWFState === mko.graph.enumCircleWFStates.defCenter);

            // Mittelpunkt zeichnen
            var offset = $(this).offset();
            Scripts = tool.DefCenter(e.pageX - offset.left, e.pageY - offset.top, Scripts);

            console.assert(tool.CircleWFState === mko.graph.enumCircleWFStates.defRadius);

            // Event deregistrieren
            $(this).off("click");

            // Neuen Eventhandler für Erfassung des Randpunktes vom Kreis registrieren
            $(this).click(function (e) {

                console.assert(tool.CircleWFState === mko.graph.enumCircleWFStates.defRadius);

                // Radius erfassen
                var offset = $(this).offset();
                tool.DefRadius(e.pageX - offset.left, e.pageY - offset.top);

                console.assert(tool.CircleWFState === mko.graph.enumCircleWFStates.draw);

                // Kreis zeichnen
                Scripts = tool.Draw(Scripts);

                console.assert(tool.CircleWFState === mko.graph.enumCircleWFStates.Start);

                $("#Scripts").empty().append(Scripts.map(function (script) {
                    return "<tr><td>" + script.toString() + "</td></tr>";
                }));

            });
        });

    });

});