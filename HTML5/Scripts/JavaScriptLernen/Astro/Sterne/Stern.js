// Basiklasse aller Typen von Sternen wie weisse Zwerge und rote Riesen

define(['Base/CB'], function (CB) {

    var Stern = function (Name, Masse, Farbe) {
        // Aufrufen des Konstruktors der Basis(Super)klasse
        CB.call(this, Name, Masse);
        this.Farbe = Farbe;
    }

    // Prototypenkette mit der Basisklasse aufbauen
    // -> Neues Prototypenobjekt anlegen, dessen 
    // __proto__ Eigenschaft auf den Prototype der Basisklasse
    // verweist
    Stern.prototype = Object.create(CB.prototype);

    // Noch ist das Verknüpfen nicht vollständig
    // Korrigieren der constructor- Eigenschaft
    Stern.prototype.constructor = Stern;

    return Stern;
})
