//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 12.5.2015
//
//  Projekt.......: HTML5
//  Name..........: b04__Undefined_vs_Null.js
//  Aufgabe/Fkt...: Abgrenzung zwischen dem Zustand undefined einer automatischen Variable und der leeren 
//                  Objektreferenz null
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

function Undefined_vs_Null() {

    console.log("Undefined_vs_Null");

    // Folgende Gleichungen zeigen, das null nicht gleichbedeutend mit undefined ist.
    // Merke: undefined ist ein Zustand einer 'dynamisch typisierten' Variable.
    //        null ist der Wert einer undefinierten Objektreferenz.
    console.assert(typeof undefined === "undefined", ErrMsgFalseAssertion('typeof undefined === "undefined"'));
    console.assert(typeof null === "object", ErrMsgFalseAssertion('typeof null === "object"'));
    console.assert(null == undefined, ErrMsgFalseAssertion('null == undefined'));
    console.assert(!(null === undefined), ErrMsgFalseAssertion('!(null === undefined)'));

    console.log("Undefined_vs_Null End");
}
