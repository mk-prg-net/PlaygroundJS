//<unit_header>
//----------------------------------------------------------------
// Copyright 2016 Martin Korneffel
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 23.2.2016
//
//  Projekt.......: HTML5
//  Name..........: OO_Literal.js
//  Aufgabe/Fkt...: Arten der Objekterzeugung, Rolle der Prototypen
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


QUnit.test('Objekte und Objektliterale', function (assert) {
    "use strict";

    function TestCreatedObjectAndPrototype(obj, prototype, countEnumProperties, strContructorMethod) {
        assert.notStrictEqual(obj, null, strContructorMethod + " sollte ein Objekt erzeugen");
        if (prototype != null) {
            var prototypeDescriptor = "Object.prototype";
            if (prototype != Object.prototype) {
                prototypeDescriptor = prototype.toString();
            }
            assert.strictEqual(Object.getPrototypeOf(obj), prototype, strContructorMethod + " sollte ein Objekt erzeugen, dessen __proto__ Eigenschaft auf " + prototypeDescriptor + " verweist");
        } else {
            assert.strictEqual(Object.getPrototypeOf(obj), null, strContructorMethod + " sollte ein Objekt ohne Prototypeobjekt erzeugen");
        }
        assert.equal(Object.getOwnPropertyNames(obj).length, countEnumProperties, strContructorMethod + " sollte ein Objekt mit " + countEnumProperties + " aufzählbare Eigenschaften erzeugen");
    }


    console.log("OO_Literal");

    // Object ist ein Funktionsobjekt !     
    // Die Funktion Object() erzeugt ein neues Objekt, und gibt dieses zurück. 
    var o0 = Object.call(null);
    TestCreatedObjectAndPrototype(o0, Object.prototype, 0, "Object.call(null)");

    //o00 = Object();
    //TestCreatedObjectAndPrototype(o00, Object.prototype, 0, "Object()");    

    // Object ist eine spezielle From von Funktionsobjekt: eine Konstruktorfunktion
    // Die Semantik des new Aufrufes entspricht der bei der Konstruktion von o0
    var o1 = new Object();
    TestCreatedObjectAndPrototype(o1, Object.prototype, 0,  "new Object()");

    // Alternativ zum Aufruf von new Object() ist die Erzeugung mittels leerem Objektliteral:
    var o2 = {};
    TestCreatedObjectAndPrototype(o2, Object.prototype, 0, "{}");

    // Erweitern eines neuen Objektes um Member
    o2.X = 1;
    o2.Y = 1;
    TestCreatedObjectAndPrototype(o2, Object.prototype, 2, "{X: 1, Y: 1}")

    o2.R = function () { return this.X * this.X + this.Y * this.Y };
    TestCreatedObjectAndPrototype(o2, Object.prototype, 3, "{X: 1, Y: 1, R: function()...}")

    // Funktionsobjekte wie Object() verwalten über ihre Eigenschaft Object.prototype ein Objekt, auf das all
    // mittels Object erzeugten Objkete über ihre __proto__ Eigenschaft verweisen.
    // Object.prototype === new Object().__proto__
    assert.strictEqual(Object.prototype, Object.getPrototypeOf(new Object()), "In JavaScript gilt: Object.prototype === new Object().__proto__");

    // Objekt ohne Prototyp
    var o3 = Object.create(null);
    TestCreatedObjectAndPrototype(o3, null, 0, "Object.create(null)");

    // Objekt mit einem vorkonfigurierten Objekt als Prototyp
    var o4 = Object.create(o2);

    TestCreatedObjectAndPrototype(o4, o2, 0, "Object.create(o2)");

    assert.strictEqual(o4.X, 1, "o4 sollte über seinen Prototypen o2 bereits über eine Eigenschaft X mit dem Wert 1 verfügen");
    o2.X = 0;
    assert.strictEqual(o4.X, 0, "Eine Änderung an der Prototypeigenschaft o2.X ist auch über o4.X sichtbar.");

    o4.X = 100;
    assert.ok(o4.X === 100 && o2.X === 0 && Object.getPrototypeOf(o4).X === 0, "Das Zuweisen an eine Eigenschaft X, die ursprünglich aus dem Prototyp o2 stammt, bewirkt ein Anlegen dieser in o4. o2.X bleibt unverändert und stellt einen Initialwert von X dar.");

    // In JavaScript existiert ein Dictionary/Objekt Dualismus !
    var o5 = Object.create(o2);

    o5["X"] = 2;
    o5["Y"] = 3;
    
    assert.ok(o5.X === o5["X"] && o5.Y === o5["Y"], "Wg. Dictionary/Object Dualismus gilt : o5.X === o5[\"X\"] && o5.Y === o5[\"Y\"]");

    // Wg. des Dualismus können alle Eigenschaften eines Objektes mittels for ... in Schleife aufgelistet werden
    console.log("Alle Eigenschaften von Point2");

    var all_properties_of_o5 = [];

    for (let prop in o5) {
        console.log(prop);
        all_properties_of_o5.push(prop);
    }

    assert.deepEqual(all_properties_of_o5, ["X", "Y", "R"], "Auflistung aller Member von o5 mittels for ... in Schleife wg. Dict/Obj Dualismus möglich. Sollte X, Y und R liefern.");

    // Die Namen aller Member können alternativ in einem Array durch Object.keys abgerufen werden. 
    // Achtung: Object.keys listet nicht die Eigenschaften des Prototypen auf im Gegensatz zur for ... in Schleife.
    // ECMA5: https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    assert.deepEqual(Object.keys(o5), ["X", "Y"], "ECMA5 Object.keys(o5) sollte die Liste [\"X\", \"Y\"] liefern. Member des Prototypen werden nicht berücksichtigt !");  

    // Prüfen, ob einzelne Member vorhanden sind mittels in- Operator
    assert.ok("R" in o5, "Der in- Operator sollte die Existenz der Eigenschaft R bestätigen: \"R\" in o5");
    
    console.log("OO_Literal Ende");
})
