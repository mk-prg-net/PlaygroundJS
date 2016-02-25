//<unit_header>
//----------------------------------------------------------------
// Copyright 2016 Martin Korneffel
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 01-2016
//
//  Projekt.......: HTML5
//  Name..........: OO_StaticMembers.js
//  Aufgabe/Fkt...: Implementierung statischer Member
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

// Statische Member

// Beispiel: Basisklasse eines Computerspiels
function Figur(anzLeben) {
    if (Figur.MAX_ANZ_LEBEN < anzLeben)
    {
        this.AnzLeben = Figur.MAX_ANZ_LEBEN;
    }
    else {
        this.AnzLeben = anzLeben;
    }
    
}

// Statischer Member als Member der Konstruktorfunktion
Figur.MAX_ANZ_LEBEN = 100;

Figur.prototype.erneuern = function (Zusatzleben) {
    this.AnzLeben += Zusatzleben;
    if (this.AnzLeben > Figur.MAX_ANZ_LEBEN) {
        this.AnzLeben = Figur.MAX_ANZ_LEBEN;
    }
}

Figur.prototype.altern = function (Stressfaktor) {
    this.AnzLeben -= Stressfaktor;
    if (this.AnzLeben < 0) {
        this.AnzLeben = 0;
    }
}

function EmulateStaticMember() {

    var maxLeben = Figur.MAX_ANZ_LEBEN;

    var r2d2 = new Figur(150);
    var c3po = new Figur(50);

}