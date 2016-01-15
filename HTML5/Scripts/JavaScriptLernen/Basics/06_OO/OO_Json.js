// Serialisieren und Deserialisieren von Objekten (Wichtig für Datenübertragung mittels Ajax
// http://www.w3schools.com/js/js_json.asp

function Point2d(X, Y){

    // Eigenschaften: 
    this.X = X;
    this.Y = Y;

    // Methode R, berechnet euklidischen Abstand
};

Point2d.prototype.R = function () {
    return Math.sqrt(this.X * this.X + this.Y * this.Y);
}


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

    function PointC(x, y){
        this.X = x;
        this.Y = y;

        // Methode R, berechnet euklidischen Abstand
        this.R =  function () {
            return Math.sqrt(this.X * this.X + this.Y * this.Y);
        }

    }

    // Klassenfabriken
    function CreatePoint(x, y) {
        return new PointC(x, y);
    }

    // Variante für erstellung aus deserialisierten Objekten
    function CreatePointFromObject(obj) {
        return new PointC(obj.x, obj.y);
    }

    Point.X *= 10;
    Point.Y *= 10;

    // serialisieren
    var PointSerialisiert = JSON.stringify(Point);

    console.log("Point serialisiert: " + PointSerialisiert);

    // deserialisieren
    var PointDeserialisiert = JSON.parse(PointSerialisiert);

    var PointAsPoint = CreatePointFromObject(PointDeserialisiert);


    var Linienzug = [new Point2d(1, 1), new Point2d(5, 2), new Point2d(3, 1)];

    var LinienzugSer = JSON.stringify(Linienzug);

    var LinienzugDeser = JSON.parse(LinienzugSer);

    var komplexesObj = { Ursprung: new Point2d(3, 5), Fig: Linienzug };

    var komlxSer = JSON.stringify(komplexesObj);

    try {
        // Ist die Funktion noch vorhanden ?
        var abstand2 = PointDeserialisiert.R();
    } catch (ex) {
        console.log("Funktion Point.R() nach Deserialisierung nicht mehr vorhanden!");
    }

    console.log("OO_JSon Ende");

}
