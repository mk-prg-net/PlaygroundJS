//<unit_header>
//----------------------------------------------------------------
// Copyright 2016 Martin Korneffel
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 01.2016
//
//  Projekt.......: HTML5
//  Name..........: OO_Astro_Prototypenvererbung.js
//  Aufgabe/Fkt...: Implementierung einer Klassenhierarchie mittels prototypischer Vererbung.
//                  Demo Prinzip der Modularisierung mittels parametrierter IIFE- Blöcke
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


//
 
// Einschluss der Implementierung der Basisklassenfabrik in einem Modul
var Astro_CB = Astro_CB || (function () {

    // Prototyp für alle CB- Objekte. Bewahrt Metoden für CB Objekte zentral auf.
    var CbPrototyp = {
        toString: function () {
            return this.Name + " mit der Masse " + this.Masse.toString();
        },

        getName: function() {
            return this.Name;
        },

        getMasse: function () {
            return this.Masse;
        }

    };

    // Objekt wird zurückgegeben, welches eine Klassenfabrik anbietet
    return {
        Create: function (Name, Masse) {
            var CB = Object.create(CbPrototyp);

            // Eigenschaften für Name und Masse definieren, damit getName und getMasse auch für ein CB funktionieren
            CB.Name = Name;
            CB.Masse = Masse;
            
            return CB;
        }
    }

})();


var Astro_Stern = Astro_Stern || (function (CB) {

    var Basis = CB.Create("unbekannt", 0);

    // Methode im Prototypen
    Basis.getTempSurface = function () {
        if (this.Farbe == "rot")
            return 3000;
        if (this.Farbe == "gelb")
            return 6000;
        if (this.Farbe == "blau")
            return 50000;

        return 0;

    };

    return {
        Create: function (Name, Masse, Farbe) {
            var Stern = Object.create(Basis);

            Stern.Name = Name;
            Stern.Masse = Masse;
            Stern.Farbe = Farbe;

            return Stern;
        }
    }

})(Astro_CB);

var Astro_Galaxie = Astro_Galaxie || (function (CB) {

    var Basis = CB.Create("unbekannt", 0);

    Basis.getMasse = function () {
        var gesamtmasse = 0;
        for (var i = 0, len = this.Sterne.length; i < len; i++) {
            gesamtmasse += this.Sterne[i].getMasse();
        }
        return gesamtmasse;
    }

    return {
        Create: function (Name, Sterne) {
            var Galaxie = Object.create(Basis);
            Galaxie.Name = Name;
            Galaxie.Sterne = Sterne;

            return Galaxie;
        }
    }


})(Astro_CB);


QUnit.test("Basisklasse Astro_CB testen", function (assert) {

    var cb = Astro_CB.Create("Jupiter", 300);

    assert.equal(cb.getName(), "Jupiter", "Das Basisklassenobjekt sollte den Namen Jupiter liefern");
    assert.equal(cb.getMasse(), 300, "Das Basisklassenobjekt sollte die Masse 300 (Erdmassen) haben");
});

QUnit.test("Astro_Stern testen", function (assert) {

    var cb = Astro_Stern.Create("Sonne", 1, "gelb");

    assert.equal(cb.getName(), "Sonne", "Der Stern sollte den Namen Sonne liefern");
    assert.equal(cb.getMasse(), 1, "Der Stern sollte die Masse 1 (Sonnenmasse) haben");
    assert.equal(cb.getTempSurface(), 6000, "Der Stern sollte eine Oberflächentemperatur von 6000 C haben.");
});

QUnit.test("Astro_Galaxie testen", function (assert) {

    var Sterne = [
        Astro_Stern.Create("Sonne", 1, "gelb"),
        Astro_Stern.Create("Bellatrix", 20, "blau"),
        Astro_Stern.Create("Aldebran", 100, "rot")
    ];

    var milkyway = Astro_Galaxie.Create("Milchstrasse", Sterne);

    assert.equal(milkyway.getName(), "Milchstrasse", "Die Galaxie sollte den Namen Milchstrasse liefern");
    assert.equal(milkyway.getMasse(), 121, "Die Milchstrasse sollte die Masse 121 (Sonnenmasse) haben");
});

