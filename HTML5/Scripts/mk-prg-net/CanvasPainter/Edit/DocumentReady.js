//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 6.3.2016
//
//  Projekt.......: CanvasPainter
//  Name..........: DocumentReady.js
//  Aufgabe/Fkt...: Eventhandler für Edit- View der CanvasPainter ASPX Anwendung
//                  registrieren.
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
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '/Scripts/mk-prg-net/CanvasPainter',

    paths: {
        "QUnit": "../../qunit",
        "Q": "../../q"
    },

    shim: {
        'QUnit': {
            exports: 'QUnit',
            init: function () {
                QUnit.config.autoload = false;
                QUnit.config.autostart = false;
            }
        }
    }
});


// 2. Starten der Anwendung
requirejs(['Geometry/Angle', 'Geometry/Point', 'Script/Script', 'MouseTools/SelectPoint', 'MouseTools/Circle'],
    function (Angle, Point, Script, SelectPoint, CircleMouseTool) {

        // Gesamte Zeichnung
        var Drawing = [];

        var picKey = "pic"
        var idCanvas = '#pane';
        var idScripts = "#Scripts";

        // Sichern der Zeichnung im Browser
        function SavePic() {

            if (typeof localStorage !== "undefined") {
                localStorage.setItem(picKey, JSON.stringify(Drawing));
            }
        }

        // Wiederherstellen der Zeichung aus dem lokalen Speicher des Browsers
        function RestorePic(ctx) {
            if (localStorage && localStorage.length > 0 && localStorage.key(0) === picKey) {
                var strPic = localStorage.getItem(picKey);
                var jsonScripts = JSON.parse(strPic);

                // Alte Zeichnung löschen
                Drawing = [];
                for (var i = 0, anz = jsonScripts.length; i < anz; i++) {

                    // Die lokale Variable muss hier angelegt werden, damit ein korrekter
                    // Closure in toString gegeben ist
                    let name = Object.getOwnPropertyNames(jsonScripts[i])[0];
                    Drawing.push(Script.Cmd(name).from(jsonScripts[i][name]));

                }
                Script.plot(Drawing, ctx);

                // Die Liste der Canvas- Befehle ausgeben
                $(idScripts).empty().append(jsonScripts.map(function (script) {
                    return '<tr><td><code>' + JSON.stringify(script, null, 3) + '</code></td></tr>';
                }));
            }
        }

        $(document).ready(function () {

            var canvas = $(idCanvas).get(0);
            var ctx = canvas.getContext('2d');

            var width = $(idCanvas).attr('width');
            var height = $(idCanvas).attr('height');

            var canvasInit = [
                Script.Cmd('fillStyle').with('#000000'),
                Script.Cmd('fillRect').with(0, 0, width, height),
            ];

            Script.plot(canvasInit, ctx);


            $("#Save").click(SavePic);

            $("#Restore").click(function () {
                RestorePic(ctx);
            });

            // Alles löschen
            $("#ClearCanvas").click(function () {

                Script.plot(canvasInit, ctx);
                // Aufzeichnungen löschen
                Drawing = [];
                $(idScripts).empty()
            });


            $("#Circle").click(function () {

                CircleMouseTool(idCanvas, 
                    function (circ) { // done
                        // Bestehende Zeichnung erweitern
                        circ.unshift(0, 0);
                        [].splice.apply(Drawing, circ);

                        $(idScripts).append(Drawing.map(function (script) {
                            return '<tr><td><code>' + JSON.stringify(script, null, 3) + '</code></td></tr>';
                        }));
                    },
                    function (err) { // fail

                    }
                    );

                //// aktuelle Darstellung sichern als Bitmap
                //var savedImage = new Image()
                //savedImage.src = $(idCanvas).get(0).toDataURL("image/png")

                //var CenterPoint = null;

                //function Circle(point, Style) {

                //    var R = Point.cartesianFrom(point).translate(-CenterPoint.X, -CenterPoint.Y).d0;

                //    var circ = [
                //        Script.Cmd('strokeStyle').with(Style.strokeStyle),
                //        Script.Cmd('fillStyle').with(Style.fillStyle),
                //        Script.Cmd('beginPath').with(),
                //        Script.Cmd('arc').with(CenterPoint.X, CenterPoint.Y, R, 0, 2 * Math.PI, false),
                //        Script.Cmd('closePath').with(),
                //        Script.Cmd('stroke').with(),
                //    ];

                //    return circ;
                //}

                //function rubberBandCircel(point, Style) {

                //    // Radiuslinie zeichnen
                //    var rline = [
                //        Script.Cmd('strokeStyle').with(Style.strokeStyle),
                //        Script.Cmd('beginPath').with(),
                //        Script.Cmd('moveTo').with(CenterPoint.X, CenterPoint.Y),
                //        Script.Cmd('lineTo').with(point.X, point.Y),
                //        Script.Cmd('closePath').with(),
                //        Script.Cmd('stroke').with(),
                //    ];

                //    return rline.concat(Circle(point, Style));
                //}

                //SelectPoint(idCanvas)                    
                //    .then(
                //            function (PointData) { // done: Mittelpunkt markieren

                //                // Hintergrund wiederherstellen
                //                ctx.drawImage(savedImage, 0, 0);

                //                CenterPoint = PointData.point;

                //                // Fadenkreuz- Script erzeugen und zeichnen
                //                var cross = Crosshair(CenterPoint.X, CenterPoint.Y, 0, circStyle);
                //                Script.plot(cross, ctx);

                //                // Neuen Grundzustand sichern
                //                savedImage.src = $(PointData.idCanvas).get(0).toDataURL("image/png")

                //                // Radius des Kreises festlegen
                //                return SelectPoint(PointData.idCanvas);                             
                //            },
                //            function (err) { // fail
                //            }, 
                //            function (PointData) { // progress

                //                // Hintergrund wiederherstellen
                //                ctx.drawImage(savedImage, 0, 0);

                //                // Fadenkreuz- Script erzeugen und zeichnen
                //                var cross = Crosshair(PointData.point.X, PointData.point.Y, 0, constructionLinesStyle);
                //                Script.plot(cross, ctx);
                //            })
                //    .then(
                //            function (PointData) { // done: Kreis zeichnen

                //                // Hintergrund wiederherstellen
                //                ctx.drawImage(savedImage, 0, 0);

                //                Script.plot(Circle(PointData.point, circStyle), ctx);

                //                // Neuen Grundzustand sichern
                //                savedImage.src = $(PointData.idCanvas).get(0).toDataURL("image/png")

                //                // Zeichnung erweitern
                //                Drawing

                //            },
                //            function (err) { // fail
                //            }, 
                //            function (PointData) { // progress

                //                // Hintergrund wiederherstellen
                //                ctx.drawImage(savedImage, 0, 0);

                //                // Gummiband mit maktuellem Radius und Kreis zeichnen
                //                Script.plot(rubberBandCircel(PointData.point, constructionLinesStyle), ctx);

                //            })
                //    .finally(function () {                    
                //    })
                //    .done();

            });



        });

    });

