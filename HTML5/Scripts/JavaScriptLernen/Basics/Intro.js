// Unterprogramme werden in function- Blöcke eingeschlossen. Jeder Block beginnt
// mit einer öffnenden, und endet mit einer schließenden geschweiften Klammer. 
function Intro() {
    // Die Variabel namens a wird implizit durch Zuweisen eines Integers
    // deklariert
    a = 41;

    // Erzeugen einer Datenstruktur mit dem Namen "mitarbeiter"
    mitarbeiter = new Object();
    // Erzeugen von Datenelementen in der Datenstruktur mitarbeiter durch 
    // Zuweisen von Werten an die Namen der Datenelemente
    mitarbeiter.name = "Willy";
    mitarbeiter.vorname = "Marsmensch";
    mitarbeiter.alter = 312;


    console.log("Name des Marsmenschen: " + mitarbeiter.name)
}
