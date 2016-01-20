// Implementierung einer Klassenhierarchie mittels Prototypen
 
// Einschluss der Implementierung der Basisklassenfabrik in einem Modul
var Astro_CB = Astro_CB || (function () {

    var Basis = {
        toString: function () {
            return this.Name + " mit der Masse " + this.Masse.toString();
        }
    };

    return {
        CreateCB: function (Name, Masse) {
            var CB = Object.create(Basis);

            CB.Name = "unbekannt";
            CB.Masse = 0.0;

            return CB;
        }
    }

})();


var Astro_Stern = Astro_Stern || (function (CB) {

    var Basis = CB.CreateCB("unbekannt", 0);

    // Methode im Prototypen
    Basis.getTempSurface = function () {
        if (this.Farbe == "rot")
            return 3000;
        if (this.Farbe == "gelb")
            return 6000;
        if (this.Farbe == "blau")
            return 50000;

        return 0;

    };

    return {
        CreateStern: function (Name, Masse, Farbe) {
            var Stern = Object.create(Basis);

            Stern.Name = Name;
            Stern.Masse = Masse;
            Stern.Farbe = Farbe;

            return Stern;
        }
    }

})(Astro_CB);


function AstroPrototypVererbungTest() {

    var Sonne = Astro_Stern.CreateStern("Sonne", 3000000, "gelb");

    var temp = Sonne.getTempSurface();
    var strSonne = Sonne.toString();


}


