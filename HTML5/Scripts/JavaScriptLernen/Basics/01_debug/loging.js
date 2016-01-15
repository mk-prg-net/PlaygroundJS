//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 11.5.2015
//
//  Projekt.......: HTML5
//  Name..........: b01_loging.js
//  Aufgabe/Fkt...: Demo Möglichkeiten der Aufzeichnung während der Programmausführung.
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


function DemoConsole() {

    

    // gute Doku unter 
    // https://developer.chrome.com/devtools/docs/console-api

    console.clear();

    // Über das console- Objekt besteht Zugriff auf ein Logprotokoll in der Laufzeitumgebung.
    // In dieses können für zwecke der Fehlersuche und Ablaufverfolgung Einträge aus den Scripten 
    // vorgenommen werden
    console.log("Hallo JavaScript- Entwickler: es ist " + Date.now().toLocaleString());

    // .debug ist alias für .log
    console.debug("Mit debug:", "Hallo JavaScript- Entwickler: es ist " + Date.now().toLocaleString());

    // Wie log, wird aber optisch als Warnmeldung im log hervorgehoben.
    var limitDownloads = 500.0;
    console.warn("monatl. Download- Limit erreicht: (%d) MB", limitDownloads);

    // Objektstrukturen in der Console ausgeben: Struktur des Html- Dokuments als Objektliteral ausgeben
    console.dir(document.body);

    // Ausgabe einer selbsdefinierten Struktur
    var Point = { X: 99, Y: 123 };
    console.dir(Point);


    console.assert(Math.sqrt(Point.X * Point.X + Point.Y * Point.Y) < 150, "Der zulässige Abstand wurde überschritten");

    // Auch .log kann Objektstrukturen ausgeben:
    console.log("Html- Dokbaum:", document.body, "Selbstdef. Objekt:", Point);    

    // 

}

//DemoConsole();