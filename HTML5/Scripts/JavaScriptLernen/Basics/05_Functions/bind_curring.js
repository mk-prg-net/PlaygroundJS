
//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 
//
//  Projekt.......: Projektkontext
//  Name..........: Dateiname
//  Aufgabe/Fkt...: Kurzbeschreibung
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



function currying_test() {

    function MulSum(factor, a, b) {
        return factor * (a + b);
    }

    function MulSumOptimiertFuerBind(factor, paar) {
        return factor * (paar[0] + paar[1]);
    }


    var messwerte = [[1, 2], [5, 7], [8, 3], [2, 9]];

    var gain = 1.5;
    // [a, b, c].map(f())
    // => [a -> f(a), b -> f(b), c -> f(c)]
    //  
    var mulSumListe = messwerte.map(function (arg) {
        return MulSum(gain, arg[0], arg[1]);
    });

    var gebundeneMulsum = MulSum.bind(null, gain);
    var gebundeneMulsum2 = MulSum.bind(null, gain, 99);

    // gain wird geändert
    gain = 3.0;

    var res = MulSum(gain, 2, 3);
    var res2 = gebundeneMulsum(2, 3);
    var res3 = gebundeneMulsum2(3);

    var res4 = gebundeneMulsum2(3, 4, 5, 6);


    // Funktioniert nicht, da map nur den 2. Parameter beliefert (der 3. wird ignoriert)
    mulSumListe2 = messwerte.map(MulSum.bind(null, gain));

    mulSumListe3 = messwerte.map(MulSumOptimiertFuerBind.bind(null, gain));

    // fortsetzung des bindens ist Currying: f(a, b) -> x(a, y(b));

}