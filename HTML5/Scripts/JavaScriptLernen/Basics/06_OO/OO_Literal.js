function OO_Literal() {

    console.log("OO_Literal");

    // Objektliterale: Eigenschaften und Methoden als Schlüssel- Wertzuordnungen darstellen
    var Point = {

        // Eigenschaften: 
        X: 0,
        Y: 0,

        // Methode R, berechnet euklidischen Abstand
        // 
        R: function () {
            return Math.sqrt(this.X * this.X + this.Y * this.Y);
        }
    };

    // Objektorientierter Zugriff über Eigenschaften und Methoden
    Point.X = 1;
    Point.Y = 1;

    var w2 = Point.R();

    // Alternative Zugriff über Schlüssel- Wert Zuordnung
    Point["X"] *= 3.14;
    Point["Y"] *= 3.14;
    var w3 = Point["R"](); // Funktionsaufruf !

    // Hinzufügen neuer Member zu einer Dictionary kann auch in Objektsyntax erfolgen:
    var Point2 = {};

    // Neuen Eintrag der Dictionary hinzufügen
    Point2["X"] = 10.0;

    // Alternative Syntax: neue Eigenschaft einem Objekt hinzufügen
    Point2.Y = 20.0

    // Prüfen, ob eine Eigenschaft bereits angelegt wurde mittels in- Operator
    var hasProperty = "Y" in Point2;
    console.assert(hasProperty, "Eigenschaft Y existiert noch nicht");
    
    if (!("Z" in Point2)) {
        Point2.Z = 0.0;
    }

    // Auflisten aller Eigenschaften eines Objektes mittels for ... in Schleife
    console.log("Alle Eigenschaften von Point2");
    for (let prop in Point2) {
        console.log(prop);
    }

    // Alle Namen von Objekteigenschaften mittels ECMA5 Funktionen abrufen
    // https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    let allPropsOfPoint2 = Object.keys(Point2);

    Point2[0] = "Hallo";
    Point2[1] = "Welt";

    var res = Point2.length;

    res = Point2[0];

    var Point3 = [];
    Point3[0] = 99;
    Point3[1] = 199;
    Point3["X"] = 299;

    res = Point3.length;

    Point2.R = function () {
        return Math.sqrt(this.X * this.X + this.Y * this.Y);
    }

    Point2.R2 = function () {
        // Abstandsfunktion aus R wiederverwenden
        //return Point.R(); falsch, da hier R von Point das Ergebnis ist
        return Point.R.call(this);
    }

    // Der Zugriff auf die Member kann in einer beliebigen Syntax erfolgen -> Dictionary/Objekt Dualismus !
    var Abstand = Math.sqrt(Point2.X * Point2.X + Point2["Y"] * Point2["Y"]);

    console.log("OO_Literal Ende");
}
