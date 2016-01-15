// Prototypobjekt für Punkte der Ebene

(function () {

    var ns = GetNamespace("BVB", "graph");

    ns.PointPrototype = {
        X: 0,
        Y: 0,

        // Zugriff auf eine Implementierung im Modul von 
        // der Instanz aus
        toString: function () {
            return toStringImpl.call(this);
        }
    }

    // Hier wird die toString implementiert: Implementierungsdetail vom Modul
    var toStringImpl = function () {
        return "(" + this.X + ", " + this.Y + ")";
    }

    ns.CreatePoint = function(X, Y){

        // Clone vom Prototyp anlegen
        var p = Object.create(ns.PointPrototype);

        p.X = X;
        p.Y = Y;

        return p;
    }

})();