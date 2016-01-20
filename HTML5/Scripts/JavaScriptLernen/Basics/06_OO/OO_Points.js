// Demo Klassenfabriken und Prototypen


function CreatePoint(x, y) {

    // Objekt mittels Objektliteral erzeugen
    return {
        x: x,
        y: y,
        REuklid: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    };
}


// Einsatz von Prototypen


// Problem: BasisPoiunts als globales Objekt 
// ist ungeschützt, kann von überschrieben werden
BasisPoints = {
    REuklid: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
};

function CreatePointWithPrototype(x, y) {

    // Objekt und Prototyp bilden ein Doppelsystem: {...}-{ Prototyp }

    // Prototyp von newPoint ist Basis
    // Alle newPoints teilen sich den gleichen Prototyp
    var newPoint = Object.create(BasisPoints);

    // Ergebnis von Objekt.create
    // {...}-+{ Prototyp: Basis }
    //       |
    // {...}-+

    console.assert(newPoint.__proto__ === BasisPoints, "Prototypen stimmen nicht überein");
    newPoint.x = x;
    newPoint.y = y;

    return newPoint;   

}

// Verbesserung: Modularisierung mittels IFFE
var PointsMod = PointsMod || (function () {

    // Dient als Prototyp für alle Punkte. Nimmt die Methoden auf
    // Damit teilen sich alle Punkte eine Methodenimplementierung.
    var Basis = {
        REuklid: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    };

    // Implementierung von Points mittels Konstruktorfunktionen
    function _PointWithConstructor(x, y) {

        // Absichern des Aufrufes über new- Operator
        if (!(this instanceof _PointWithConstructor))
            return new _PointWithConstructor(x, y);


        // Jede Funktion erhält als versteckten Parameter this das Objekt geliefert
        // new erzeugt beim Einsatz der Konstruktorfunktion ein neues Objekt und übergibt es in this

        this.x = x;
        this.y = y;
    }

    // Die Runtime von JavaScript setzt als Prototype eines Objektes, das mit einem 
    // Konstruktor erzeugt wird, den Prototype der Konstruktorfunktion ein

    // Die Prototype- Eigenschaft ermöglicht den Zugriff auf den Prototype der Konstruktorfunktion
    _PointWithConstructor.prototype.REuklid = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }


    // Die öffentliche Schnittstelle zum Modul wird zurückgegeben
    return {

        CreatePointWithPrototype: function (x, y) {

            // Prototyp von newPoint ist Basis (wird hier zum Closure)
            // Alle newPoints teilen sich den gleichen Prototyp
            var newPoint = Object.create(Basis);
            newPoint.x = x;
            newPoint.y = y;

            return newPoint;
        },

        PointWithConstructor: _PointWithConstructor
    }

})();


//// Implementierung von Points mittels Konstruktorfunktionen
//function PointWithConstructor(x, y) {

//    // Absichern des Aufrufes über new- Operator
//    if (!(this instanceof PointWithConstructor))
//        return new PointWithConstructor(x, y);


//    // Jede Funktion erhält als versteckten Parameter this das Objekt geliefert
//    // new erzeugt beim Einsatz der Konstruktorfunktion ein neues Objekt und übergibt es in this
    
//    this.x = x;
//    this.y = y;
//}

//// Die Runtime von JavaScript setzt als Prototype eines Objektes, das mit einem 
//// Konstruktor erzeugt wird, den Prototype der Konstruktorfunktion ein

//// Die Prototype- Eigenschaft ermöglicht den Zugriff auf den Prototype der Konstruktorfunktion
//PointWithConstructor.prototype.REuklid = function () {
//    return Math.sqrt(this.x * this.x + this.y * this.y);
//}









function CreateKonto(ktoNr, Inhaber) {

    // Das Guthaben ist dient als Clousure zur Implementierung
    // eines privaten Members
    var Guthaben = 0;

    return {
        // Implementieren nur lesbarer Eigenschaften mittels getter 
        // und Closures
        getKtoNr: function () {
            // ktoNr wird hier zum Closure
            return ktoNr;
        },

        getInhaber: function () {
            // Inhaber wird hier zum Closure
            return Inhaber;
        },

        getGuthaben: function () {
            // Guthaben wird hier zum Closure
            return Guthaben;
        },

        Einzahlen: function (betrag) {
            Guthaben += betrag;
        },

        Abheben: function (betrag) {
            Guthaben -= betrag;
        },
    }
}

function TestOO_Points() {

    // Anlegen von Punkten
    var p1 = CreatePoint(2, 3);
    var p2 = CreatePoint(3.14, 2.72);

    console.assert(p1.x === 2 && p1.y === 3 && p1.REuklid() > 0, "Point Objekt ist unkorrekt");

    // Anlegen und arbeiten mit Konten
    var DonaldsKonto = CreateKonto(4711, "Donald");

    DonaldsKonto.Einzahlen(1000);
    DonaldsKonto.Abheben(450);

    console.assert(
        DonaldsKonto.getKtoNr() === 4711 &&
        DonaldsKonto.getInhaber() === "Donald" &&
        DonaldsKonto.getGuthaben() === 550,
        "Konto funktioniert nicht"
    );

    // Klassenfabrik aus Modul testen
    var p3 = PointsMod.CreatePointWithPrototype(1, 2);
    var d3 = p3.REuklid();

    var p4 = PointsMod.CreatePointWithPrototype(10, 20);
    var d4 = p4.REuklid();

    // Objekte mittels Konstruktoren instanziieren

    var p5 = new PointsMod.PointWithConstructor(3, 4);
    var p6 = new PointsMod.PointWithConstructor(30, 40);

    var d5 = p5.REuklid();
    var d6 = p6.REuklid();


}
