// Klasse für Kreise

(function () {

    var ns = GetNamespace("BVB", "graph");

    // 1. Konstruktorfunktion
    ns.Circle = function (M, R, cfg) {
        // 1.1 Absichern, das mit new aufgerufen wurde
        if (!(this instanceof ns.Circle))
            return new ns.Circle(M, R, cfg);

        // 1.2 Konstruktor der Basisklasse aufrufen
        ns.Shape.call(this, cfg);

        // 1.3 Erweitern um kreisspezifische Eigenschaften
        this.M = M;
        this.R = R;
    }

    // 2. Prototype von Kreis = Clone des Prototypes von Shape
    ns.Circle.prototype = Object.create(ns.Shape.prototype);
    // Verweis auf Konstruktor korrigieren
    ns.Circle.prototype.constructor = ns.Circle;
    
    // 3. Prototype von Kreis erweitern
    ns.Circle.prototype.draw = function (ctx) {

        // Draw- Funktion der Basisklasse
        ns.Shape.prototype.draw.call(this, ctx);

        console.log("Kreis: M=" + this.M.toString() + ", R=" + this.R);

    }

})();