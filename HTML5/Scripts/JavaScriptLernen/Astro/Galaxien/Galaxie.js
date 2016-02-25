//<unit_header>
//----------------------------------------------------------------
// Copyright 2016 Martin Korneffel
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 01.2016
//
//  Projekt.......: HTML5
//  Name..........: Galaxie.js
//  Aufgabe/Fkt...: Basisklasse aller Galaxieen
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

// Basisklasse aller Galaxien

define(["Base/CB"], function (CB) {

    var Galaxie = function (Name, Sterne) {
        CB.call(this, Name, 0);
        this.Sterne = Sterne;
    }

    Galaxie.prototype = Object.create(CB.prototype);
    Galaxie.prototype.constructor = Galaxie;

    // Eigenschaft Masse neudefinieren
    Galaxie.prototype.GetMasse = function () {
        var Gesamtmasse = 0;

        // Nicht so gut mit Arrays (for in Schleife)
        //for (var stern in this.Sterne) {
        //    Gesamtmasse += stern.GetMasse();
        //}

        Gesamtmasse = 0;
        for (var i = 0, len = this.Sterne.length; i < len; i++) {
            Gesamtmasse += this.Sterne[i].GetMasse();
        }

        Gesamtmasse = 0;
        this.Sterne.forEach(function (stern) {
            Gesamtmasse += stern.GetMasse();
        });

        //Gesamtmasse = 0;
        //Gesamtmasse = Array.reduce(this.Sterne, function (a, b) { return a.GetMasse() + b.GetMasse() });

        return Gesamtmasse;
        
    }

    return Galaxie;

});