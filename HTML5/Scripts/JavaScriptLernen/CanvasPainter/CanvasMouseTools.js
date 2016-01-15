//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 9.6.2015
//
//  Projekt.......: HTML5
//  Name..........: CanvasMouseTools
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


(function () {

    var ns = GetNamespaceMkoGraph();

    ns.enumCircleWFStates = {
        Start: 0,
        defCenter: 1,
        defRadius: 2,
        draw: 3,
        Cancel: 4,
        Error: 5
    },


    // Konstruktor für Mouse- Tool
    ns.CircleMouseTool = function (ctx) {
        this.CircleWFState = ns.enumCircleWFStates.Start;
        this.ctx = ctx;
        this.cX = 0;
        this.cY = 0;
        this.R = 0;
    };

    ns.CircleMouseTool.prototype.Start = function () {
        if (this.CircleWFState === ns.enumCircleWFStates.Start) {
            this.CircleWFState = ns.enumCircleWFStates.defCenter;
        } else {
            this.CircleWFState = ns.enumCircleWFStates.Error;
        }
    }

    ns.CircleMouseTool.prototype.DefCenter = function (cX, cY, Scripts) {
        if (this.CircleWFState === ns.enumCircleWFStates.defCenter) {

            // Neuer Zustand
            this.CircleWFState = ns.enumCircleWFStates.defRadius

            this.cX = cX;
            this.cY = cY;

            // Fadenkreuz malen
            var Fadenkreuz = [];

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

            ns.CanvasRobot(this.ctx, Fadenkreuz);

            // Liste der Scripte um Fadenkreuz erweitern

            Scripts = Scripts.concat(Fadenkreuz);


        } else {
            this.CircleWFState = ns.enumCircleWFStates.Error;
        }

        return Scripts;
    }

    ns.CircleMouseTool.prototype.DefRadius = function (rX, rY) {
        if (this.CircleWFState === ns.enumCircleWFStates.defRadius) {

            this.CircleWFState = ns.enumCircleWFStates.draw;

            var dx = this.cX - rX;
            var dy = this.cY - rY;

            this.R = Math.sqrt(dx * dx + dy * dy);

        } else {
            this.CircleWFState = ns.enumCircleWFStates.Error;
        }
    }

    // Zeichnet den Kreis und protokolliert die Operation in Form eines Sciptes
    ns.CircleMouseTool.prototype.Draw = function (Scripts) {
        if (this.CircleWFState === ns.enumCircleWFStates.draw) {

            this.CircleWFState = ns.enumCircleWFStates.Start;

            var Kreis = [];
            Kreis.push(new ns.BeginPathScript());
            Kreis.push(new ns.FillStyleScript(ns.FillStyle));
            Kreis.push(new ns.StrokeStyleScript(ns.StrokeStyle));
            Kreis.push(new ns.ArcScript(this.cX, this.cY, this.R, 0, 2 * Math.PI, true));
            Kreis.push(new ns.FillScript());
            Kreis.push(new ns.ClosePathScript());

            ns.CanvasRobot(this.ctx, Kreis);

            Scripts = Scripts.concat(Kreis);

        } else {
            this.CircleWFState = ns.enumCircleWFStates.Error;
        }

        return Scripts;

    }


})();