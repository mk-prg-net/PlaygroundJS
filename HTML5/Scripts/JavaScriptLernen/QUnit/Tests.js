
//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 20.5.2015
//
//  Projekt.......: HTML5
//  Name..........: Tests.js
//  Aufgabe/Fkt...: Testen mit QUnit
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

// QUnit wird von der qunit.js- Bibliothek exportiert. Ist der Erweiterungspunkt.
QUnit.test("Convert Romzahl", function (assert) {

    var Arab = mko.algo.RomToArab('MDCLXVI');
    //assert.equal(Arab, 1666, "Für die Romzahl MDCLXVI sollte ein Wert von 1666 berechnet weden.");

    assert.equal(mko.algo.RomToArab("MDLX"), 1561, "MDLX sollte 1560 sein");

    assert.equal(mko.algo.RomToArab('M'), 1000, "M sollte 1000 sein");
    assert.equal(mko.algo.RomToArab('D'), 500, "D sollte 500 sein");
    assert.equal(mko.algo.RomToArab('C'), 100, "C sollte 100 sein");
    assert.equal(mko.algo.RomToArab('L'), 50, "L sollte 50 sein");
    assert.equal(mko.algo.RomToArab('X'), 10, "X sollte 10 sein");
    
    assert.equal(Arab, 1666, "Für die Romzahl MDCLXVI sollte ein Wert von 1666 berechnet weden.");


    //var Neu = mko.algo.zuef('D', 'M', 0);
    //deepEqual(Neu, { NeuerZustand: 'M', NeuerWert: 500 }, "zuef hat Folge DM falsch verarbeitet");
});

QUnit.test("PrimeTest", function (assert) {

    assert.ok(mko.algo.PrimTest(2), "2 sollte als Primzahl erkannt werden");
    assert.ok(!mko.algo.PrimTest(9), "9 Zahlen sollten als nicht Primzahl erkannt werden");
    assert.ok(!mko.algo.PrimTest(41 * 51), '' + (41 * 51) + " sollte als nicht Primzahl erkannt werden");
    assert.ok(mko.algo.PrimTest(53), "51 sollte als Primzahl erkannt werden");

});


// Test einer asynchronen Methode !
QUnit.test('PrimeScan', function (assert) {

    // QUnit wird solange angehalten, bis der die asynchrone Methode endet.
    // assert.async liefert einen Callback zurück, über den QUnit wieder 
    // gestartet werden kann.

    var doneAsync = assert.async(1);

    mko.algo.PrimScan(1, 10000,
        // done
        function (Cancellationtoken, PrimNums) {

            assert.ok(!Cancellationtoken.stop, "Am Ende der asynchronen Methode sollte das Cancellationtoken keinen Stop signalisieren.");
            assert.ok(true, "Wie zu erwarten lief die Primzahlsuche fehlerfrei");
            doneAsync();
        },

        // fail
        function (err) {
            // 
            assert.ok(false, err);
            doneAsync();
        },

        // progress info
        function (begin) {
            assert.ok(true, "eine erfolgreich Frotschrittsanzeige");
            console.log("Primzahlscanner jetzt bei " + begin);
        });
});

QUnit.test("PredSuccRatio", function (assert) {

    // QUnit wird solange angehalten, bis der die asynchrone Methode endet.
    // assert.async liefert einen Callback zurück, über den QUnit wieder 
    // gestartet werden kann.
    var doneAsync = assert.async();

    mko.algo.PredSuccRatio([2, 4, 6, 8, 10],
        function (CancellationToken, resultList) {
            assert.ok(!CancellationToken.stop);
            assert.equal(resultList.length, 3, "Ergebnisliste sollte drei Einträge haben.");
            doneAsync();
        },

        function (err) {
            assert.ok(false, err);
            done();
        },

        function (begin) {
            console.log("PredSuccRatio jetzt bei " + begin);
        });

});

//QUnit.test("Prim und PredSuccRatio", function () {

//    mko.algo.PrimScan(1, 10000,
//       function (Cancellationtoken, PrimNums) {

//           // Weitergabe des Ergebnisses an den nächsten Algorithmus
//           mko.algo.PredSuccRatioWithCancel(Cancellationtoken, PrimNums,
//                   function (CancellationToken, resultList) {
//                       ok(!CancellationToken.stop);
//                       //equal(resultList.lenght, 3, "Ergebnisliste unkorrekt");
//                   },

//                   function (err) {
//                       ok(false, err);
//                       QUnit.start();
//                   },

//                   function (begin) {
//                       console.log("Prim PredSuccRatio jetzt bei " + begin);
//                   });
//       },

//       function (err) {
//           ok(false, err);
//           QUnit.start();
//       },

//       function (begin) {
//           console.log("Primzahlscanner jetzt bei " + begin);
//       });



//});
