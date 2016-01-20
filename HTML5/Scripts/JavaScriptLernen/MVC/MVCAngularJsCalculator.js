//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 15.5.2015
//
//  Projekt.......: HTML5
//  Name..........: MVCAngularCalculator.js
//  Aufgabe/Fkt...: Demo MVC Bibliothek AngularJS: Taschenrechner
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


function ROP(A, B, Res, OP) {
    this.A = A;
    this.B = B;
    this.Res = Res;
    this.OP = OP;
}



// Ein Angular- Modul anlegen, in dem eigene Tools in Form von Services gesammelt werden
// Das Modul bekommt einen Namen, der zur Dokumentation von Abhängigkeiten und damit als 
// Grundlage der Implementierung der Dependency- Injection dient.
var tools = angular.module('MyTools', []);

// Dienst, der einen Zahl in eine Sprachinvariante Form umwandelt
tools.factory('MakeNumCultureInvariant', function () {
    return function (val_cultspec) {
        // eventuelle Kommas (de-De durch Punkte ersetzen, ' de-CH löschen
        return parseFloat(val_cultspec.toString().trim().replace(',', '.').replace("'", ""));
    }
});

// Dienst, der Zahlen aus einem Scope in eine Invariabte Form umwandelt.
// Dieser Dienst baut auf den zuvor definierten Dienst auf. Via Dependency Injection durch
// ['MakeNumCultureInvariant', function (MakeNumCultureInvariant){...}] wird der Dienst als Parameter 
// übergeben
tools.factory('MakeCultureInvariant', ['MakeNumCultureInvariant', function (MakeNumCultureInvariant) {
    return function ($scope) {
        $scope.A = MakeNumCultureInvariant($scope.A);
        $scope.B = MakeNumCultureInvariant($scope.B);
    }
}]);


// Ein neues Modul, das einen Controller für unsere Views implementiert, wird angelegt.
// Es baut auf Dienste aus dem Modul MyTools auf
var app = angular.module('MyCalc', ['MyTools']);

// Der Controller benötigt den $scope und den Dienst MyTools.MakeCultureInvariant. Mittels DI werden
// diese injeziert
app.controller('MyCalcCtrl', ['$scope', 'MakeCultureInvariant', function ($scope, MakeCultureInvariant) {

    // Angezeigte Genauigkeit (wird in der View in einer Expression ausgewertet)
    $scope.Accuracy = 2;
    $scope.Protokoll = [];

    $scope.Add = function () {
        console.log($scope.Accuracy);
        MakeCultureInvariant($scope);

        $scope.Res = $scope.A + $scope.B;
        $scope.Protokoll.push(new ROP($scope.A, $scope.B, $scope.Res, "+"));
    };
    $scope.Sub = function () {
        MakeCultureInvariant($scope);
        $scope.Res = $scope.A - $scope.B;
        $scope.Protokoll.push(new ROP($scope.A, $scope.B, $scope.Res, "-"));
    };
    $scope.Mul = function () {
        MakeCultureInvariant($scope);
        $scope.Res = $scope.A * $scope.B;
        $scope.Protokoll.push(new ROP($scope.A, $scope.B, $scope.Res, "*"));
    };
    $scope.Div = function () {
        MakeCultureInvariant($scope);
        $scope.Res = $scope.A / $scope.B;
        $scope.Protokoll.push(new ROP($scope.A, $scope.B, $scope.Res, "/"));
    };
    $scope.Clear = function () {
        $scope.Protokoll = [];
    }

    $scope.GetHistory = function () {
        // 1. Webdienst aufrufen
        $.ajax({
            type: "GET",
            url: "/E03_JavaScriptLernen/GetHistory",
            data: "job=" + JSON.stringify({gruss: "hallo"})
        }).done(function (Data, status, req) {
            console.log(Data.toString());

            var historyObj = JSON.parse(Data);
            $scope.Protokoll = historyObj;            

        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR.status.toString());
        });


        // 2. Ergebnis deserialisieren

        // 3. Protokoll mit Daten vom Server aktualisieren
    }

}]);

var app2 = angular.module('MyCalc2', []);
app2.controller('MyCalcCtrl2', function ($scope) {

    // Angezeigte Genauigkeit (wird in der View in einer Expression ausgewertet)
    $scope.Accuracy = 2;

    $scope.Add = function () {
        console.log($scope.Accuracy);
        $scope.Res = $scope.A + $scope.B;
    };
    $scope.Sub = function () {
        $scope.Res = $scope.A - $scope.B;
    };
    $scope.Mul = function () {
        $scope.Res = $scope.A * $scope.B;
    };
    $scope.Div = function () {
        $scope.Res = $scope.A / $scope.B;
    };
});

angular.module("kombiniertesModul", ["MyCalc", "MyCalc2"]);