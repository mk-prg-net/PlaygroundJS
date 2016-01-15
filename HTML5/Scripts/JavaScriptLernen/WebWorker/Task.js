// Primzahlscan in einem Thread

function GetNamespaceMkoAlgo() {

    if (typeof mko !== 'undefined') { } else { mko = {} }
    if ("algo" in mko) { } else { mko.algo = {} }

    return mko.algo;
}

(function () {

    var ns = GetNamespaceMkoAlgo();

    ns.CreateCancellationToken = function () {
        return { stop: false };
    }

})();

(function () {

    var ns = GetNamespaceMkoAlgo();

    ns.PrimTest = function (candidate) {

        var primfactor = 2;
        // 1 von den Primzahlen ausschließen, da neutrales Element bezüglich Multiplikation
        if (candidate === 1) return false;

        // Prüfen gegen die Liste der allgemein bekannten Primzahlen
        if ([2, 3, 5, 7, 11, 13, 17, 19].indexOf(candidate) > -1)
            return true;

        // Prüfen auf mögliche Teiler
        while (primfactor * primfactor < candidate && candidate % primfactor != 0) {
            primfactor++;
        }

        if (primfactor * primfactor > candidate)
            return true;
        else
            return false;
    };


    ns.PrimScan = function (begin, end, done, fail, progressInfo) {

        // Abbruchtoken. Über dieses kann der Rufer den asynchronen Berechnungsprozess vorzeitig stoppen.
        var CancellationToken = ns.CreateCancellationToken();

        return ns.PrimScanWithCancel(CancellationToken, begin, end, done, fail, progressInfo);
    };


    // doneCallback(CancellationToken, PrimNums[])
    // progressInfo(Anzahl bereits gefundener)
    ns.PrimScanWithCancel = function (CancellationToken, begin, end, done, fail, progressInfo) {

        // Liste der gefundenen Primzahlen anlegen
        var primNums = [];

        primScanPart(CancellationToken, primNums, begin, end, done, fail, progressInfo);

        return CancellationToken;
    };


    function primScanPart(CancellationToken, primNums, begin, end, done, fail, progressInfo) {

        try {

            if (CancellationToken.stop) {
                done(CancellationToken, primNums);
                return;
            }

            if (typeof progressInfo !== 'undefined') {
                progressInfo(begin);
            }

            var EndOfPart = Math.min(begin + 1000, end);

            //console.log("begin: " + begin + " endPart: " + EndOfPart);

            for (i = begin; i < EndOfPart; i++) {
                if (ns.PrimTest(i))
                    primNums.push(i);
            }

            if (EndOfPart == end)
                done(CancellationToken, primNums);
            else
                // primScanPart()
                setTimeout(primScanPart, 0, CancellationToken, primNums, begin + 1000, end, done, fail, progressInfo);

        } catch (err) {
            console.log("mko.algo.primScanPart ist abgestürtzt: " + err);
            if (typeof fail !== 'undefined')
                fail(err);

        }
    };

})();



// Self stellt den Webworkerkontext bereit
// Parameter Auftrag as String
self.onmessage = function (Auftrag) {

    // Die Eigenschaft Data enthält den über Postmessage übergebenen String
    var intervall = Auftrag.data;

    mko.algo.PrimScan(intervall.begin, intervall.end,
        // done
        function (CancelToken, PrimNums) {
            self.postMessage(JSON.stringify({ ok: true, res: PrimNums }));
        },
        // fail
        function (err) {
            self.postMessage(JSON.stringify({ ok: false, res: [] }));
        },
        // ProgressInfo (wir verzichten darauf)
        function (begin) {
            console.log("bearbeite Partition von " + begin + " bis" + (begin + 1000));
            self.postMessage(JSON.stringify({ ok: false, res: [] }));

        }
    );

}