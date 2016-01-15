//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 9.6.2015
//
//  Projekt.......: HTML5
//  Name..........: CanvasScript.js
//  Aufgabe/Fkt...: Objekte zum Aufzeichnen von Canvas Zeichenoperationen
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

(function () {

    var ns = GetNamespaceMkoGraph();

    ns.enumCScriptTypes = {

        beginPath: 1,
        closePath: 2,
        strokeStyle: 3,
        fillStyle: 4,
        moveTo: 5,
        lineTo: 6,
        fillRect: 7,
        arc: 8,
        stroke: 9,
        fill: 10

    };

    ns.enumCScriptTypeToString = function (enumCScriptType) {
        switch (enumCScriptType) {
            case 1:
                return "beginPath";
            case 2:
                return "closePath";
            case 3:
                return "strokeStyle";
            case 4:
                return "fillStyle";
            case 5:
                return "moveTo";
            case 6:
                return "lineTo";
            case 7:
                return "fillRect";
            case 8:
                return "arc";
            case 9:
                return "stroke";
            case 10:
                return "fill";
            default:
                return "unbekannter enumCScriptType";
        }
    }

    // Führt ein Script auf einen Canvas- Context aus.
    // ctx    : Contextobjekt eines Canvas
    // Scripts: Array mit CanvasScript Objekte. Werden nacheinander ausgeführt 
    ns.CanvasRobot = function (ctx, Scripts) {

        Scripts.forEach(function (script) {

            switch (script.type) {
                case ns.enumCScriptTypes.arc:
                    ctx.arc(script.pX, script.pY, script.R, script.PhiStart, script.PhiStop, script.Clockwise);
                    break;
                case ns.enumCScriptTypes.beginPath:
                    ctx.beginPath();
                    break;
                case ns.enumCScriptTypes.closePath:
                    ctx.closePath();
                    break;
                case ns.enumCScriptTypes.fillRect:
                    ctx.fillRect(script.pX, script.pY, script.Width, script.Height);
                    break;
                case ns.enumCScriptTypes.fillStyle:
                    ctx.fillStyle = script.Style;
                    break;
                case ns.enumCScriptTypes.lineTo:
                    ctx.lineTo(script.X, script.Y);
                    break;
                case ns.enumCScriptTypes.moveTo:
                    ctx.moveTo(script.X, script.Y);
                    break;
                case ns.enumCScriptTypes.strokeStyle:
                    ctx.strokeStyle = script.Style;
                    break;
                case ns.enumCScriptTypes.stroke:
                    ctx.stroke();
                    break;
                case ns.enumCScriptTypes.fill:
                    ctx.fill();
                    break;

                default: throw "mko.Graph.CanvasRobot: unbekanntes Script" + JSON.stringify(script);
            }

        });

    }

    // Script- Generatoren
    ns.BeginPathScript = function () {
        return {
            type: ns.enumCScriptTypes.beginPath,
            toString: function () {
                return ns.enumCScriptTypeToString(this.type);
            }
        };
    }

    ns.ClosePathScript = function () {
        return {
            type: ns.enumCScriptTypes.closePath,
            toString: function () {
                return ns.enumCScriptTypeToString(this.type);
            }
        };
    }

    ns.StrokeScript = function () {
        return {
            type: ns.enumCScriptTypes.stroke,
            toString: function () {
                return ns.enumCScriptTypeToString(this.type);
            }
        };
    }

    ns.FillScript = function () {
        return {
            type: ns.enumCScriptTypes.fill,
            toString: function () {
                return ns.enumCScriptTypeToString(this.type);
            }
        };
    }


    ns.StrokeStyleScript = function (Style) {
        return {
            type: ns.enumCScriptTypes.strokeStyle,
            Style: Style,
            toString: function () {
                return ns.enumCScriptTypeToString(this.type) + " " + Style;
            }
        };
    }

    ns.FillStyleScript = function (Style) {
        return {
            type: ns.enumCScriptTypes.fillStyle,
            Style: Style,
            toString: function () {
                return ns.enumCScriptTypeToString(this.type) + " " + Style;
            }
        };
    }

    ns.MoveToScript = function (X, Y) {
        return {
            type: ns.enumCScriptTypes.moveTo,
            X: X,
            Y: Y,
            toString: function () {
                return ns.enumCScriptTypeToString(this.type) + " X: " + X.toFixed(1) + " Y: " + Y.toFixed(1);
            }
        };
    }

    ns.LineToScript = function (X, Y) {
        return {
            type: ns.enumCScriptTypes.lineTo,
            X: X,
            Y: Y,
            toString: function () {
                return ns.enumCScriptTypeToString(this.type) + " X: " + X.toFixed(1) + " Y: " + Y.toFixed(1);
            }

        };
    };

    ns.FillRectScript = function (pX, pY, width, height) {
        return {
            type: ns.enumCScriptTypes.fillRect,
            pX: pX,
            pY: pY,
            Width: width,
            Height: height,
            toString: function () {
                return ns.enumCScriptTypeToString(this.type) + " pX: " + pX.toFixed(1) + " pY: " + pY.toFixed(1) + " Width: " + width.toFixed(1) + " Height: " + height.toFixed(1);
            }

        };
    }

    ns.ArcScript = function (pX, pY, R, phiStart, phiStop, clockwise) {
        return {
            type: ns.enumCScriptTypes.arc,
            pX: pX,
            pY: pY,
            R: R,
            PhiStart: phiStart,
            PhiStop: phiStop,
            Clockwise: clockwise,
            toString: function () {
                return ns.enumCScriptTypeToString(this.type) + " pX: " + pX.toFixed(1) + " pY: " + pY.toFixed(1) + " R: " + R.toFixed(1);
            }

        };
    }


    // Erzeugt ein Script für ein Fadenkreuz
    ns.CreateFadenkreuz = function () {

        var Fadenkreuz = [];

        var cX = 0;
        var cY = 0;

        Fadenkreuz.push(new ns.BeginPathScript());
        Fadenkreuz.push(new ns.StrokeStyleScript(ns.FillStyle));

        Fadenkreuz.push(new ns.MoveToScript(cX, cY));
        Fadenkreuz.push(new ns.LineToScript(cX + 10, cY));

        Fadenkreuz.push(new ns.MoveToScript(cX, cY));
        Fadenkreuz.push(new ns.LineToScript(cX, cY + 10));

        Fadenkreuz.push(new ns.MoveToScript(cX, cY));
        Fadenkreuz.push(new ns.LineToScript(cX - 10, cY));

        Fadenkreuz.push(new ns.MoveToScript(cX, cY));
        Fadenkreuz.push(new ns.LineToScript(cX, cY - 10));

        Fadenkreuz.push(new ns.StrokeScript());
        Fadenkreuz.push(new ns.ClosePathScript());

        return Fadenkreuz;
    }


    ns.CanvasRobotTest = function (ctx, width, heigth) {

        var Scripts = [];

        var FK = ns.CreateFadenkreuz();

        ctx.save();
        ctx.translate(100, 100);       
        ns.CanvasRobot(ctx, FK);
        ctx.restore();

        ctx.save();
        ctx.translate(200, 100);
        ns.CanvasRobot(ctx, FK);
        ctx.restore();


        ctx.save();
        ctx.translate(200, 200);
        ns.CanvasRobot(ctx, FK);
        ctx.restore();

        ctx.save();
        ctx.translate(100, 200);
        ns.CanvasRobot(ctx, FK);
        ctx.restore();



        // Liste der Scripte um Fadenkreuz erweitern

        Scripts = Scripts.concat(FK);

        var Kreis = [];

        cX = 200;
        cY = 100;
        var R = 50;

        Kreis.push(new ns.BeginPathScript());
        Kreis.push(new ns.FillStyleScript(ns.FillStyle));
        Kreis.push(new ns.StrokeStyleScript(ns.StrokeStyle));
        Kreis.push(new ns.ArcScript(cX, cY, R, 0, 2 * Math.PI, true));
        Kreis.push(new ns.FillScript());
        Kreis.push(new ns.ClosePathScript());

        ns.CanvasRobot(ctx, Kreis);

        Scripts = Scripts.concat(Kreis);

        ctx.beginPath();
        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fillRect(0, 0, width, heigth);
        ctx.stroke();
        ctx.closePath();

        ns.CanvasRobot(ctx, Scripts);

    };

})();