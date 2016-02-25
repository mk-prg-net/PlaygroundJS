//<unit_header>
//----------------------------------------------------------------
// Copyright 2016 Martin Korneffel
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 01.2016
//
//  Projekt.......: HTML5
//  Name..........: CB.js
//  Aufgabe/Fkt...: Basisklasse aller Himmelskörper
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

// Basisklasse aller Himmelskörper

define(function () {

    // Definieren des CB- Konstruktors
    var CB = function (Name, Masse) {
        // Masse des Himmelskörpers in Erdmassen
        this.Masse = Masse;
        this.Name = Name;

        // Getter, implementiert mittels private Memeber 
        // alias Closure
        var MassePrivat = Masse;

        this.GetMassePrivat = function () {
            return MassePrivat;
        }
    }

    // Methode, die alle Instanzen der CB- Klasse sich teilen
    CB.prototype.toString = function () {
        return this.Name;
    }

    // Getter für die Masseeigenschaft
    // Nachteil dieser Implementierung: this.Masse ist 
    // öffentlich sichtbar.
    CB.prototype.GetMasse = function ()
    {
        return this.Masse;
    }

    // Das fertig konfigurierte Modul zurückgeben
    return CB;
})