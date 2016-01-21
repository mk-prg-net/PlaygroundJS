// Konfigurieren der Laufzeitumgebung von Require
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '/Scripts/JavaScriptLernen/RequireJS',
});

// Start the main app logic.
requirejs(['mko/PrimScan', 'Newton/Newton'],
function (PrimScan, Newton) {
    
    var EinMeter = Newton.Meter(100);
    var inCm = Newton.Centimeter(0).From(EinMeter);
    

    PrimScan(1, 10000,
        function (CancelationToken, primNums) {
            alert(primNums.length);
        },
        function (err) {
            alert("Fehler" + err);
        },
        function (begin) {
            console.log("Partition " + begin);
        }
    );
});