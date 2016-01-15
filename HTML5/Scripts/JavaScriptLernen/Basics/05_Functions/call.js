//"use strict"
//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 24.5.2015
//
//  Projekt.......: HTML5
//  Name..........: call.js
//  Aufgabe/Fkt...: Aufruf einer Obejktmethode mit einem anderen Empfänger
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

var X = 100;
var Y = 200;

function call_test() {

    console.log("call");


    function DEuklid() {
        return Math.sqrt(this.X * this.X + this.Y * this.Y);
    }

    // Anlegen von Objekten, die eine Eigenschaft D mittels DEuklid berechnen
    var objP1 = { X: 1, Y: 1, D: DEuklid };
    var objP2 = { X: 2, Y: 3, D: DEuklid };
    var objP3 = { name: "Messpunkt1", X: 2, Y: 3, Z: 7, D: DEuklid };

    // Übergabe des Ausführungskontextes über this


    // Im strict- Modus (verfügbar am ES5) kann nicht direkt auf den
    // globalen Context zugegriffen werden.
    var objGlob = DEuklid();

    // Deshalb ... hier wird in this das globale Objekt (z.B. window) übergeben
    window.D = DEuklid;

    DEuklid.call(window);

    // scheitert genauso wie Zugriff auf this in DEuklid im strict- mode
    //this.D = DEuklid;

    var objGlob = window.D();

    // ... und hier objP1
    var objP1_d = objP1.D();

    // alternative Form mittels call- Methode des Function- Objektes
    var objP11_d = DEuklid.call(objP1);

    // ... und hier objP2
    var objP2_d = objP2.D();

    // ... und hier objP3
    var objP3_d = objP3.D();



    var Vector = function (X, Y, Z) {
        this.X = X;
        this.Y = Y;
        this.Z = Z;
    };

    var Point = function (X, Y) {
        this.X = X;
        this.Y = Y;

        // Der Parser ergänzt die Funktionsdeklaration durch
        // function(this) {...}
        this.EuklidischerAbstand = function () {
            return Math.sqrt(this.X * this.X + this.Y * this.Y);
        };
    }


    var p1 = new Point(1, 1);
    var v1 = new Vector(1, 2, 3);

    // Aufruf der EuklidischerAbstand- Methode über ihr Objekt
    // Parser ersetz Aufruf p1.EuklidischerAbstand()
    // durch EuklidischerAbstand(p1)
    var p1_abststand0 = p1.EuklidischerAbstand();

    // Aufruf der EuklidischerAbstand- Methode mit einem fremden Objekt mittels call !
    // EuklidischerAbstand(v1)
    var v1_projektion0 = p1.EuklidischerAbstand.call(v1);


    var Punktliste = [new Vector(1, 2, 3), new Vector(1, -1, 0), new Vector(3, 2, 5)];

    // In dieser Form wird EuklidischerAbstand mit  document.window als this aufgerufen
    //var Abstandsliste = Punktliste.map(p1.EuklidischerAbstand);

    var Abstandsliste = Punktliste.map(function (p) {
        return p1.EuklidischerAbstand.call(p);
    });


    function stdSer() {
        console.log(this.X);
        console.log(this.Y);

    }

    function TestSer() {
        console.log("test: " + this.X);
        console.log("test: " + this.Y);

    }


    // Dependency Injection
    function CreatePersistentPoint(x, y, serializer) {

        // Implementieren eines "Default- Parameters"
        var ser = stdSer;
        serializer && (ser = serializer);

        return { X: x, Y: y, Ser: ser };
    }

    function CreatePersistentPoint2(x, y, cfg) {
        var ser = stdSer;
        var toString = function () { return "(" + this.X + ", " + this.Y + ")"; };
        if (typeof cfg !== "undefined") {
            // Stadardkonfiguration
            cfg.serializer && (ser = cfg.serializer);
            cfg.toString && (toString = cfg.toString);
        } else {
            ser = stdSer;
        }

        return { X: x, Y: y, Ser: ser, toString: toString };
    }



    var perPoint1 = CreatePersistentPoint(2, 5);
    perPoint1.Ser();

    // Austauschen des Serialisieres
    var perPoint2 = CreatePersistentPoint(7, 13, TestSer);
    perPoint2.Ser();

    var perPoint1_2 = CreatePersistentPoint2(2, 5);
    perPoint1_2.Ser();
    var txtP = perPoint1_2.toString();

    // Austauschen des Serialisieres
    var perPoint2_2 = CreatePersistentPoint2(7, 13, {
        toString: function () { return "[" + this.X + ", " + this.Y + "]"; }
    });
    perPoint2_2.Ser();
    txtP = perPoint2_2.toString();



    console.log("call end");

}