//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 28.6.2015
//
//  Projekt.......: HTML5
//  Name..........: Newtoon.Test.js
//  Aufgabe/Fkt...: Test der Newton- Bibliothek
//                  
//
//
//
//
//<unit_environment>
//------------------------------------------------------------------
//  Zielmaschine..: PC 
//  Betriebssystem: Windows 7 mit .NET 4.5
//  Werkzeuge.....: Visual Studio 2013
//  Autor.........: Martin Korneffel (mko)
//  Version 1.0...: 
//
// </unit_environment>
//
//<unit_history>
//------------------------------------------------------------------
//
//  Version.......: 1.1
//  Autor.........: Martin Korneffel (mko)
//  Datum.........: 
//  Änderungen....: 
//
//</unit_history>
//</unit_header>        

QUnit.test("Newton Lib für Messwerte testen", function () {


	var Meter5 = mko.newton.Meter(5);

	equal(Meter5.Value, 5, "Meter5.Value unkorrekt");
	equal(Meter5.UnitSymbol, "m", "Meter5.UnitSymbol unkorrekt");
	equal(Meter5.GetUnit(), "m", "Meter5.Unit unkorrekt");
	equal(Meter5.toString(), "5 [m]", "Meter5.toString() unkorrekt");


	var Cm500 = mko.newton.Centimeter(0).From(Meter5);

	equal(Cm500.Value, 500, "Cm500.Value unkorrekt");
	equal(Cm500.UnitSymbol, "m", "Cm500.UnitSymbol unkorrekt");
	equal(Cm500.GetUnit(), "cm", "Cm500.Unit unkorrekt");
	equal(Cm500.toString(), "500 [cm]", "Cm500.toString() unkorrekt");


    var Meter10 = mko.newton.Meter(10);

    var protoMeter5 = Object.getPrototypeOf(Meter5);
    var protoMeter10 = Object.getPrototypeOf(Meter10);

    if (protoMeter5 === protoMeter10)
        console.log("Prototypen verschiedener Meterobjekte sind gleich");
    else
        console.log("Prototypen verschiedener Meterobjekte sind ungleich");

    var protoCm500 = Object.getPrototypeOf(Cm500);

    if (protoMeter5 === protoCm500)
        console.log("Prototypen von Centimeter und Meter sind gleich");
    else
        console.log("Prototypen von Centimeter und Meter sind ungleich");

    var Len = mko.newton.Length(mko.newton.OrderOfMagnitude.One, 100);

    var protoLength = Object.getPrototypeOf(Len);

    if (protoMeter5 === protoLength)
        console.log("Prototypen von Meter und Length sind gleich");
    else
        console.log("Prototypen von Meter und Length sind ungleich");

});