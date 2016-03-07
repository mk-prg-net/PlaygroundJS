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
requirejs(['Geometry/Angle', 'Geometry/Point', 'Script/Script', 'Basics/StyleDescriptor', 'MouseTools/SelectPoint', 'MouseTools/Circle', 'MouseTools/Rect'],
    function (Angle, Point, Script, StyleDescriptor, SelectPoint, CircleMouseTool, RectMouseTool) {

        "use strict";

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

            var shapeStyle = (function () {
                var sd = StyleDescriptor
                sd.fillStyle = '#ff4444';
                sd.strokeStyle = '#ff4444';
                return sd;
            })();


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


            $("#red").click(function () {
                shapeStyle = (function () {
                    var sd = StyleDescriptor
                    sd.fillStyle = '#ff4444';
                    sd.strokeStyle = '#ff4444';
                    return sd;
                })();
            });

            $("#green").click(function () {
                shapeStyle = (function () {
                    var sd = StyleDescriptor
                    sd.fillStyle = '#99cc00';
                    sd.strokeStyle = '#99cc00';
                    return sd;
                })();
            });


            $("#blue").click(function () {
                shapeStyle = (function () {
                    var sd = StyleDescriptor
                    sd.fillStyle = '#33b5e5';
                    sd.strokeStyle = '#33b5e5';
                    return sd;
                })();
            });



            $("#Circle").click(function () {

                CircleMouseTool(idCanvas, 
                    function (circ) { // done

                        $(idScripts).append(circ.map(function (script) {
                            return '<tr><td><code>' + JSON.stringify(script, null, 3) + '</code></td></tr>';
                        }));

                        // Bestehende Zeichnung erweitern
                        circ.unshift(Drawing.length, 0);
                        [].splice.apply(Drawing, circ);

                    },
                    function (err) { // fail

                    },
                    shapeStyle);
            });

            $("#Rect").click(function () {

                RectMouseTool(idCanvas,
                    function (rect) { // done

                        $(idScripts).append(rect.map(function (script) {
                            return '<tr><td><code>' + JSON.stringify(script, null, 3) + '</code></td></tr>';
                        }));

                        // Bestehende Zeichnung erweitern
                        rect.unshift(Drawing.length, 0);
                        [].splice.apply(Drawing, rect);
                        
                    },
                    function (err) { // fail

                    },
                    shapeStyle);
            });



        });

    });

