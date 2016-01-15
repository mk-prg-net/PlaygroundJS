
QUnit.test("Erstellen geometrischer Objekte", function () {

    var ns = GetNamespace("BVB", "graph");

	// Testen der Basisklasse
	var objShape = BVB.graph.Shape({ bgColor: "purple" });

	ok(objShape, "Erstellen eines Shapes fehlgeschlagen");
	equal(objShape.bgColor, "purple", "Shape.bgColor nicht wie erwartet");

	// Testen der abgeleiteten Klasse

	var objKreis = new BVB.graph.Circle(BVB.graph.CreatePoint(2, 4), 100, { color: "blue" });

	ok(objKreis, "Erstellen von Kreis fehlgeschlagen");
	equal(objKreis.M.X, 2, "M.X nicht wie erwartet");

	var ctx = {};
	objKreis.draw(ctx);
})