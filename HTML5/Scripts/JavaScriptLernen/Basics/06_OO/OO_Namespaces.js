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



function EmulateNamespaces() {

    var ns = GetMyNamespace();

    //var ns2 = my2 || {};

    var x = ns1.Add(2, 3);


    // Namespace um eine Methode erweitern
    ns.Add = function (a, b) {
        return a +b;
    }

    UP1();

    // Anwenden einer Verallgemeinerten Zugriffsfunktion auf Namespaces
    var ns2 = GetNamespace("yours", "subspace");
    var ns3 = GetNamespace("yours", "subspace", "subsubspace");

    ns2.Add = function (a, b) {
        return a * a + b * b;
    }

    ns3.Add = function (a, b) {
        return a * a * a + b * b * b;
    }

    UP2();
}


function UP1() {

    // Zugriff auf den Namespace
    var ns = GetMyNamespace();

    var res = ns.Add(2, 3);
    var res = my.subspace.Add(4, 5);

}


function UP2() {

    // Zugriff auf Namespace mit verallgemeinerter Methode
    var ns = GetNamespace("yours", "subspace");
    var ns2 = GetNamespace("yours", "subspace", "subsubspace");

    var res = ns.Add(2, 3);
    var res1 = ns2.Add(2, 3);

    var res3 = yours.subspace.Add(10, 20);
    var res4 = yours.subspace.subsubspace.Add(10, 20);
}

