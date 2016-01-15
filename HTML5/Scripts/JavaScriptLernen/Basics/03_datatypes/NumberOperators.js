//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 12.5.2015
//
//  Projekt.......: HTML5
//  Name..........: b04__NumberOperators.js
//  Aufgabe/Fkt...: Demo der nummerischen Operatoren von JavaScript
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

function NumberOperators() {

    console.log("NumberOperators");

    var sum = 1 + 2;

    var preIncrement = ++sum;
    console.assert(preIncrement === 4 && sum === 4, ErrMsgFalseAssertion('preIncrement === 4 && sum === 4'));

    var postIncrement = sum++;
    console.assert(postIncrement === 4 && sum === 5, ErrMsgFalseAssertion('postIncrement === 4 && sum === 5'));

    var i = 1;
    var seltsamIncrement = sum+++i;

    sum += 1;


    // Kombinierte Zuweisungsoperatoren
    sum += 2;
    sum -= 2;
    sum *= 2;
    sum /= 2;
    sum %= 2;

    // Modulo
    var rest = (41 * 37 + 19) % 37;

    // Unbestimmte Ausdrücke werden zu Nan (Not a Number) evaluiert
    var unbestimmter_Ausdruck = 0 / 0;

    // Die folgenden 4 Behauptungen sind falsch, weil NaN kein Wert ist, und folglich nicht verglichen werden kann
    console.assert(unbestimmter_Ausdruck === NaN, ErrMsgFalseAssertion('unbestimmter_Ausdruck === NaN'));
    console.assert(NaN === Number.NaN, ErrMsgFalseAssertion('NaN === Number.NaN'));

    console.assert(unbestimmter_Ausdruck == NaN, ErrMsgFalseAssertion('unbestimmter_Ausdruck == NaN'));
    console.assert(NaN == Number.NaN, ErrMsgFalseAssertion('NaN == Number.NaN'));


    // ... um auf NaN zu prüfen, gibt es deshalb das Prädikat isNaN
    console.assert(isNaN(unbestimmter_Ausdruck), ErrMsgFalseAssertion('isNaN(unbestimmter_Ausdruck)'));

    // Division durch null ergibt Unendlich
    var div0 = 1 / 0;
    console.assert(div0 === Infinity, ErrMsgFalseAssertion('div0 === Infinity'));
    console.assert(Infinity === Number.POSITIVE_INFINITY, ErrMsgFalseAssertion('Infinity === Number.POSITIVE_INFINITY'));

    div0 = -1 / 0;
    console.assert(div0 === -Infinity, ErrMsgFalseAssertion('div0 === -Infinity'));
    console.assert(div0 === Number.NEGATIVE_INFINITY, ErrMsgFalseAssertion('div0 === Number.NEGATIVE_INFINITY'));
    console.assert(-Infinity === Number.NEGATIVE_INFINITY, ErrMsgFalseAssertion('-Infinity === Number.NEGATIVE_INFINITY'));


    console.log("NumberOperators End");
}
