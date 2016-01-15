
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

QUnit.test("Convert Romzahl", function () {

    var Arab = mko.algo.RomToArab('MDCLXVI');
    equal(Arab, 1666, "Die Zahl MDCLXVI wurde von RomToArab falsch berechnet");


    //var Neu = mko.algo.zuef('D', 'M', 0);
    //deepEqual(Neu, { NeuerZustand: 'M', NeuerWert: 500 }, "zuef hat Folge DM falsch verarbeitet");
});

QUnit.test("PrimeTest", function () {

    ok(mko.algo.PrimTest(2), "2 als Primzahl nicht erkannt");
    ok(!mko.algo.PrimTest(9), "9 fälschlich als Primzahl erkannt");
    ok(!mko.algo.PrimTest(41 * 51), '' + (41 * 51) + " fälschlich als Primzahl erkannt");
    ok(mko.algo.PrimTest(53), "51 als Primzahl nicht erkannt");

});


// Test einer asynchronen Methode !
QUnit.asyncTest('PrimeScan', function () {

    mko.algo.PrimScan(1, 10000,
        // done
        function (Cancellationtoken, PrimNums) {

            ok(!Cancellationtoken.stop);
            ok(true);
            QUnit.start();
        },

        // fail
        function (err) {
            ok(false, err);
            QUnit.start();
        },

        // progress info
        function (begin) {
            ok(true);
            console.log("Primzahlscanner jetzt bei " + begin);
        });
});

QUnit.test("PredSuccRatio", function () {


    mko.algo.PredSuccRatio([2, 4, 6, 8, 10],
        function (CancellationToken, resultList) {
            ok(!CancellationToken.stop);
            equal(resultList.length, 3, "Ergebnisliste unkorrekt");
        },

        function (err) {
            ok(false, err);
            QUnit.start();
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
