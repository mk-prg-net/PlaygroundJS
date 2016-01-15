//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 20.5.2015
//
//  Projekt.......: HTML5
//  Name..........: closures.js
//  Aufgabe/Fkt...: Erweitern des Scopes einer Funktion auf die lokalen Variablen der 
//                  umschließenden Funktion mittels Closures.
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


function ClosureTest() {
    console.log("Closure");

    var zahlen = [3, 5, 7, 9, 11, 13, 15, 18, 21, 25, 29];

    var alleDurch3teilbare = [];

    // Closure bezeichnet das Binden von Variablen in den Scope (Gültigkeitsbereich) einer Funktion,
    // die aus dem Gültigkeitsbereich der der sie einschliessenden Funktion stammt (hier alleDurch3teilbare in
    // der annonymen Funktion innerhalb von forEach)
    zahlen.forEach(function (z) {
        if (z % 3 === 0) {
            // CLOSURE: alleDurch3teilbare ist lokale Variable aus dem Scope der umschließenden
            // Funktion ClosureTest. Beim Aufruf dieser anonymen Callback- Methode wird 
            // alleDurch3teilbare dem Scope der anonymen Funktion hinzugefügt.
            alleDurch3teilbare.push(z);
        }
    })

    console.log(JSON.stringify(zahlen));

    // Eine Fabrikmethode für Funktionsobjekte zur Umrechnung von Längeneinheiten in die Basiseinheit Meter
    function Length(Unit) {
        // Rückgabe eines Funktionsobjektes, das einen Wert, gemessen in einer Einheit, in die Basiseinheit umrechnet zurückgibt.
        return function (l_in_unit) {
            // CLOSURE: Unit ist Parameter der umschließenden Funktion. Bei der Rückgabe dieser
            // anonymen Funktion wird Unit dem Scope dieser Funktion hinzugefügt.
            return Unit * l_in_unit;
        }
    }

    var LengthUnits = {
        mm: 0.001,
        cm: 0.01,
        m: 1,
        km: 1000
    };

    // ... jezt können wir passende Umrechnungsmethoden erzeugen
    var Millimeter = Length(LengthUnits.mm);
    var Centimeter = Length(LengthUnits.cm);
    var Meter = Length(LengthUnits.m);
    var Kilometer = Length(LengthUnits.km);


    // ------------------------------------------------------
    // Übung: Klassenfabrik für Vektoren
    // CreateVector(x, y) -> function(ix)
    //       function(0) -> x
    //       function(1) -> y


    function CreateVektor(x, y) {
        return function (ix) {
            //if (ix === 0)
            //    return x;
            //else
            //    return y;

            switch (ix) {
                case 0:
                    return x;
                case 1:
                    return y;
                default: return undefined;
            }
        }
    }

    // Test

    var p1_1 = CreateVektor(1, 1);
    var x = p1_1(0);
    var y = p1_1(1);

    var p3_7 = CreateVektor(3, 7);
    var x = p3_7(0);
    var y = p3_7(1);

    y = p3_7("hallo");
    
    var x = p1_1(0);
    var y = p1_1(1);

    // alternative

    function Vector(x, y, z) {
        return function (index) {
            return { 0: x, 1: y, 2: z }[index];
        }
    }

    function Vector2(x, y, z) {
        return function (index) {
            var mem = [];
            mem[0] = x;
            mem[1] = y;
            mem[2] = z;
            return mem[index];
        }
    }

    v1 = Vector(2, 3);
    console.log(v1(0));
    console.log(v1(1));

    v2 = Vector(2, 3, 4);
    console.log(v2(0));
    console.log(v2(1));
    console.log(v2(2));


    v3 = Vector2(2, 3, 4);
    console.log(v3(0));
    console.log(v3(1));
    console.log(v3(2));

    console.log(v3("hallo"));



    console.log("Closure End");
}

