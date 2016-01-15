//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 15.6.2015
//
//  Projekt.......: HTML
//  Name..........: Lisp.js
//  Aufgabe/Fkt...: Liefert den Namensraum für die Funktionen der Listenverarbeitung.
//                  Diese Funktionen kapseln die Arrayfunktionen in einer API,
//                  die klassischen LISP und modernen LINQ entlehnt ist
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


(function () {

    var ns = GetNamespaceMkoLisp();

    // Liefert Liste[Index]
    ns.IX = function (Liste, Index) {
        return Liste[Index];
    }

    // Das erste Listenelement First([a, b,...]): [a, b, ...] -> a
    ns.First = function (Liste) {
        return Liste[0];
    }

    // Das erste Listenelement Second([a, b,...]): [a, b, ...] -> b
    ns.Second = function (Liste) {
        return Liste[1];
    }

    ns.Last = function (Liste) {
        return Liste[Liste.length - 1];
    }

    // Die ersten n Listenelemente Take([a, b,..., x, ..., e]): [a, b,..., x, ..., e] -> [a, b,..., x]
    //                         Platznr:  0  1      n       length-1   
    // [a, b,..., x, ..., e].length: Anzahl der Elemente
    // Größte Platznummer : length - 1

    ns.Take = function(Liste, n) {
        return Liste.slice(0, n);
    }

    // Die nach den ersten n folgenden Listenelemente zurückgeben
    ns.Skip = function(Liste, n) {
        return Liste.slice(n, Liste.length);
    }

    ns.Count = function(Liste) {
        return Liste.length;
    }

    ns.Rest = function(Liste) {
        return Liste.slice(1, Liste.length);
    }

    ns.Concat = function(Liste1, Liste2) {
        return Liste1.concat(Liste2);
    }

    // Test auf gleichheit von Listen
    // Gibt true zurück, wenn 
    //  1) beide Listen die gleiche Anzahl von Elementen haben,
    //  2) jedes Element i in Liste1 mit Element i in Liste2 übereinstimmt
    ns.Equals = function(Liste1, Liste2) {

        if (ns.Count(Liste1) === ns.Count(Liste2)) {
            if (ns.Count(Liste1) > 0)
                if (ns.First(Liste1) === ns.First(Liste2))
                    return ns.Equals(ns.Rest(Liste1), ns.Rest(Liste2))
                else
                    return false;
            else
                // Sonderfall zwei leere Listen liegen vor
                return true;
        } else
            return false;
    }

    // Filter eine Liste bezüglich der Prädikatfunktion Predicat(Element) Element -> true oder false
    // Die Prädikatfunktion liefert true für die gesuchten Elemente.   
    ns.Where = function (List, Predicat) {
        var result = [];

        List.forEach(function (el) {
            if (Predicat(el)) {
                // push erweitert eine Liste am rechten Ende
                // [a, b].push(c) -> [a, b, c]
                result.push(el);
            }
        });

        return result;
    }

    // Map(x): x -> mapFunc(x)
    ns.Map = function (List, mapFunc) {
        return List.map(mapFunc);
    }

})();




