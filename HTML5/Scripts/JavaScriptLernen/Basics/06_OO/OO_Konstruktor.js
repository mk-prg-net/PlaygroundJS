// Kleine Klassenbibliothek für Konten:
// In der selbstdefinierten Konstuktorfunktion werden die Eigenschaften eines Kontoobjektes angelegt.
// new Konto... -> Konto({}, ...)
//function Konto(this, ktoNr, inhaber) {
function Konto(ktoNr, inhaber) {
    this.Inhaber = inhaber;
    this.KtoNr = ktoNr;
    this.Guthaben = 0.0;

    // Ein Implementierungsdetail, was jeder sehen kann 
    this.historie = [];

    // Ein Implementierungsdetail, was keiner sehen kann 
    var historie2 = [];

    this.Einzahlen = function (betrag) {
        this.Guthaben += betrag;

        // Datensatz mit Kontonummer und neuen Guthabenstand zurückgeben
        var res = { KtoNr: this.KtoNr, Guthaben: this.Guthaben };
        this.historie.push(res);

        // Closure als privater Member
        historie2.push(res);
        return res;
    }


    this.Abheben = function (betrag) {
        this.Guthaben -= betrag;

        // Datensatz mit Kontonummer und neuen Guthabenstand zurückgeben
        // Achtung: this wurde vor ktoNr bewusst weggelassen. Die Methode 
        // Abheben ist damit für immer und ewig an den Parameter ktoNr der 
        // Konstruktorfunktion gebunden. Damit bleibt der Fehler solange unauffällig,
        // bis die Kontonummer geändert wird. Dies offenbart auch, das jedes Objekt seine 
        // eigene Funktionsimplementierung hat (Speicherplatzverschwendung !)
        //return { KtoNr: ktoNr, Guthaben: this.Guthaben };
        var res = { KtoNr: this.KtoNr, Guthaben: this.Guthaben };
        this.historie.push(res);
        // Closure als privater Member
        historie2.push(res);
        return res;

    }
}

// Konto mit der nur lesbaren Eigenschaft KtoNr
// ktoNr: Kontonummer - String
// inhaber: Inhaber des Kontos - String
function Konto2(ktoNr, inhaber) {

    // Absichern des Aufrufes über new- Operator
    if (!(this instanceof Konto2))
        return new Konto2(ktoNr, inhaber);

    this.Inhaber = inhaber;

    var _KtoNr = ktoNr;
    this.KtoNr = function () {
        // Closure als privater Member
        return _KtoNr;
    }

    this.Guthaben = 0.0;

    // Ein Implementierungsdetail, was jeder sehen kann 
    this.historie = [];

    // Ein Implementierungsdetail, was keiner sehen kann 
    var historie2 = [];

    this.Einzahlen = function (betrag) {
        this.Guthaben += betrag;

        // Datensatz mit Kontonummer und neuen Guthabenstand zurückgeben
        var res = { KtoNr: this.KtoNr, Guthaben: this.Guthaben };
        this.historie.push(res);

        // Closure als privater Member
        historie2.push(res);
        return res;
    }


    this.Abheben = function (betrag) {
        this.Guthaben -= betrag;

        // Datensatz mit Kontonummer und neuen Guthabenstand zurückgeben
        // Achtung: this wurde vor ktoNr bewusst weggelassen. Die Methode 
        // Abheben ist damit für immer und ewig an den Parameter ktoNr der 
        // Konstruktorfunktion gebunden. Damit bleibt der Fehler solange unauffällig,
        // bis die Kontonummer geändert wird. Dies offenbart auch, das jedes Objekt seine 
        // eigene Funktionsimplementierung hat (Speicherplatzverschwendung !)
        //return { KtoNr: ktoNr, Guthaben: this.Guthaben };
        var res = { KtoNr: this.KtoNr, Guthaben: this.Guthaben };
        this.historie.push(res);
        // Closure als privater Member
        historie2.push(res);
        return res;

    }
}

// Prototypenobjekt für moderne prototypische Konstruktion
var KontoPrototyp = {
    ktoNr: 0,
    Guthaben: 0,    
    Einzahlen: function (betrag) { this.Guthaben += betrag },
    Abheben: function (betrag) { this.Guthaben -= betrag }
};

// Klassenfabrik, die prototypische Konstruktion automatisiert
// Vorteil gegenüber klassischen Konstruktor: Absicherung gegen versehentliches Aufrufen ohne new nicht nötig
function CreateKonto(ktoNr) {

    var obj = Object.create(KontoPrototyp);
    obj.ktoNr = ktoNr;

    return obj;
}


function OO_Konstruktor() {
    console.log("OO_Konstruktor");

    // Alternativ zum erzeugen einer leeren Dictionary {} ist ein Objekt mittels new und dem Object()- Konstruktor definieren:
    var Point3d = new Object();

    Point3d.X = 1;
    Point3d.Y = 2;
    Point3d.Z = 3;

    Point3d.R = function () {
        return Math.sqrt(Math.pow(this.X, 2) + Math.pow(this.Y, 2) + Math.pow(this.Z, 2));
    }

    var Abstand = Point3d.R();


    var DonaldsKonto = new Konto('4711', 'Donald');
    var CarlosKonto = new Konto2('0815', 'Carlo');
    var Tic = Konto2("1234", "Tic");

    // Fataler Fehler: Konstruktor ohne new aufgerufen
    // this ist globales Objekt-> wird um Eigenschaften erweitert (quasi static)
    var ClaasCleversKto = Konto('8877', 'Claas');

    // Moderner, prototypischer Ansatz: Verzichtet auf new- Operator
    // (und den damit verbundenen Fehlern)
    var MikeyKonto = Object.create(KontoPrototyp);
    MikeyKonto.ktoNr = "2233";
    MikeyKonto.__proto__.ktoNr = 99;

    MikeyKonto.Einzahlen(120);
    MikeyKonto.Abheben(33);

    var MinisKonto = CreateKonto("9876");
    console.assert(MinisKonto.__proto__.ktoNr === 99);


    var stand = DonaldsKonto.Einzahlen(1000);
    console.assert(DonaldsKonto.Guthaben === 1000.0, "Einzahlen Fehlgeschlagen");

    stand = DonaldsKonto.Abheben(500);
    console.assert(DonaldsKonto.Guthaben === 500.0 && stand.KtoNr === '4711', "Abheben Fehlgeschlagen");

    // Das Implementierungsdetail Historie ist einsehbar !
    console.dir(DonaldsKonto.historie);

    // Scheitert
    //console.dir(DonaldsKonto.historie2);

    // Zwar unrealistisch, aber die Kontonummer wird nun geändert
    DonaldsKonto.KtoNr = '1234';
    stand = DonaldsKonto.Abheben(200);
    console.assert(DonaldsKonto.Guthaben === 300.0 && stand.KtoNr != '4711', "Stand.KtoNr unverändert, da in objektlokaler Implementierung die KtoNr fälschlicherweise durch ein Closure implementiert wurde (und damit lange als Fehler unentdeckt blieb) ");

    // Nur lesbare Eigenschaft
    var ktoNrCarlo = CarlosKonto.KtoNr();
    // Scheitert zur Laufzeit sofort
    //CarlosKonto.KtoNr = "1234";

    // Gefahr des vergessens von new
    var DaisysKonto = Konto2('7777', 'Daisy');
    var DanielsKonto = new Konto2();
    // Fehler: this ist jetzt window !
    DaisysKonto.Einzahlen(1000);

    console.assert("Inhaber" in window, "window versehentlich um eine Eigenschaft erweitert");


    console.log("OO_Konstruktor Ende");
}
