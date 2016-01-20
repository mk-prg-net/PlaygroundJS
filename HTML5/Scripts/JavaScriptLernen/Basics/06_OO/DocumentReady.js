//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 13.5.2015
//
//  Projekt.......: HTML5
//  Name..........: DocumentReady.js
//  Aufgabe/Fkt...: Initialisierung von Basics.html
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


jQuery.noConflict();

jQuery(document).ready(function () {

    jQuery("#b06_Objektliterale").click(OO_Literal);
    jQuery("#b06_Konstruktor").click(OO_Konstruktor);
    jQuery("#b06_Prototypen").click(OO_Prototypen);
    jQuery("#b06_JSON").click(OO_Json);
    jQuery("#b06_namespaces").click(EmulateNamespaces);
    jQuery("#b06_StaticMembers").click(EmulateStaticMember);

    // Die Testfunktion für unsere Übung als Click- Eventhandeler
    // des Buttuns StartOOue definieren
    jQuery("#StartOOue").click(TestOO_Points);
    
    jQuery("#StartOOPrototypeInheritance").click(AstroPrototypVererbungTest);


});

