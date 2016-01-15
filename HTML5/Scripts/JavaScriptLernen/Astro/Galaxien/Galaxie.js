// Basisklasse aller Galaxien

define(["Base/CB"], function(CB){

    var Galaxie = function (Name, Sterne) {
        CB.call(this, Name, 0);
        this.Sterne = Sterne;
    }

    Galaxie.prototype = Object.create(CB.prototype);
    Galaxie.prototype.constructor = Galaxie;

    // Eigenschaft Masse neudefinieren
    Galaxie.prototype.GetMasse = function () {
        var Gesamtmasse = 0;

        // Nicht so gut mit Arrays (for in Schleife)
        //for (var stern in this.Sterne) {
        //    Gesamtmasse += stern.GetMasse();
        //}

        Gesamtmasse = 0;
        for (var i = 0, len = this.Sterne.length; i < len; i++) {
            Gesamtmasse += this.Sterne[i].GetMasse();
        }

        Gesamtmasse = 0;
        this.Sterne.forEach(function (stern) {
            Gesamtmasse += stern.GetMasse();
        });

        Gesamtmasse = 0;
        Gesamtmasse = Array.reduce(this.Sterne, function (a, b) { return a.GetMasse() + b.GetMasse() });
        
    }

    return Galaxie;

});