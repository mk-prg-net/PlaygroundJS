//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 20.5.2015
//
//  Projekt.......: HTML5
//  Name..........: hohlspiegel.js
//  Aufgabe/Fkt...: Berechnet Oberfläche eine Holhspiegels
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

// Berechnet aus dem Abstand der Speigelsegmentkante i vom Brennpunkt den Abstand der 
// Spiegelsegmentkante i + 1
function Riplus1(Ri, alpha) {
    var alphaRad = Rad(alpha);
    var cosAlpha = Math.cos(alphaRad);
    return Ri * (cosAlpha + 1 / cosAlpha) / 2.0;
}

// Umrechnen von Grad in Bogen
function Rad(AngleInDeg){
    return AngleInDeg*Math.PI/180.0;
}


function FolgeSegmenten(anz, Ri, alpha, segmente) {

    var Ri1 = Riplus1(Ri, alpha);
    segmente.push({Alpha: 90-anz*alpha, Ri: Ri1 });
    anz--;
    if (anz > 0) {
        return FolgeSegmenten(anz, Ri1, alpha, segmente);
    } else {
        return segmente;
    }
}

var app = angular.module('OptoModule', []);
app.controller('HohlspiegelCtrl', function ($scope) {

    $scope.f = 50.0;
    $scope.alpha = 5.0;
    $scope.maxAlpha = 90.0;

    $scope.segmente = [];

    $scope.CalcHohlspiegelsegmente = function () {

        var anzahl = Math.floor($scope.maxAlpha / 5.0);
        $scope.segmente = [];

        $scope.segmente = FolgeSegmenten(anzahl, $scope.f, $scope.alpha, $scope.segmente);

    }


});
