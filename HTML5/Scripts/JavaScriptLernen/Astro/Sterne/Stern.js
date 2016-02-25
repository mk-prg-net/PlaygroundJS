//<unit_header>
//----------------------------------------------------------------
// Copyright 2016 Martin Korneffel
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 01.2016
//
//  Projekt.......: HTML5
//  Name..........: Stern.js
//  Aufgabe/Fkt...: Basisklasse aller Typen von Sternen wie weisse Zwerge und rote Riesen
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

// Basiklasse aller Typen von Sternen wie weisse Zwerge und rote Riesen

define(['Base/CB'], function (CB) {

    var Stern = function (Name, Masse, Farbe) {
        // Aufrufen des Konstruktors der Basis(Super)klasse
        CB.call(this, Name, Masse);
        this.Farbe = Farbe;
    }

    // Prototypenkette mit der Basisklasse aufbauen
    // -> Neues Prototypenobjekt anlegen, dessen 
    // __proto__ Eigenschaft auf den Prototype der Basisklasse
    // verweist
    Stern.prototype = Object.create(CB.prototype);

    // Noch ist das Verknüpfen nicht vollständig
    // Korrigieren der constructor- Eigenschaft
    Stern.prototype.constructor = Stern;

    return Stern;
})
