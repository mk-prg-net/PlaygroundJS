// mko
//

function TestePlaneten(Planeten, erwartet) {
    var Planetenliste_als_text = Planeten.join(", ");
    console.assert(Planetenliste_als_text === erwartet);
    console.log(Planetenliste_als_text);

}

function Arrays() {

    // Dichte besetzte Arrays: Jeder Platz zwischen index 0 und length- 1 ist definiert 

    // Maximale anzahl der Elektronen auf einer Elektronenschale um den Kern. Der Index
    // ist die Nummer der Elektronenschale
    var MaxElektronenAufAtomschale = [];

    MaxElektronenAufAtomschale[0] = 2;
    MaxElektronenAufAtomschale[1] = 8;
    MaxElektronenAufAtomschale[2] = 8;
    MaxElektronenAufAtomschale[3] = 18;

    // Anzahl der Elemente abfragen
    console.assert(MaxElektronenAufAtomschale.length == 4);

    // Dünn besetzte Array: nicht jeder Platz zwischen index 0 und length - 1 ist definiert

    // Index stellt eine ganze Zahl dar. Eintrg unter dem Index liefert die Anzahl der 
    // Primfaktoren, durch die ein Zahl als Produkt aus Primzahlen gebildet wird:
    // 9 = 3*3 -> 2, 12 = 2*2*3 -> 3
    var AnzPrimfaktoren = [];

    AnzPrimfaktoren[2] = 1;
    AnzPrimfaktoren[4] = 2;
    AnzPrimfaktoren[9] = 2;
    AnzPrimfaktoren[12] = 3;

    // length liefert den größten Index + 1
    console.assert(AnzPrimfaktoren.length == 13);

    // undefinierte Einträge im dünn besetzten Array sind tatsächlich  undefiniert.
    console.assert(typeof AnzPrimfaktoren[0] == 'undefined');

    // Arrays sind, wie schon die dünn besetzten Arrays andeuten, Dictionarys (Schlüssel-Wert- Zuordnungen)
    // Damit können auch nichtnumerischen Indizes (Schlüssel/Keys) eingesetzt werden.

    var Farben = [];
    Farben["rot"] = "#FF0000";
    Farben["gruen"] = "#00FF00";
    Farben["blau"] = "#0000FF";

    // Prüfen auf vorhandensein eines Schlüssels
    if ("rot" in Farben)
        console.log("rot ist da");

    if (typeof Farben.rot !== "undefined") {
        // ...
    } else {
        Farben.rot = "#0000FF";
    }

    // Alternative Syntax für Schlüssel, die den Konventionen von Namen für Programmiersprachen 
    // folgen:

    var farbwert = Farben.gruen;
    console.assert("#00FF00", farbwert);

    Farben.violett = "#ac1caaff";

    console.assert(Farben["violett"] === "#ac1caaff");


    var ArrayObjektMix = [];

    ArrayObjektMix[0] = 99;
    ArrayObjektMix["rot"] = "FF0000";

    // Achtung: -1 ist kein index sondern bezeichnet eine Eigenschaftsname !
    ArrayObjektMix[-1] = -99;

    console.assert(ArrayObjektMix[-1] == -99);

    // Zugriff auf die exotisch bezeichnete Eigenschaft -1 über . Propertyzugriffsoperator gelingt nicht
    // ArrayObjektMix.-1


    // Achtung: folgender Push löscht alle Einträge und legt ein neues Array an Wertepaaren
    Farben.push(["gelb", "#FFFF00"]);

    console.assert(Farben.length === 3);

    // Auf Arrays bieten Methoden an, um komplexe Datetypen wie LIFO (Kellerspeicher)
    // und Fifo zu implementieren.    

    var Planeten = ["Venus", "Erde", "Mars", "Uranus"];
    
    Planeten.push("Neptun");
    Planeten.push("Pluto");

    // ... Pluto ist doch kein Planet
    var vonHinten = Planeten.pop();

    TestePlaneten(Planeten, "Venus, Erde, Mars, Uranus, Neptun");

    // Merkur in der Liste am Anfang anfügen
    Planeten.unshift("Merkur");
    Planeten.unshift("Sonne");

    // ... Sonne ist doch kein Planet!
    var vonVorne = Planeten.shift();

    TestePlaneten(Planeten, "Merkur, Venus, Erde, Mars, Uranus, Neptun");

    // Einfügen in der Mitte mittels splice
    Planeten.splice(4, 0, "Jupiter", "Saturn");
    
    TestePlaneten(Planeten, "Merkur, Venus, Erde, Mars, Jupiter, Saturn, Uranus, Neptun");

    // Ausschneiden einer Teilliste
    var Riesenplanten = Planeten.slice(4, 7);

    TestePlaneten(Riesenplanten, "Jupiter, Saturn, Uranus, Neptun");


    // Bezüglich eingebauter Typen kann man sofort sortieren
    var PlanetenSortiert = Planeten.sort();

    // bei sebstdefinierten Typen muss dem sort- Algo der Vergleich durch 
    // ein Callback- Funktion erklärt werden.

    // Liste aus X,Y- Werten
    var messwerte = [[1, 2], [5, 7], [8, 3], [2, 9]];

    // Sortieren nach X
    messwerte.sort(function (elem1, elem2) {
        if (elem1[0] < elem2[0])
            return -1;
        else if (elem1[0] > elem2[0])
            return 1;
        else
            return 0;

    });

    var MischMasch = [4, 2, "Hallo", 32, 3, "Ains"];    
    MischMasch.sort();

    var reineZahlen = [4, 2, 32, 3];
    reineZahlen.sort();



    // Möglichkeiten, über Arrays zu iterieren:

    // for-in Schleife: Alle Werte in einem Array besuchen
    for (var val in Planeten) {
        console.log(val.toString() + " " + Planeten[val].toString());
    }

    // Summieren mit der for in- Schleife
    var summe = 0;
    for(var val in reineZahlen){
        summe += val;
    }

    // Ab ECMA6 ogibt es die sichere Variante von for in: for of
    for (var val of Planeten) {
        console.log(val.toString());
    }

    summe = 0;
    for(var val of reineZahlen){
        summe += val;
    }




    // for- Schleife: Index hochzählen
    for (var i = 0; i < Planeten.length; i++) {
        console.log(i.toString() + " " + Planeten[i].toString());
    }

    // ... Optimierung: Indexobergrenze beim Initialisieren er Schleife berechnen
    var ende = 0;
    for (i = 0, ende = Planeten.length; i < ende; i++) {
        console.log(val);
    }
}
