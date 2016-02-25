// Anlegen und Erweitern von Namespaces
// JavaScript bietet keine Namespaces wie C++ oder C# an. Namespaces können aber durch Objkte emuliert werden

function GetMyNamespace() {
    if (typeof my !== 'undefined') {
        // Falls ein my- Objekt schon existiert, wird dieses eingesetzt
    }
    else {
        // andernfalls wird ein neues my- Objekt erstellt
        my = {}
    }
    if ("subspace" in my) {
        // Enthält my bereits den Unternamespace, passiert wieder nichts
    }
    else {
        // sonst wird der Namespace erstellt
        my.subspace = {}
    }

    return my.subspace;

}

// Variante 2 für Namespaces und implementieren von Modulen innerhalb dieser
(function (ns) {

    ns.Add = function (a, b) {
        return a + b;
    }

})(window.ns1 = window.ns1 || {})


QUnit.test("Namensräume emulieren", function (assert) {

    var ns = GetMyNamespace();

    // Namespace um eine Methode erweitern
    ns.Add = function (a, b) {
        return 10*(a + b);
    }

    assert.strictEqual(ns, my.subspace, "GetMyspace sollte den Namensraum my.subspace liefern");
    assert.equal(ns.Add(1, 2), 30, "Im Namensraum ns sollte die Add(1, 3) == 30 sein");
    assert.equal(my.subspace.Add(1, 2), 30, "Im Namensraum my.subspace sollte die Add(1, 3) == 30 sein");
    assert.equal(ns1.Add(1, 2), 3, "Im Namensraum ns1 sollte die Add(1, 3) == 3 sein");



    // Anwenden einer Verallgemeinerten Zugriffsfunktion auf Namespaces
    var ns2 = GetNamespace("yours", "subspace");
    var ns3 = GetNamespace("yours", "subspace", "subsubspace");

    ns2.Add = function (a, b) {
        return a * a + b * b;
    }

    ns3.Add = function (a, b) {
        return a * a * a + b * b * b;
    }

    UP(assert);
});




function UP(assert) {

    // Zugriff auf Namespace mit verallgemeinerter Methode
    var ns = GetNamespace("yours", "subspace");
    var ns2 = GetNamespace("yours", "subspace", "subsubspace");

    assert.strictEqual(ns, yours.subspace, "GetNamespace(\"yours\", \"subspace\") sollte den Namensraum yours.subspace liefern");
    assert.equal(ns.Add(2, 3), 13, "yours.subspace.Add(2, 3) sollte 13 liefern");
    assert.equal(ns2.Add(2, 3), 35, "yours.subspace.subsubspace.Add(2, 3) sollte 35 liefern");
        

}

