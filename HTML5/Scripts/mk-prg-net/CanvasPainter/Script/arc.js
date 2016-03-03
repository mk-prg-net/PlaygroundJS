//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 1.3.2016
//
//  Projekt.......: CanvasPainter
//  Name..........: arc.js
//  Aufgabe/Fkt...: Script- Objekt für arc- Canvas- Befehl
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

    var cmdName = 'arc';

    var Proto = Object.create(ScriptProto, {
        Name: {
            value: cmdName,
            writable: false,
            enumerable: true,
        },
        plot: {
            value: function (ctx) {
                // ctx:  Canvas- Context
                ctx.arc(this.pX, this.pY, this.R, this.PhiStart, this.PhiStop, this.Clockwise);
            }
        },

        trafo: {
            value: function (tf) {
                // tf: Point -> Point', Transformationsfunktion, die Punkte auf Punkte abbildet
                var p1t = tf(Point.createCartesian(this.pX, this.pY));
                return create(p1t.X, p1t.Y, this.R, this.phiStart, this.phiStop, this.clockwise);
            }
        },

        toJSON: {
            value: function () {
                return {
                    arc: {
                        pX: this.pX,
                        pY: this.pY,
                        R: this.R,
                        PhiStart: this.PhiStart,
                        PhiStop: this.PhiStop,
                        Clockwise: this.Clockwise
                    }
                };
            }
        }
    });


    function create(pX, pY, R, phiStart, phiStop, clockwise) {

        return Object.create(Proto, {
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
            R: {
                value: R,
                writable: false,
                enumerable: true,
            },
            PhiStart: {
                value: phiStart,
                writable: false,
                enumerable: true,
            },
            PhiStop: {
                value: phiStop,
                writable: false,
                enumerable: true,
            },
            Clockwise: {
                value: clockwise,
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