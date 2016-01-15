//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 12.5.2015
//
//  Projekt.......: HTML5
//  Name..........: b04__Truthiness.js
//  Aufgabe/Fkt...: Was interpretiert JavaScript als false, und was als true.
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

function Boolean_Truthiness() {

    // Sieben Werte werden im Kontext eines boolschen Ausdrucks als der Wert false interpretiert (falsy):
    console.assert(!false, ErrMsgFalseAssertion('!false'));
    console.assert(!0, ErrMsgFalseAssertion('!0'));
    console.assert(!-0, ErrMsgFalseAssertion('!-0'));
    console.assert(!"", ErrMsgFalseAssertion('!""'));
    console.assert(!NaN, ErrMsgFalseAssertion('!NaN'));
    console.assert(!null, ErrMsgFalseAssertion('!null'));
    console.assert(!undefined, ErrMsgFalseAssertion('!undefined'));

    // Alle anderen Werte werden im Kontext boolscher Ausdrücke als True interpretiert
    console.assert("@?$!", ErrMsgFalseAssertion('"@?$!"'));

}
