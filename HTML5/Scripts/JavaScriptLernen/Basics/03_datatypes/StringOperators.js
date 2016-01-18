//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 13.5.2015
//
//  Projekt.......: HTML5
//  Name..........: b04__StringOperators.js
//  Aufgabe/Fkt...: Demo Zeichenkettenoperatoren
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


function StringOperatoren() {

    if (!String.prototype.repeat) {
        String.prototype.repeat = function (count) {
            'use strict';
            if (this == null) {
                throw new TypeError('can\'t convert ' + this + ' to object');
            }
            var str = '' + this;
            count = +count;
            if (count != count) {
                count = 0;
            }
            if (count < 0) {
                throw new RangeError('repeat count must be non-negative');
            }
            if (count == Infinity) {
                throw new RangeError('repeat count must be less than infinity');
            }
            count = Math.floor(count);
            if (str.length == 0 || count == 0) {
                return '';
            }
            // Ensuring count is a 31-bit integer allows us to heavily optimize the
            // main part. But anyway, most current (August 2014) browsers can't handle
            // strings 1 << 28 chars or longer, so:
            if (str.length * count >= 1 << 28) {
                throw new RangeError('repeat count must not overflow maximum string size');
            }
            var rpt = '';
            for (; ;) {
                if ((count & 1) == 1) {
                    rpt += str;
                }
                count >>>= 1;
                if (count == 0) {
                    break;
                }
                str += str;
            }
            return rpt;
        }
    }


    // Achtung: repeat funktioniert in IE X nicht. Erst ab Edge. In Chrome und Firefox kein Problem
    var Eingabe = "  \n\t \r\f    3,142" + " ".repeat(12);

    Eingabe = eatWhiteSpace(Eingabe);
    console.log(Eingabe === "3,142      ");

    // Einlesen als Number
    var PI = parseFloat(Eingabe);
    console.assert(PI === 3.142, "Einlesen von PI wegen , gescheitert");

    // Gegenmaßnahme: Wandele gnadenlos Komma in Punkt um
    // Funktionale Prog: Eingabe wird auf geänderte Ausgabe abgebildet
    Eingabe= Eingabe.replace(',', '.');

    PI = parseFloat(Eingabe);
    console.assert(PI === 3.142, "Nun ist aber was faul !");

    // 


}

function eatWhiteSpace(inString) {
    // Entfernt alle führenden Leerraumzeichen im übergeben String
    return inString.replace(/^\s+/, "");
}
