//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 12.5.2015
//
//  Projekt.......: HTML5
//  Name..........: b04__BooleanOperators.js
//  Aufgabe/Fkt...: Demo der boolschen Operatoren.
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

function BooleanOperators() {

    console.log("BooleanOperators");

    // AND (Konjunktion)
    var ich_fahre_bahn = true;
    var ich_habe_einen_gueltigen_fahrausweis = false;
    var ich_muss_erhoehtes_fahrgeld_zahlen = ich_fahre_bahn && !ich_habe_einen_gueltigen_fahrausweis;
    console.assert(ich_muss_erhoehtes_fahrgeld_zahlen, 'ich_muss_erhoehtes_fahrgeld_zahlen');

    // OR (Disjunktion)
    var ich_fahre_auto = false;
    var ich_bin_mobil = ich_fahre_auto || ich_fahre_bahn;
    console.assert(ich_bin_mobil, ErrMsgFalseAssertion('ich_bin_mobil'));

    // Not (Negation)
    var ich_bin_politisch_korrekt = false;
    console.assert(!ich_bin_politisch_korrekt, ErrMsgFalseAssertion('!ich_bin_politisch_korrekt'));

    // Bedingte Ausführung durch lazy evaluation
    // Einsatz von AND und OR als kompakte Kontrollstruktur

    // Meldung nur dann, wenn ich kein Auto fahre
    ich_fahre_auto || console.log("Bin kein Autofahrer");

    // MEdlung nur dann, wenn ich Bahn fahre
    ich_fahre_bahn && console.log("Bin ein Bahnfahrer");


    // ein gebasteltes if (implementierung durch funktionen !)
    var bedingung = true;

    bedingung && (function () {
        console.log("if Bedingung erfüllt");
    })();

    console.log("BooleanOperators End");

}
