//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 1.3.2016
//
//  Projekt.......: CanvasPainter
//  Name..........: clearRect.js
//  Aufgabe/Fkt...: Script- Objekt für clearRect- Canvas- Befehl
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

    var cmdName = 'clearRect';

    var fillRectProto = Object.create(ScriptProto, {
        type: {
            value: cmdName,
            writable: false,
            enumerable: true,

        },
        plot: {
            value: function (ctx) {
                // ctx:  Canvas- Context
                ctx.clearRect(this.pX, this.pY, this.Width, this.Height);
            }
        },

        trafo: {
            value: function (tf) {
                // tf: Point -> Point', Transformationsfunktion, die Punkte auf Punkte abbildet
                var p1 = Point.createCartesian(this.pX, this.pY);
                var p2 = Point.createCartesian(this.pX + this.Width, this.pY + this.Height);
                var p1t = tf(p1);
                var p2t = tf(p2);
                return create(p1t.X, p1t.Y, Math.abs(p2t.X - p1t.X), Math.abs(p2t.Y - p1t.Y));
            }
        },

        toJSON: {
            value: function () {
                return {
                    clearRect: {
                        pX: this.pX,
                        pY: this.pY,
                        Width: this.Width,
                        Height: this.Height
                    }
                }
            }
        }
    });


    function create(pX, pY, width, height) {
        return Object.create(fillRectProto, {
            pX: {
                value: pX,
                writable: false,
                enumerable: true,
            },
            pY: {
                value: pY,
                writable: false,
                enumerable: true,
            },
            Width: {
                value: width,
                writable: false,
                enumerable: true,
            },
            Height: {
                value: height,
                writable: false,
                enumerable: true,
            }
        });
    }


    return {
        Name: cmdName,
        create: create,
    }
});