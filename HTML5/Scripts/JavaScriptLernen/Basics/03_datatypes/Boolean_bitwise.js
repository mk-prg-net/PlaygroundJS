//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 12.5.2015
//
//  Projekt.......: HTML5
//  Name..........: b04_Boolean_bitwise.js
//  Aufgabe/Fkt...: Demo der bitweisen boolschen Operatoren
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

function Boolean_bitwise() {
    var A = 5   // 0101
    var B = 11  // 1011

    // AND
    var res = A & B;  // 0001
    console.assert(res === 1, ErrMsgFalseAssertion('res === 1'));

    // OR
    res = A | B;      // 1111 
    console.assert(res === 15, ErrMsgFalseAssertion('res === 15'));

    // XOR
    res = A ^ B;      // 1110
    console.assert(res === 14, ErrMsgFalseAssertion('res === 14'))

    res = ~A;         // 1111 1111 1111 1111 1111 1111 1111 1010
    console.assert(res === -6, ErrMsgFalseAssertion('~A !== 10'));

    // Left- Shift
    res = A << 2;     // 10100
    console.assert(res === 20, ErrMsgFalseAssertion('res === 20'));

    // Right- Shift
    res = A >> 2;     // 0001
    console.assert(res === 1, ErrMsgFalseAssertion('res === 1'));

    // Anwendung: Zahl als Binärstring ausgeben
    var txt = printBinary(5);
    console.assert(txt === "00000000000000000000000000000101", ErrMsgFalseAssertion('txt === "00000000000000000000000000000101"'));

}

function printBinary(intVal) {
    // Tastet den int- wert mittels binärer Operationen ab und erzeugt so eine Binärdatstellung
    // Achtung: Binärwerte liegen als 

    var mask = 1;
    var binString = "";
    for (var i = 0; i < 32; i++) {
        if (mask & intVal) {
            binString = "1" + binString;
        } else {
            binString = "0" + binString;
        }

        // Bit in Maske um eine Position nach links schieben.
        mask <<= 1;
    }

    return binString;
}

