//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 5.3.2016
//
//  Projekt.......: CanvasPainter
//  Name..........: Circle.js
//  Aufgabe/Fkt...: Mauswerkzeug zum zeichnen eines Kreises
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


define(['Q', 'Geometry/Angle', 'Geometry/Point', 'Basics/StyleDescriptor', 'Script/Script', 'Pictograms/Crosshair', './SelectPoint'],
    function (Q, Angle, Point, StyleDescriptor, Script, Crosshair, SelectPoint) {

        return function (idCanvas, done, fail, circStyle, constructionLinesStyle) {

            var canvas = $(idCanvas).get(0);
            var ctx = canvas.getContext('2d');

            var circStyle = circStyle || StyleDescriptor.create();
            var constructionLinesStyle = constructionLinesStyle ||
                (function () {
                    var descr = StyleDescriptor.create();
                    descr.fillStyle = '#ff0000';
                    descr.strokeStyle = '#ff0000';
                    return descr;
                })();


            // aktuelle Darstellung sichern als Bitmap
            var savedImage = new Image()
            savedImage.src = $(idCanvas).get(0).toDataURL("image/png")

            var CenterPoint = null;

            function Circle(point, Style) {

                var R = Point.cartesianFrom(point).translate(-CenterPoint.X, -CenterPoint.Y).d0;

                var circ = [
                    Script.Cmd('strokeStyle').with(Style.strokeStyle),
                    Script.Cmd('fillStyle').with(Style.fillStyle),
                    Script.Cmd('beginPath').with(),
                    Script.Cmd('arc').with(CenterPoint.X, CenterPoint.Y, R, 0, 2 * Math.PI, false),
                    Script.Cmd('closePath').with(),
                    Script.Cmd('stroke').with(),
                ];

                return circ;
            }

            function rubberBandCircel(point, Style) {

                // Radiuslinie zeichnen
                var rline = [
                    Script.Cmd('strokeStyle').with(Style.strokeStyle),
                    Script.Cmd('beginPath').with(),
                    Script.Cmd('moveTo').with(CenterPoint.X, CenterPoint.Y),
                    Script.Cmd('lineTo').with(point.X, point.Y),
                    Script.Cmd('closePath').with(),
                    Script.Cmd('stroke').with(),
                ];

                return rline.concat(Circle(point, Style));
            }

            // Maus Tools testen
            SelectPoint(idCanvas)
                .progress(function (PointData) {

                    // Hintergrund wiederherstellen
                    ctx.drawImage(savedImage, 0, 0);

                    // Fadenkreuz- Script erzeugen und zeichnen
                    var cross = Crosshair(PointData.point.X, PointData.point.Y, 0, constructionLinesStyle);
                    Script.plot(cross, ctx);

                })
                .then(function (PointData) {

                    // Hintergrund wiederherstellen
                    ctx.drawImage(savedImage, 0, 0);

                    CenterPoint = PointData.point;

                    // Fadenkreuz- Script erzeugen und zeichnen
                    var cross = Crosshair(CenterPoint.X, CenterPoint.Y, 0, circStyle);
                    Script.plot(cross, ctx);

                    // Neuen Grundzustand sichern
                    savedImage.src = $(idCanvas).get(0).toDataURL("image/png")

                    // Radius des Kreises festlegen
                    SelectPoint(PointData.idCanvas)
                        .progress(function (PointData) {

                            // Hintergrund wiederherstellen
                            ctx.drawImage(savedImage, 0, 0);

                            Script.plot(rubberBandCircel(PointData.point, constructionLinesStyle), ctx);

                        })
                        .then(function (PointData) {

                            // Hintergrund wiederherstellen
                            ctx.drawImage(savedImage, 0, 0);

                            var circ = Circle(PointData.point, circStyle);

                            Script.plot(circ, ctx);

                            done(circ);

                        });

                })
                .catch(function (err) {
                    fail(err);
                }).finally(function () {
                    
                })
                .done();
        };

    });