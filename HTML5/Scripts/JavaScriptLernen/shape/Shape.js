// Konstruktoren und Prototypen der Basisklasse Shape

// IFFE
(function () {

    // Der in diesem Modul auszugestaltende Namensraum
    // wird geladen
    var ns = GetNamespace("BVB", "graph");

    // Konstruktorfunktion für Shape
    ns.Shape = function (cfg) {

        // Absichern, das Konstruktorfunktion mittels new aufgerufen wurde
        if (!(this instanceof ns.Shape))
            return new ns.Shape(cfg);

        (cfg && (cfg.bgColor && (this.bgColor = cfg.bgColor))) || (this.bgColor = "orange");
        (cfg && (cfg.color && (this.color = cfg.color))) || (this.color = "black");        
    }


    // gemeinschaftlich genutzten Methoden und 
    // Eigenschaften von Shape im Prototyp
    // definieren

    ns.Shape.prototype.draw = function (ctx) {
        console.log("Shape.draw");
    };

})();