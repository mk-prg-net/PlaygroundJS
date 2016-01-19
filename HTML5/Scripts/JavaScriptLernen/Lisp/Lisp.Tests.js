//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 15.6.2015
//
//  Projekt.......: HTML5
//  Name..........: Lisp.Tests.js
//  Aufgabe/Fkt...: Qunit-Tests der Lisp- Funktionen
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

QUnit.test("Lisp und Linq testen", function (assert) {

    var liste1 = [2, 5, 15, 13, 12, 27];
    var liste2 = [47, 32, 56, 10, 3, 99];

    assert.ok(mko.lisp.Equals([], []), "Equals sollte zwei leere Listen als gleich betrachten");
    assert.ok(!mko.lisp.Equals([], liste1), "Equals sollte ungleiche Listen als ungleich erkennen");
    assert.ok(mko.lisp.Equals(liste1, liste1), "Equals sollte gleiche Listen als gleich erkennen");
    assert.ok(!mko.lisp.Equals(liste1, liste2), "Equals sollte ungleiche Listen als ungleich erkennen");

    var listeGesamt = mko.lisp.Concat(liste1, liste2);
    ok(mko.lisp.Equals(listeGesamt, [2, 5, 15, 13, 12, 27, 47, 32, 56, 10, 3, 99]), "Concat funktioniert nicht");

    var first = mko.lisp.First(listeGesamt);
    assert.equal(first, 2, "First liefert das erste Listenelement");

    var last = mko.lisp.Last(listeGesamt);
    assert.equal(last, 99, "Last liefert das letzte Listenelement");

    var listeKopflos = mko.lisp.Skip(listeGesamt, 3);
    assert.ok(mko.lisp.Equals(listeKopflos, [13, 12, 27, 47, 32, 56, 10, 3, 99]), "Skip überspringt die ersten drei Listenelemente und liefert den Rest");

    var listeSchwanzlos = mko.lisp.Take(listeGesamt, 3);
    assert.ok(mko.lisp.Equals(listeSchwanzlos, [2, 5, 15]), "Take liefert die ertsten drei Listenelemente");


    var alleDurch3tlb = mko.lisp.Where(listeGesamt, function (z) { return z % 3 === 0 });
    assert.deepEqual(alleDurch3tlb, [15, 12, 27, 3, 99], "Where filtert alle durch 3 teilbaren");

    var alleDurch30tlb = mko.lisp.Map(alleDurch3tlb, function (z) { return z * 10 });
    assert.deepEqual(alleDurch30tlb, [150, 120, 270, 30, 990], "map bildet alle Elemente einer Liste auf eine Liste von Funktionswerten ab");
});