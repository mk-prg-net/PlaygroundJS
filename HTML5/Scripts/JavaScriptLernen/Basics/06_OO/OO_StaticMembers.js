// Statische Member

// Beispiel: Basisklasse eines Computerspiels
function Figur(anzLeben) {
    this.AnzLeben = anzLeben;
}

// Satischer Member als Member der Konstruktorfunktion
Figur.MAX_ANZ_LEBEN = 100;

Figur.prototype.erneuern = function (Zusatzleben) {
    this.AnzLeben += Zusatzleben;
    if (this.AnzLeben > Figur.MAX_ANZ_LEBEN) {
        this.AnzLeben = Figur.MAX_ANZ_LEBEN;
    }
}

Figur.prototype.altern = function (Stressfaktor) {
    this.AnzLeben -= Stressfaktor;
    if (this.AnzLeben < 0) {
        this.AnzLeben = 0;
    }
}

function EmulateStaticMember() {

    var maxLeben = Figur.MAX_ANZ_LEBEN;

    var r2d2 = new Figur(50);
    var c3po = new Figur(20);

}