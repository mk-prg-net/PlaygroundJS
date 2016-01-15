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

var app = angular.module('MyCalc', []);
app.controller('MyCalcCtrl', function ($scope) {

    // Angezeigte Genauigkeit (wird in der View in einer Expression ausgewertet)
    $scope.Accuracy = 2;
    $scope.Protokoll = [];

    $scope.Add = function () {
        console.log($scope.Accuracy);
        // eventuelle Kommas durch Punkte ersetzen
        $scope.A = "" + $scope.A;
        $scope.A = $scope.A.replace(',', '.');
        $scope.A = parseFloat($scope.A);

        $scope.B = "" + $scope.B;
        $scope.B = $scope.B.replace(',', '.');
        $scope.B = parseFloat($scope.B);
        
        $scope.Res = $scope.A + $scope.B;
        $scope.Protokoll.push(new ROP($scope.A, $scope.B, $scope.Res, "+"));
    };
    $scope.Sub = function () {
        "use strict"
        $scope.Res = $scope.A - $scope.B;
        $scope.Protokoll.push(new ROP($scope.A, $scope.B, $scope.Res, "-"));
    };
    $scope.Mul = function() {
        $scope.Res = $scope.A * $scope.B;
        $scope.Protokoll.push(new ROP($scope.A, $scope.B, $scope.Res, "*"));
    };
    $scope.Div = function() {
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

});

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