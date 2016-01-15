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

QUnit.test("Lisp und Linq testen", function () {

    var liste1 = [2, 5, 15, 13, 12, 27];
    var liste2 = [47, 32, 56, 10, 3, 99];

    ok(mko.lisp.Equals([], []), "Equals hat zwei leere Listen als ungleich eingestuft");
    ok(!mko.lisp.Equals([], liste1), "Equals hat ungleiche Listen als gleich eingestuft");
    ok(mko.lisp.Equals(liste1, liste1), "Equals hat gleiche Listen als ungleich eingestuft");
    ok(!mko.lisp.Equals(liste1, liste2), "Equals hat ungleiche Listen als gleich eingestuft");

    var listeGesamt = mko.lisp.Concat(liste1, liste2);
    ok(mko.lisp.Equals(listeGesamt, [2, 5, 15, 13, 12, 27, 47, 32, 56, 10, 3, 99]), "Concat funktioniert nicht");

    var first = mko.lisp.First(listeGesamt);
    equals(first, 2, "First funktioniert nicht");

    var last = mko.lisp.Last(listeGesamt);
    equals(last, 99, "Last funktioniert nicht");

    var listeKopflos = mko.lisp.Skip(listeGesamt, 3);
    ok(mko.lisp.Equals(listeKopflos, [13, 12, 27, 47, 32, 56, 10, 3, 99]), "Skip funktioniert nicht");

    var listeSchwanzlos = mko.lisp.Take(listeGesamt, 3);
    ok(mko.lisp.Equals(listeSchwanzlos, [2, 5, 15]), "Take funktioniert nicht");


    var alleDurch3tlb = mko.lisp.Where(listeGesamt, function (z) { return z % 3 === 0 });
    deepEqual(alleDurch3tlb, [15, 12, 27, 3, 99], "Where funktioniert nicht");

    var alleDurch30tlb = mko.lisp.Map(alleDurch3tlb, function (z) { return z * 10 });
    deepEqual(alleDurch30tlb, [150, 120, 270, 30, 990], "Where funktioniert nicht");
});