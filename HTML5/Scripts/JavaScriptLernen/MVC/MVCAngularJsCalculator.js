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

// Wenn AngularJS geladen wurde, dann ist ein module namesn $ng eingerichtet worden

// Ein Angular- Modul anlegen, in dem eigene Tools in Form von Services gesammelt werden
// Das Modul bekommt einen Namen, der zur Dokumentation von Abhängigkeiten und damit als 
// Grundlage der Implementierung der Dependency- Injection dient.
var tools = angular.module('MyTools', []); // ['$ng']);

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


app.filter('MyNumFlt', function () {
    return function (val, precision) {
        return val.toFixed(precision).toString() + " ??";
    }
});

// Der Controller benötigt den $scope und den Dienst MyTools.MakeCultureInvariant. Mittels DI werden
// diese injeziert
app.controller('MyCalcCtrl', ['$scope', '$http', 'MakeCultureInvariant', function ($scope, $http, MakeCultureInvariant) {

    // Ein Geschäftsobjekt mittels Webdienst aus einer DB laden
    // $scope.bObject = ....

    // Angezeigte Genauigkeit (wird in der View in einer Expression ausgewertet)
    $scope.Accuracy = 2;
    $scope.Protokoll = [];
    $scope.A = 0;
    $scope.B = 0;
    $scope.Res = 0;

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

    $scope.AddOnServer = function () {
        // angular.element ermöglicht Zugriff auf jQuery, falls jQuery vor AngularJS geladen wurde.
        // Wurde kein Angular geladen, dann liefert element Zugriff auf die heuseigene Version
        // von jQuery: jsLite. Siehe https://docs.angularjs.org/api/ng/function/angular.element
        var url = angular.element("#btnAddOnServer").attr("data-websrv-url");

        $http
            .get(url,
                  {
                      // Querystring- Parameter. noCache wird ständig mit einem neuen Zeitstempel
                      // initialisiert, um so die Bedieung aus dem Cache zu vermeiden
                      params: { job: JSON.stringify({ A: $scope.A, B: $scope.B }), noCache: Date.now() },

                      // Caching abschalten
                      cache: false
                  })
            .then(function (result) {
                console.log(result.toString());

                var res = JSON.parse(result.data);
                $scope.Res = res.data;

            })
            .catch(function (result) {
                console.log("Fehler: " + result.status + " " + result.statusText);
            });

    }

    $scope.GetHistory = function () {

        // angular.element ermöglicht Zugriff auf jQuery, falls jQuery vor AngularJS geladen wurde.
        // Wurde kein Angular geladen, dann liefert element Zugriff auf die heuseigene Version
        // von jQuery: jsLite. Siehe https://docs.angularjs.org/api/ng/function/angular.element
        var url = angular.element("#btnGetHistoryWithNgHttp").attr("data-websrv-url");


        // 1. Webdienst mit jQuery aufrufen (wird in angular.element bereitgestellt)
        angular.element.ajax({
            type: "GET",
            url: url,
            cache: false,
            data: "job=" + JSON.stringify({ gruss: "hallo" })
        }).done(function (Data, status, req) {
            console.log(Data.toString());

            var historyObj = JSON.parse(Data);
            $scope.Protokoll = historyObj;

            // Bindungen aktualisieren, da Änderungen aus jQuery heraus vom Dirty- Checking
            // nicht erkannt werden
            $scope.$digest();

        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR.status.toString());
        });
    }

    $scope.GetHistoryWithAngularHttp = function () {

        // angular.element ermöglicht Zugriff auf jQuery, falls jQuery vor AngularJS geladen wurde.
        // Wurde kein Angular geladen, dann liefert element Zugriff auf die heuseigene Version
        // von jQuery: jsLite. Siehe https://docs.angularjs.org/api/ng/function/angular.element
        var url = angular.element("#btnGetHistoryWithNgHttp").attr("data-websrv-url");

        $http
            .get(url,
                  {
                      // Querystring- Parameter. noCache wird ständig mit einem neuen Zeitstempel
                      // initialisiert, um so die Bedieung aus dem Cache zu vermeiden
                      params: { job: JSON.stringify({ gruss: "hallo" }), noCache: Date.now() },

                      // Caching abschalten
                      cache: false
                  })
            .then(function (result) {
                console.log(result.toString());

                var historyObj = JSON.parse(result.data);
                $scope.Protokoll = historyObj;

            })
            .catch(function (result) {
                console.log("Fehler: " + result.status + " " + result.statusText);
            });

    }

}]);

//var app2 = angular.module('MyCalc2', []);
//app2.controller('MyCalcCtrl2', function ($scope) {

//    // Angezeigte Genauigkeit (wird in der View in einer Expression ausgewertet)
//    $scope.Accuracy = 2;

//    $scope.Add = function () {
//        console.log($scope.Accuracy);
//        $scope.Res = $scope.A + $scope.B;
//    };
//    $scope.Sub = function () {
//        $scope.Res = $scope.A - $scope.B;
//    };
//    $scope.Mul = function () {
//        $scope.Res = $scope.A * $scope.B;
//    };
//    $scope.Div = function () {
//        $scope.Res = $scope.A / $scope.B;
//    };
//});

//angular.module("kombiniertesModul", ["MyCalc", "MyCalc2"]);

QUnit.test("Selbsdefinierten Service aus MyTools Modul testen", function (assert) {

    var injector = angular.injector(['MyTools']);
    var MakeNumInvariant = injector.get('MakeNumCultureInvariant');

    assert.equal(MakeNumInvariant("3,142"), 3.142, "3,142 nach de-Kultur sollte zu 3.142 gewandewlt werden");

});

QUnit.test("app controller Testen", function (assert) {

    // Der Injektor ist für die Auflösung der Abhängigkeiten zuständig
    // Parameter sind die Module, in denen Dienste etc. für die Auflösung der DI bereitstehen
    var injector = angular.injector(['ng', 'MyTools', 'MyCalc']);

    // Zugriff aud Dienste
    var $http = injector.get('$http');

    // Dienst holen, mit dem ein Controller gestartet werden kann
    var $controller = injector.get('$controller');
    var $scope = {};

    // Kontroller MyCalcCtrl kaufrufen: 2. Parameter bestückt die Parameterliste der Konstruktorfunktion vom Controller
    $controller('MyCalcCtrl', { $http: $http, $scope: $scope });

    $scope.A = 2;
    $scope.B = 3;
    var summe = $scope.Add();
    assert.equal($scope.Res, 5, "2 + 3 sollte 5 sein");

});

QUnit.test("app controller Testen mit MakeCult Atrappe", function (assert) {

    // Der Injektor ist für die Auflösung der Abhängigkeiten zuständig
    // Parameter sind die Module, in denen Dienste etc. für die Auflösung der DI bereitstehen
    var injector = angular.injector(['ng', 'MyCalc']);

    // Zugriff aud Dienste
    var $http = injector.get('$http');

    // Dienst holen, mit dem ein Controller gestartet werden kann
    var $controller = injector.get('$controller');
    var $scope = {};


    function mock($scope) {

        $scope.A = $scope.A * 10;
        $scope.B = $scope.B * 10;
    }

    // Kontroller MyCalcCtrl kaufrufen: 2. Parameter bestückt die Parameterliste der Konstruktorfunktion vom Controller
    $controller('MyCalcCtrl', { $http: $http, $scope: $scope, MakeCultureInvariant: mock });

    $scope.A = 2;
    $scope.B = 3;
    var summe = $scope.Add();
    assert.equal($scope.A, 20, "mock funkt");
    assert.equal($scope.B, 30, "mock funkt");


});