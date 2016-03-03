//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 2.3.2016
//
//  Projekt.......: CanvasPainter
//  Name..........: bezierCurveTo.js
//  Aufgabe/Fkt...: Script- Objekt für quadraticCurveTo- Canvas- Befehl
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

define(['Geometry/Point', './ScriptProto'], function (Point, ScriptProto) {

    "use strict";

    var cmdName = 'bezierCurveTo';

    var Proto = Object.create(ScriptProto, {
        Name: {
            value: cmdName,
            writable: false,
            enumerable: true,
        },
        plot: {
            value: function (ctx) {
                // ctx:  Canvas- Context
                ctx.bezierCurveTo(this.cp1X, this.cp1Y, this.cp2X, this.cp2Y, this.X, this.Y);
            }
        },

        trafo: {
            value: function (tf) {
                // tf: Point -> Point', Transformationsfunktion, die Punkte auf Punkte abbildet
                var pt = tf(Point.createCartesian(this.X, this.Y));
                var cp1t = tf(Point.createCartesian(this.cp1X, this.cp1Y));
                var cp2t = tf(Point.createCartesian(this.cp2X, this.cp2Y));

                return create(pt.X, pt.Y, cpt.X, cpt.Y);
            }
        },

        toJSON: {
            value: function () {
                return {
                    bezierCurveTo: {
                        X: this.X,
                        Y: this.Y,
                        cp1X: this.cp1X,
                        cp1Y: this.cp1Y,
                        cp2X: this.cp2X,
                        cp2Y: this.cp2Y,
                    }
                };
            }
        }
    });


    function create(X, Y, cp1X, cp1Y, cp2X, cp2Y) {

        return Object.create(Proto, {
            X: {
                value: X,
                writable: false,
                enumerable: true,
            },
            Y: {
                value: Y,
                writable: false,
                enumerable: true,
            },
            cp1X: {
                value: cp1X,
                writable: false,
                enumerable: true,
            },
            cp1Y: {
                value: cp1Y,
                writable: false,
                enumerable: true,
            },
            cp2X: {
                value: cp2X,
                writable: false,
                enumerable: true,
            },
            cp2Y: {
                value: cp2Y,
                writable: false,
                enumerable: true,
            },
        });
    }

    return {
        Name: cmdName,
        create: create,
    }
});