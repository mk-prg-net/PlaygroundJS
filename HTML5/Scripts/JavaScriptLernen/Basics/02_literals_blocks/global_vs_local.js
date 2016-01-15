//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 15.10.2014
//
//  Projekt.......: HTML5
//  Name..........: b02_global_vs_local.js
//  Aufgabe/Fkt...: Demo Problematik impliziter Deklaration globaler Variablen.
//                  Motivation für die Deklaration mittels var- Schlüsselwort.
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



//---------------------------------------------------------------------------------------------------------------
// Globale Variablen einrichten

globale_Variable = 99;
First = true;

MeineWichtige = "sehr wichtig";
MeineWichtige2 = "sehr wichtig";

// Sicher des Verweises auf den global Scope in einer globalen Variable
globalScope = this;

function StrictMode() {
    // ECMA Script 5 stellt einen Schalter bereit, über den 
    // fatale Konstrukte von JS abgeschaltet werden
    "use strict"

    var guteDeklaration = 99;

    // Deklaration globaler variablen ist in ECMA5 innerhalb eines Scriptes nicht mehr erlaubt
    //schlechteDeklaration = 100;

}

// Demo eines Falles, wo use strict der "Spielverderber" ist
// Baut eine spezifische Laufzeitumgebung auf
function Init() {

    // Das Anlegen globaler Variablen für die Laufzeitumgebung ist 
    // Aufgabe der Initmethode
    InstanceCounter = 0;

    GolobalAdd = function (a, b) {
        return a + b;
    }

}

function InitTest() {

    InstanceCounter = 0;

    GolobalAdd = function (a, b) {
        console.log("a " + a);
        return a + b;
    }

}

function Application(Init) {
    Init();
    console.log("Die Anwenug wird ausgeführt");

    InstanceCounter += 1;

    // ...

    InstanceCounter += 1;

}


function GlobalVsLocal() {

    console.log("GlobalVsLocal");

    StrictMode();

    // Anwendung testen
    Application(InitTest);

    // ... nun damit arbeiten
    Application(Init);

    console.log(bin_aus_innerem_block);


    GlobalVsLocal_sub();
    console.assert("number" == typeof bin_auch_global);

    bin_auch_global += 100;

    GlobalVsLocal_sub();
    console.assert("number" == typeof globale_Variable);

    {
        var bin_aus_innerem_block = 299;
        bin_aus_innerem_block += 1;
    }

    // Kann das wahr sein ? Ja, leider ! Nennt man auch hoisting (Anheben des Gültigkeitsbereiches).
    // Parser verschiebt alle Deklarationen, auch aus inneren Blöcken an den Anfang der function.
    // Nur der function- Block kann einen Gültigkeitsbereich einschränken- alle anderen nicht !
    console.assert(bin_aus_innerem_block === 300);

    // Will man einen Block mit echten lokalen Variablen schaffen, dann muß man sich einen 
    // IFFE = Immediatly Invoked Function Expression basteln:

    var bin_aus_IFFE = 199;

    (function () {

        var bin_aus_IFFE = 499;
        bin_aus_IFFE += 1;
        
    })();

    // Ab ECMA6 gibts abhilfe gegen Hoisting
    (function () {
        "use strict"
        // Mit dem neuen Schlüsselwort let gelingt nun die Deklaration echter lokaler Variablen. Allerdings sollte der 
        // strict- Mode eingeschaltet sein ...
        let meine_echte_lokale = 99;
        console.assert(meine_echte_lokale === 99, "meine_echte_lokale sollte hier noch 99 sein");
        {

            let meine_echte_lokale = 199;
            console.assert(meine_echte_lokale === 199, "meine_echte_lokale sollte hier 199 sein");

        }

        console.assert(meine_echte_lokale === 99, "meine_echte_lokale sollte hier wieder 99 sein");

    })();

    // 
    //console.assert('undefined' == typeof bin_aus_IFFE );
    console.assert(bin_aus_IFFE === 199);
    console.log("GlobalVsLocal End");
}




function GlobalVsLocal_sub() {

    globale_Variable += 100;

    // Gnadenlos wird die globale Variable überschrieben
    MeineWichtige = true;

    // globale wird durch lokale überdeckt
    var MeineWichtige2 = true;

    // Über this an in diesem Unterprogramm Zugriff auf den globalen Scope
    this.MeineWichtige2 = "sehr sehr wichtig";

    console.assert(globalScope.MeineWichtige2 === this.MeineWichtige2, "Problem mit globalScope");

    // ohne var deklarierte Variablen innerhalb einer function sind 
    // auch global !
    if (First) {
        First = false;
        console.assert("undefined" == typeof bin_auch_global);
        bin_auch_global = 77;
    } else {
        console.assert("number" == typeof bin_auch_global);
    }

    // echte lokale Variablen werden mit var deklariert ! 
    console.assert("undefined" == typeof bin_lokal);
    var bin_lokal = 100;

    console.log("Werte der Variablen");
    console.log("globale_Variable: " + globale_Variable.toString());
    console.log("bin_auch_global : " + bin_auch_global.toString());
    console.log("bin_lokal       : " + bin_lokal.toString());

}
