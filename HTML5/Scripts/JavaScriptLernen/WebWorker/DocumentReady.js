// Webworker
var PrimWorker1 = new Worker("/Scripts/JavaScriptLernen/WebWorker/Task2.js");

PrimWorker1.onmessage = function (result) {

    $("#progress").val(result);

}
// Eventhandler, der startet, wenn das Dok geladen wurde
$(document).ready(function () {

    $("#StartCount").click(function () {
        
        // Starten des Webworkers
        PrimWorker1.postMessage("");

    });


    // Klick- Eventhandler für den Startbutton
    $("#StartScan").click(function () {

        var von = parseInt($("#von").val());
        var bis = parseInt($("#bis").val());

        // WebWorker- Objekt für die Primzahlsuche anlegen
        var PrimWorker = new Worker("/Scripts/JavaScriptLernen/WebWorker/Task.js");

        // Eventhandler registrieren, der gefeuert wird, wenn unser Task fertigestellt wurde
        PrimWorker.onmessage = function (result) {

            var resObj = JSON.parse(result.data);
            ProcPart(resObj.ok, resObj.res);
            //if (resObj.ok) {
            //    PrimWorker = null;
            //}

        }

        // Starten des Webworkers
        PrimWorker.postMessage({ begin: von, end: bis });


        $("#StoppScan").click(function () {

            PrimWorker.terminate();
            console.log("PrimWorker brutal terminiert");
            //Primworker = null;

        });

    });

});

counter = 0;

function ProcPart(ok, parRes) {
    if (ok) {
        $("#Ausgabe").empty();
        var res = parRes.join(', ');
        $("#Ausgabe").append(res);
    } else {
        counter++;
        $("#progress").val(counter.toString());
    }
}

