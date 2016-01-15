// Basisklasse aller Himmelskörper

define(function () {

    // Definieren des CB- Konstruktors
    var CB = function (Name, Masse) {
        // Masse des Himmelskörpers in Erdmassen
        this.Masse = Masse;
        this.Name = Name;

        // Getter, implementiert mittels private Memeber 
        // alias Closure
        var MassePrivat = Masse;

        this.GetMassePrivat = function () {
            return MassePrivat;
        }
    }

    // Methode, die alle Instanzen der CB- Klasse sich teilen
    CB.prototype.toString = function () {
        return this.Name;
    }

    // Getter für die Masseeigenschaft
    // Nachteil dieser Implementierung: this.Masse ist 
    // öffentlich sichtbar.
    CB.prototype.GetMasse = function ()
    {
        return this.Masse;
    }

    // Das fertig konfigurierte Modul zurückgeben
    return CB;
})