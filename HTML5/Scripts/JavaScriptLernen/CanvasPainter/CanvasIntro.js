//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 28.5.2015
//
//  Projekt.......: HTML5
//  Name..........: CanvasIntro.js
//  Aufgabe/Fkt...: Einführung in das Canvas- Element
//                  
//
//
//
//
//<unit_environment>
//------------------------------------------------------------------
//  Zielmaschine..: WebBrowser HTML5
//  Werkzeuge.....: Visual Studio 2012
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


    ns.InitCanvas = function (Canvas, width, heigth) {
        var ctx = Canvas.getContext('2d');

        // Urzustand sichern

        // Hintergrund schwarz machen
        ctx.fillStyle = 'rgb(0, 0, 0)';

        // Linienfarbe grau 
        ctx.strokeStyle = '#A0A0A0';

        ctx.fillRect(0, 0, width, heigth);

    }

    ns.Intro = function (Canvas, width, height) {
        // Context holen
        var ctx = Canvas.getContext('2d');

        // Urzustand sichern
        ctx.save();

        // Hintergrund schwarz machen
        ctx.fillStyle = 'rgb(0, 0, 0)';

        // Linienfarbe grau 
        ctx.strokeStyle = '#A0A0A0';

        ctx.fillRect(0, 0, width, height);

        // Haus malen
        ctx.beginPath();

        var X0 = width / 2.0;
        var Y0 = height / 2.0;

        ctx.moveTo(X0, Y0);
        ctx.lineTo(X0 + 100, Y0);
        ctx.lineTo(X0 + 100, Y0 - 100);
        ctx.lineTo(X0, Y0 - 200);
        ctx.lineTo(X0 - 100, Y0 - 100);
        ctx.lineTo(X0 - 100, Y0);
        ctx.lineTo(X0, Y0);

        ctx.stroke();

        ctx.closePath();

        // Rundes Fenster
        ctx.beginPath();
        ctx.fillStyle = '#FFA000';

        ctx.arc(X0, Y0 - 100, 20, ns.toRad(0), ns.toRad(180), true);

        ctx.fill();
        ctx.closePath();
        

        mko.graph.CanvasRobotTest(ctx, width, height);
    }


})();