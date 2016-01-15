//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 27.5.2015
//
//  Projekt.......: HTML5
//  Name..........: PredSuccRatio.js
//  Aufgabe/Fkt...: Berechnet das Verhältnis zwischen Vorgänger und Nachfolger
//                  in einer Zahlenreihe
//                  
//
//
//
//
//<unit_environment>
//------------------------------------------------------------------
//  Zielmaschine..: WebBrowser HTML5
//  Werkzeuge.....: Visual Studio 2012
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

// Namensraum anlegen
(function () {

    var ns = GetNamespaceMkoAlgo();

    // Berechnet das Verhältnis zwischen Abstand zum Vorgänger und Nachfolger eines jeden Elements in einer Zahlenfolge
    // numberSequ = [ Zahlenfolge ... ]
    // progressInfo(beginPart)
    // done(CancellationToken, PredSuccRatioSeq)
    // fail(errMsg)
    ns.PredSuccRatio = function (numberSequ, done, fail, progressInfo) {

        // Abbruchtoken. Über dieses kann der Rufer den asynchronen Berechnungsprozess vorzeitig stoppen.
        var CancellationToken = ns.CreateCancellationToken();

        return ns.PredSuccRatioWithCancel(CancellationToken, numberSequ, done, fail, progressInfo);
    }

    // ... wie ns.PredSuccRatio
    // CancellationToken, über das ein vorzeitiger Abbruch der Berechnungen initiiert werden kann.
    ns.PredSuccRatioWithCancel = function (CancellationToken, numberSequ, done, fail, progressInfo) {

        var PredSuccRatioSeq = [1];

        if (numberSequ.length < 3) {
            done(PredSuccRatioSeq);
        }

        doIt(CancellationToken, PredSuccRatioSeq, 1, numberSequ, done, fail, progressInfo);

        return CancellationToken;
    };

    // Kern der Berechnung. Folge wird in Abschnitte aufgeteilt, die asynchron berechnet werden.
    function doIt(CancellationToken, PredSuccRatioSeq, begin, numberSequ, done, fail, progressInfo) {

        try{
            if (!CancellationToken.stop) {

                if (typeof progressInfo !== 'undefined') {
                    progressInfo(begin);
                }

                for (var i = begin, endPart = Math.min(begin + 999, numberSequ.length - 2) ; i < endPart; i++) {

                    var n = numberSequ[i] - numberSequ[i - 1];
                    var d = numberSequ[i + 1] - numberSequ[i];
                    var q = n / d;

                    PredSuccRatioSeq.push(q);
                }

                if (begin + 1000 < numberSequ.length - 2) {
                    setTimeout(doIt, 0, CancellationToken, PredSuccRatioSeq, begin + 1000, numberSequ, done, fail, progressInfo)
                } else {
                    done(CancellationToken, PredSuccRatioSeq);
                }
            }
        } catch (err) {
            console.log("mko.algo.PredSuccRatio ist abgestürtzt: " + err)
            if(typeof fail !== 'undefined')
                fail(err);
        }
    }

})();
