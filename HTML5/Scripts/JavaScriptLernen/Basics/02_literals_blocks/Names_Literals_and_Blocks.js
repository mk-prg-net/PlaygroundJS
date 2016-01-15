//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 11.05.2015
//
//  Projekt.......: HTML5
//  Name..........: b02_Names_and_Blocks.js
//  Aufgabe/Fkt...: Grundbausteine wie Namen, Literale und Blöcke
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

function NameLiteralsBlocks() {

    console.log("NameLiteralsBlocks");

    // ANWEISUNGEN
    // Eine Anweisung ist ein zur Laufzeit des Programmes ausführbarer Befehl, der den Zustand des Computersystems ändern kann.
    // JavaScript Anweisungen werden mit einem Semikolon beendet. Die kleineste Anweisung ist die leere Anweisungen, welche auch die 
    // geringsten Auswirkungen auf das Conmputersystem hat- keine:
    ;    

    // Eine Deklarationsanweisung reserviert ein Stück Arbeitsspeicher, und macht ihn unter einem Namen verfügbar- dem Variablenname.
    // Dies geschieht, indem dem Namen auf der linken Seite ein Wert mittels eines Gleichheitszeichens auf der rechten Seite zugewiesen wird:
    EinStueckSpeicherFuerMich = 41;

    // NAMEN
    // Bei der Bildung von Namen folgt JavaScript den üblichen Konventionen von Programmiersprachen:
    // Nur alphanummerische Zeichen inklusive _ und $ sind erlaubt
    Name_der_1en_Variable = 0;

    // Groß- Kleinschreibung ist in JAvaScript von Bedeutung !
    name_der_1en_Variable = 100;

    // Variablen mit $-Zeichen erfreuen sich in letzter Zeit großer Beliebtheit
    $Preis = true;

    //... sie werden oft als Kürzel großer Bibliotheksobjekte genutz
    // Folgende Zeile ist gefährlich, wenn jQuery.noConflikt() nicht vorher durchgeführt wurde
    $ = {/* Definition des Objektinhaltes */};

    console.assert(Name_der_1en_Variable != name_der_1en_Variable);

    // Bei der Namensvergabe sollten übliche Konventionen zu berücksichtigt werden: Private Variablen (Implementierungsdetails eines Moduls)
    // beginnen mit einem Unterstrich
    _eine_private_Variable = 0;


    // BLÖCKE
    // Blöcke sind duch geschweifte Klammern {...} begrnzte Abschnitte in Javascript, die Anweisungslisten und weitere Blöcke enthalten können.
    // Es gibt verschiedene Arten von Blöcken:

    // --- NAMESPACES
    // Namensräume ermöglichen die Strukturierung (Bildung von Hierarchien) auf der Menge der zu vergebenden Namen

    // Anlegen neuer Variablen in einem Namespace
    MeinNamespace = {
        Name_der_1en_Variable: 99,
        _eine_private_Variable: 199
    };

    console.assert(Name_der_1en_Variable != MeinNamespace.Name_der_1en_Variable, ErrMsgFalseAssertion('Name_der_1en_Variable != MeinNamespace.Name_der_1en_Variable'));
    console.assert(_eine_private_Variable != MeinNamespace._eine_private_Variable, ErrMsgFalseAssertion('_eine_private_Variable != MeinNamespace._eine_private_Variable'));

    // Die Dynamik von JavaScript zeigt sich z.B. in der Möglichkeit, den Inhalt solcher Namespaceblöcke im nachhinein zu erweitern:
    MeinNamespace.eine_weitere_Variable = 314;

    console.assert(MeinNamespace.eine_weitere_Variable == 314, ErrMsgFalseAssertion('MeinNamespace.eine_weitere_Variable == 314'));
    console.dir(MeinNamespace);

    // --- FUNKTIONSBLÖCKE
    // Unterhalb des globalen Kontextes eines JavaScripts können mit Funktionsblöcken benannte Unterprogramme geschaffen werden
    AnzahlUnterprogrammaufrufe = 0;

    function Mein_1es_Unterprogramm() {

        AnzahlUnterprogrammaufrufe += 1;
        console.log(AnzahlUnterprogrammaufrufe.toString() + "Aufruf vom Unterprogramm");
    }

    // Unterprogramm wiederholt aufrufen
    console.log("Blöcke")
    Mein_1es_Unterprogramm();
    Mein_1es_Unterprogramm();

    // --- Fehlerbehandlungsblöcke
    // Fehlerbehandlungsblöcke registrieren für eine Liste von Anweisungen eine zentrale Fehlerbehandlung.
    // Tritt ein Fehler innerhalb des Blocks auf, dann wird 

    try {
        console.log("Vor dem Fehler");

        throw "Meine Fehlermeldung";

        console.log("Vor dem Fehler");
    } catch (err) {
        console.warn("Ein Fehler ist aufgetreten");
    } finally {
        // Dieser Zweig wird in jedem Fall durchlaufen
        console.log("finally: hier lnde ich immer.")
    }

    // Weitere Details zu Blöcken liefern die Module Kontrollstrukturen.js und funktionen.js

    console.log("NameLiteralsBlocks End");
    
}



