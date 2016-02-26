//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 25.2.2016
//
//  Projekt.......: HTML5
//  Name..........: Point.js
//  Aufgabe/Fkt...: Klassen zur Darstellung von Punkten
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




GetNamespaceMkoGraph().Point = (function(){

    var PointProto = {
        getX: function () {
            return this.X;
        },
        getY: function() {
            return this.Y;
        }
    }

    return {
        create: function (x, y) {
            var p = Object.create(PointProto);
            p.X = X;
            p.Y = Y;
        },

        removeOffset: function(x, y, offset){
            return this.create(x - offset.X, y - offset.Y);
        }
    }
});

    