//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 1.3.2016
//
//  Projekt.......: HTML5
//  Name..........: Pictograms.js
//  Aufgabe/Fkt...: Cnvas- Scripte, die Pictogramme erstellen
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

define(['Basics/Defs', './Script'], function (Defs, Script) {

    "use strict";

    return {

        // Erzeugt ein Script für ein Fadenkreuz
        createCrosshair: function () {
            
            var Crosshair = [];

            var cX = 0;
            var cY = 0;

            Crosshair.push(Script.Cmd('beginPath')());
            Crosshair.push(Script.Cmd('strokeStyle')(Defs.FillStyle));

            Crosshair.push(Script.Cmd('moveTo')(cX, cY));
            Crosshair.push(Script.Cmd('lineTo')(cX + 10, cY));

            Crosshair.push(Script.Cmd('moveTo')(cX, cY));
            Crosshair.push(Script.Cmd('lineTo')(cX, cY + 10));

            Crosshair.push(Script.Cmd('moveTo')(cX, cY));
            Crosshair.push(Script.Cmd('lineTo')(cX - 10, cY));

            Crosshair.push(Script.Cmd('moveTo')(cX, cY));
            Crosshair.push(Script.Cmd('lineTo')(cX, cY - 10));

            Crosshair.push(Script.Cmd('stroke')());
            Crosshair.push(Script.Cmd('closePath')());

            return Crosshair;
        }
    };

});