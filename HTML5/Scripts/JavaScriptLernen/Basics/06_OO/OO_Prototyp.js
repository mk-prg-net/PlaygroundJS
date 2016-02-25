//<unit_header>
//----------------------------------------------------------------
// Copyright 2016 Martin Korneffel
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 10.2015
//
//  Projekt.......: HTML5
//  Name..........: OO_Prototyp.js
//  Aufgabe/Fkt...: Demonstration des Einsatzes von Prototypen
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


// In dieser Impelmentierung werden in der Instanz nur Daten gespeichert. Die Methoden werden zentral im sog. Prototyp
// von Konto_mit_ProtoMethoden gespeichert.
function Konto_mit_ProtoMethoden(ktoNr, inhaber, passwort) {
    this.Inhaber = inhaber;
    this.KtoNr = ktoNr;
    this.Guthaben = 0.0;
    this.WechselkursEurDollar = 1.10;

    // this in einem Closure sichern. So wird umrechnen immer auf das ursprüngliche Objekt zugreifen
    var self = this;
    var Umrechnen = function () {
        return self.Guthaben * self.WechselkursEurDollar;
    }

    var Umrechnen2 = function () {
        return this.Guthaben * this.WechselkursEurDollar;
    }


    var Umrechnen3 = function (Guthaben, Wechselkurs) {
        return Guthaben * Wechselkurs;
    }

    this.GuthabenInDollar = function () {
        return Umrechnen();
    }

    this.GuthabenInDollar2 = function () {
        // Call muss sein, da this sonst das window- Objekt ist !
        return Umrechnen2.call(this);
    }

    this.GuthabenInDollar3 = function () {
        return Umrechnen3(this.Guthaben, this.WechselkursEurDollar);
    }


    // Prüft, ob ein eingegebenes Passwort korrekt ist
    this.CheckPassword = function (paswordInput) {
        // bei == müssen nur Werte, bei === Werte und Typ identisch sein
        // passwort ist Closure und wird zur Implementierung von privaten Daten genutzt
        return paswordInput === passwort;
    }
}

// Der Prototyp ist ein Objekt, auf das alle Instanzen der Klasse Konto verweisen.
// Im Prototypenobjekt werden typischerweise die Methoden der Objekte zentral definiert.
// Beachte: In JavaScript gibt es keine Klassendeklarationen, aus denen ein Kompiler 
// Code erzeugt, der das Prototypenobjekt zur Laufzeit generiert. Diese arbeit
// müssen wir selbst durchführen.
Konto_mit_ProtoMethoden.prototype.Einzahlen = function (betrag) {
    this.Guthaben += betrag;
    return { KtoNr: this.KtoNr, Guthaben: this.Guthaben };

}

Konto_mit_ProtoMethoden.prototype.Abheben = function (betrag) {
    this.Guthaben -= betrag;

    // ktoNr kein Closure hier- der Fehler offenbart sich sofort
    return { KtoNr: ktoNr, Guthaben: this.Guthaben };
}

Konto_mit_ProtoMethoden.prototype.Abheben_korrekt = function (betrag) {
    this.Guthaben -= betrag;

    return { KtoNr: this.KtoNr, Guthaben: this.Guthaben };
}


function OO_Prototypen() {
    console.log("OO_Prototypen");

    var DonaldsKonto = new Konto_mit_ProtoMethoden('4711', 'Donald', "XA1234");
    var CarlosKonto = new Konto_mit_ProtoMethoden('0815', 'Carlo', "Klau2015");

    DonaldsKonto.Guthaben = 100;
    var res = DonaldsKonto.GuthabenInDollar();
    var res = DonaldsKonto.GuthabenInDollar2();
    var res = DonaldsKonto.GuthabenInDollar3();


    // Passwörter prüfen

    console.assert(DonaldsKonto.CheckPassword("YA1234"));

    var stand = DonaldsKonto.Einzahlen(1000);
    console.assert(DonaldsKonto.Guthaben === 1000.0, "Einzahlen Fehlgeschlagen");

    try {
        stand = DonaldsKonto.Abheben(500);
        console.assert(DonaldsKonto.Guthaben === 500.0, "Abheben Fehlgeschlagen");
    } catch (err) {

    }

    stand = DonaldsKonto.Abheben_korrekt(500);
    console.assert(DonaldsKonto.Guthaben === 500.0, "Abheben Fehlgeschlagen");

    var Bank = [DonaldsKonto, CarlosKonto];

    // Objektfunktional: monatliche Kontoführungsgeühren abbuchen:
    Bank.forEach(function (konto) {

        konto.Abheben_korrekt(5.00);

    });

    // Kontoauszüge drucken
    druckeKontoauszuege(Bank);

    console.log("OO_Prototypen Ende")
}

function druckeKontoauszuege(Bank) {
    console.log("Kontoauszüge drucken")

    Bank.forEach(function (konto) {

        var txt1 = JSON.stringify(konto);
        console.log(txt1);


    });

    console.log("Kontoauszüge drucken Ende")
}
