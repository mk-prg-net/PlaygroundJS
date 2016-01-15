
//------------------------------------------------------------------------------------------------------------------
// http://www.w3schools.com/jsref/jsref_statements.asp
function Kontrollstrukturen() {

    // Verzweigungen, Schleifen
    var txt = "Der niedrige Ölpreis ärgerte die Ölstaaten. Durch Überfluss ging der Schuß nach hinten los.";
    txt = HtmlEncode(txt, 'Ö');
    txt = HtmlEncode(txt, 'ä');
    txt = HtmlEncode(txt, 'Ü');
    txt = HtmlEncode(txt, 'ß');

    // Rekursive Programme
    var Ergebnis = Guthaben(3, 1000, 10.0 / 100.0);
}

// Ersetzt Umlaute in einem Text durch Umschreibungen. Beispiel für Kontrollstrukturen und Textverarbeitung.
function HtmlEncode(text, uml) {

    var textneu = new String();
    var startpos = 0;
    var htmluml = new String();

    switch (uml) {
        case 'ü':
            htmluml = "&uuml;"
            break;
        case 'Ü':
            htmluml = "&Uuml;"
            break;
        case 'ö':
            htmluml = "&ouml;"
            break;
        case 'Ö':
            htmluml = "&Ouml;"
            break;
        case 'ä':
            htmluml = "&auml;"
            break;
        case 'Ä':
            htmluml = "&Auml;"
            break;
        case 'ß':
            htmluml = "&szlig;"
            break;
        default:
            {
                alert("Die Funktion 'transformuml(text, uml)' wurde fuer einenen unbekannten Umlaut aufgerufen");
                return null;
            }
    }

    // durchsuchen des Textes nach einem Umlaut
    while (true) {

        var posuml = text.substr(startpos, text.length - startpos).indexOf(uml);

        // wenn ein Umlaut gefunden wurde, dann wird an der Textstelle dieser durch die HTML
        // umschreibung ersetzt.

        if (posuml != -1) {

            textneu += text.substr(startpos, posuml);
            textneu += htmluml;
            startpos += (posuml + 1);

        } else {

            if (startpos == 0) {
                // Fall: Die Eingabe enthielt keine Umlaute
                textneu = text
            } else {
                // Fall: In Eingabe wurden einige Umlaute ersetzt      
                textneu += text.substr(startpos, text.length - startpos);
            }
            // Den von umlauten befreiten Text als Ergebnis zurückgeben
            return textneu;
        }
        // solange das Textende nichterreicht wurde, Suche nach umlauten fortsetzen
    }
}

// Berechnet das Sparguthaben mit Zinseszins rekursiv
function Guthaben(laufzeit, startkapital, zinssatz) {
    if (laufzeit == 0)
        return startkapital;
    else
        return Guthaben(laufzeit - 1, startkapital, zinssatz) * (1 + zinssatz);
}

//---------------------------------------------------------------------------------------------------------
// Funktional:

function Arrays() {

    // Dichte und dünn besetzte Arrays

    var Atomschale = [];

    Atomschale[0] = 2;
    Atomschale[1] = 4;
    Atomschale[2] = 8;

    // Anzahl der elemente abfragen
    var anz = Atomschale.length;

    // dünn besetzt

    var Preisstufen = [];

    Preisstufen[1] = 1;
    Preisstufen[3] = 5;
    Preisstufen[8] = 10;

    var anz2 = Preisstufen.length;

    // Was ist mid den Indizes zwischen 1 und 3
    console.assert(typeof Preisstufen[2] == 'undefined');

    Preisstufen[2] = 2.50;

    var anz3 = Preisstufen.length;

    // Arrays dynamisch aufbauen

    var Planeten = [];

    Planeten.push("Merkur");
    Planeten.push("Venus");
    Planeten.push("Erde");


    // Alle Werte in einem Array besuchen
    for (var val in Planeten) {
        console.log(val);
    }


    // Funktionale Programmierung mittels Iterationsmethoden
    console.log("Array mit forEach auflisten");
    Planeten.forEach(function (val) {
        // funktionsrumpf vom Callback
        console.log(val);
    });

    // Bildet die Listenelemente mittels des Callbacks ab 
    var PlaneteGross = Planeten.map(function (val) {
        return val.toUpperCase();
    });

 }

//---------------------------------------------------------------------------------------------------------
// Funktional:

function Funktional()
{
    Closure();
    Variadic();
}

function Closure()
{
    console.log("Closure");

    var zahlen = [3, 5, 7, 9, 11, 13, 15, 18, 21, 25, 29];

    var alleDurch3teilbare = [];

    // Closure bezeichnet das binden von Variablen in den Scope (Gültigkeitsbereich) einer Funktion,
    // die aus dem Gültigkeitsbereich der der sie einschliessenden Funktion stammt (hier alleDurch3teilbare in
    // der annonymen Funktion innerhalb von forEach)
    zahlen.forEach(function (z) {
        if (z % 3 === 0) {
            alleDurch3teilbare.push(z);
        }
    })

    console.log(JSON.stringify(zahlen));

    console.log("Closure End");
}


function AVG()
{
    try {
        // Liste aller übergebener Paramter ist im Array arguments abgelegt
        if(arguments.length > 0) {

            var mean = 0.0;

            for(var i = 0; i < arguments.length; i++){
                mean += arguments[i];
            }

            return mean / arguments.length;
        } else {
            return Number.NaN;
        }
    }catch(err){
        return Number.NaN;
    }
}

function Variadic()
{

    var res1 = AVG();

    var res2 = AVG(1, 2, 3);

    var res3 = AVG(3, 5, 7, 9, 11, 13, 15, 18, 21, 25, 29);

    // wird nicht funktionieren, da arguments nur einen eintrag (gesamtes Array) erhält
    var res4 = AVG([3, 5, 7, 9, 11, 13, 15, 18, 21, 25, 29]);

    // trotzdem AVG wiederverwenden mittels apply
    // Achtung, da AVG keine Objektmethode ist, wird anstelle einer Objektreferenz im ersten Parameter die null übergeben.
    var res5 = AVG.apply(null, [3, 5, 7, 9, 11, 13, 15, 18, 21, 25, 29]);
}


//---------------------------------------------------------------------------------------------------------
// Objektfunktionale Programmierung
// http://www.w3schools.com/js/js_object_definition.asp

function OO() {

    OO_Literal();

    OO_Json();

    OO_Konstruktor();

    OO_Prototypen();
}

function OO_Literal() {

    console.log("OO_Literal");

    // Objektliterale: Eigenschaften und Methoden als Schlüssel- Wertzuordnungen darstellen
    var Point = {

        // Eigenschaften: 
        X: 0,
        Y: 0,

        // Methode R, berechnet euklidischen Abstand
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

    // Alternativ ein Objekt mittels new und dem Object()- Konstruktor definieren:
    var Point3d = new Object();

    Point3d.X = 1;
    Point3d.Y = 2;
    Point3d.Z = 3;

    Point3d.R = function () {
        return Math.sqrt(Math.pow(this.X, 2) + Math.pow(this.Y, 2) + Math.pow(this.Z, 2));
    }

    var Abstand = Point3d.R();

    console.log("OO_Literal Ende");
}

// Serialisieren und Deserialisieren von Objekten (Wichtig für Datenübertragung mittels Ajax
// http://www.w3schools.com/js/js_json.asp
function OO_Json() {

    console.log("OO_JSon");

    // Objektliterale: Eigenschaften und Methoden als Schlüssel- Wertzuordnungen darstellen
    var Point = {

        // Eigenschaften: 
        X: 1,
        Y: 2,

        // Methode R, berechnet euklidischen Abstand
        R: function () {
            return Math.sqrt(this.X * this.X + this.Y * this.Y);
        }
    };

    Point.X *= 10;
    Point.Y *= 10;

    // serialisieren
    var PointSerialisiert = JSON.stringify(Point);

    console.log("Point serialisiert: " + PointSerialisiert);

    // deserialisieren
    var PointDeserialisiert = JSON.parse(PointSerialisiert);

    try{
        // Ist die Funktion noch vorhanden ?
        var abstand2 =  PointDeserialisiert.R();
    } catch (ex) {
        console.log("Funktion Point.R() nach Deserialisierung nicht mehr vorhanden!");
    }

    console.log("OO_JSon Ende");

}

// Kleine Klassenbibliothek für Konten:
// In der selbstdefinierten Konstuktorfunktion werden die Eigenschaften eines Kontoobjektes angelegt.
function Konto(ktoNr, inhaber) {
    this.Inhaber = inhaber;
    this.KtoNr = ktoNr;
    this.Guthaben = 0.0;

    this.Einzahlen = function(betrag)
    {
        this.Guthaben += betrag;

        // Datensatz mit Kontonummer und neuen Guthabenstand zurückgeben
        return { KtoNr: this.KtoNr, Guthaben: this.Guthaben };
    }


    this.Abheben = function(betrag)
    {
        this.Guthaben -= betrag;

        // Datensatz mit Kontonummer und neuen Guthabenstand zurückgeben
        // Achtung: this wurde vor ktoNr bewusst weggelassen. Die Methode 
        // Abheben ist damit für immer und ewig an den Parameter ktoNr der 
        // Konstruktorfunktion gebunden. Damit bleibt der Fehler solange unauffällig,
        // bis die Kontonummer geändert wird. Dies offenbart auch, das jedes Objekt seine 
        // eigene Funktionsimplementierung hat (Speicherplatzverschwendung !)
        return { KtoNr: ktoNr, Guthaben: this.Guthaben };
    }
}

function OO_Konstruktor() {
    console.log("OO_Konstruktor");

    var DonaldsKonto = new Konto('4711', 'Donald');
    var CarlosKonto = new Konto('0815', 'Carlo');

    var stand = DonaldsKonto.Einzahlen(1000);
    console.assert(DonaldsKonto.Guthaben === 1000.0, "Einzahlen Fehlgeschlagen");

    stand = DonaldsKonto.Abheben(500);
    console.assert(DonaldsKonto.Guthaben === 500.0 && stand.KtoNr === '4711', "Abheben Fehlgeschlagen");

    // Zwar unrealistisch, aber die Kontonummer wird nun geändert
    DonaldsKonto.KtoNr = '1234';
    stand = DonaldsKonto.Abheben(200);
    console.assert(DonaldsKonto.Guthaben === 300.0 && stand.KtoNr != '4711', "Stand.KtoNr unverändert, da in objektlokaler Implementierung die KtoNr fälschlicherweise durch ein Closure implementiert wurde (und damit lange als Fehler unentdeckt blieb) ");

    console.log("OO_Konstruktor Ende");
}

// In dieser Impelmentierung werden in der Instanz nur Daten gespeichert. Die Methoden werden zentral im sog. Prototyp
// von Konto_mit_ProtoMethoden gespeichert.
function Konto_mit_ProtoMethoden(ktoNr, inhaber, passwort) {
    this.Inhaber = inhaber;
    this.KtoNr = ktoNr;
    this.Guthaben = 0.0;

    // Prüft, ob ein eingegebenes Passwort korrekt ist
    this.CheckPassword = function (paswordInput) {
        // bei == müssen nur Werte, bei === Werte und Typ identisch sein
        // passwort ist Closure und wird zur Implementierung von privaten Daten genutzt
        return paswordInput === passwort;            
    }
}

// Der Prototyp ist ein Objekt, auf das alle Instanzen der Klasse Konto verweisen.
// Im Prototypenobjekt werden typischerweise die Methoden der Objekte zentral definiert.
// Beachte: In JavaScript gibt es keine Klassendeklarationen, aus denen ein Kompiler 
// Code erzeugt, der das Prototypenobjekt zur Laufzeit generiert. Diese arbeit
// müssen wir selbst durchführen.
Konto_mit_ProtoMethoden.prototype.Einzahlen = function (betrag) {
    this.Guthaben += betrag;
    return { KtoNr: this.KtoNr, Guthaben: this.Guthaben };

}

Konto_mit_ProtoMethoden.prototype.Abheben = function (betrag) {
    this.Guthaben -= betrag;

    // ktoNr kein Closure hier- der Fehler offenbart sich sofort
    return { KtoNr: ktoNr, Guthaben: this.Guthaben };
}

Konto_mit_ProtoMethoden.prototype.Abheben_korrekt = function (betrag) {
    this.Guthaben -= betrag;

    return { KtoNr: this.KtoNr, Guthaben: this.Guthaben };
}


function OO_Prototypen()
{
    console.log("OO_Prototypen");

    var DonaldsKonto = new Konto_mit_ProtoMethoden('4711', 'Donald', "XA1234");
    var CarlosKonto = new Konto_mit_ProtoMethoden('0815', 'Carlo', "Klau2015");

    // Passwörter prüfen

    console.assert(DonaldsKonto.CheckPassword("YA1234"));

    var stand = DonaldsKonto.Einzahlen(1000);
    console.assert(DonaldsKonto.Guthaben === 1000.0, "Einzahlen Fehlgeschlagen");
    
    try{
        stand = DonaldsKonto.Abheben(500);
        console.assert(DonaldsKonto.Guthaben === 500.0, "Abheben Fehlgeschlagen");
    } catch (err) {

    }

    stand = DonaldsKonto.Abheben_korrekt(500);
    console.assert(DonaldsKonto.Guthaben === 500.0, "Abheben Fehlgeschlagen");

    var Bank = [DonaldsKonto, CarlosKonto];

    // Objektfunktional: monatliche Kontoführungsgeühren abbuchen:
    Bank.forEach(function (konto) {

        konto.Abheben_korrekt(5.00);

    });

    // Kontoauszüge drucken
    druckeKontoauszuege(Bank);

    console.log("OO_Prototypen Ende")
}

function druckeKontoauszuege(Bank) {
    console.log("Kontoauszüge drucken")

    Bank.forEach(function (konto) {

        var txt1 = JSON.stringify(konto);
        console.log(txt1);

        
    });

    console.log("Kontoauszüge drucken Ende")
}



// Datensatz für Tabelle mit Guthabenentwicklung auf Sparkonten.
function ZinsBuchung(jahr, sparguthaben, zinsertrag) {
    this.Jahr = jahr;
    this.Guthaben = sparguthaben;
    this.Zinsertrag = zinsertrag;
    this.NeuesGuthaben = sparguthaben  + zinsertrag;
}

// Berechnung der Entwicklung eines Sparguthabens iterativ
function sparen(startkapital, zinssatz, anlagezeitraum) {

    var sparguthaben = startkapital;
    var jahr = 0;
    var buchungen = [];

    while (jahr < anlagezeitraum) {

        var aktBuchung = new ZinsBuchung(jahr, sparguthaben, sparguthaben * zinssatz/100.0);
        sparguthaben = aktBuchung.NeuesGuthaben;
        jahr++;

        buchungen.push(aktBuchung);
    }

    return buchungen;
}




