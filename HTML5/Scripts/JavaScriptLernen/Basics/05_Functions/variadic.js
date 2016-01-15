//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 20.5.2015
//
//  Projekt.......: HTML5
//  Name..........: variadic.js
//  Aufgabe/Fkt...: Variadische Funktionen haben flexible Parameterlisten
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


function VariadicTest() {
    console.log("Variadic")

    function Add(a, b) { return a + b; }

    function Add(a, b, c) { return a + b + c; }

    var res = Add(1, 2);
    var res = Add(1, 2, 3);

    function Vector2d(X, Y) {
        this.X = X;
        this.Y = Y;
    }

    function Vector3d(X, Y, Z) {
        this.X = X;
        this.Y = Y;
        this.Z = Z;
    };

    // Die Z- Komponente muss nicht definiert sein. Dann wird nur ein 2d- Vector erzeugt.
    function CreateVector(X, Y, Z) {
        if (typeof Z !== 'undefined') {
            return new Vector3d(X, Y, Z);
        } else {
            return new Vector2d(X, Y);
        }
    }

    // generell können Parameter in den Parameterlisten ausgelassen werden. Sie sind dann undefiniert
    var v2 = CreateVector(1, 2);
    var v3 = CreateVector(1, 2, 3);


    // Die Durchschnittsbildung kann über beliebig viele Werte erfolgen. Gut das JavaScript
    // generell Parameterlisten als flexible Strukturen betrachtet
    function AVG() {

        // Liste aller übergebener Paramter ist im Array arguments abgelegt
        // Achtung: das arguments- Array sollte niemals verändert werden. Deshalb 
        // wird es über folgendes Idiom kopiert:
        var args = [].slice.call(arguments);

        try {
            // Liste aller übergebener Paramter ist im Array arguments abgelegt
            if (args.length > 0) {

                var mean = 0.0;

                for (var i = 0; i < args.length; i++) {
                    mean += args[i];
                }

                return mean / args.length;
            } else {
                return Number.NaN;
            }
        } catch (err) {
            // Fehler dokumentieren und in einer weiteren Exception verpacken und 
            // werfen

            throw "AVG: InnerException: " + err;            
        }
    }

    var res1 = AVG();

    var res2 = AVG(1, 2, 3);

    var res3 = AVG(3, 5, 7, 9, 11, 13, 15, 18, 21, 25, 29);

    // wird nicht funktionieren, da arguments nur einen eintrag (gesamtes Array) erhält
    var res4 = AVG([3, 5, 7, 9, 11, 13, 15, 18, 21, 25, 29]);

    // trotzdem AVG wiederverwenden mittels apply
    // Achtung, da AVG keine Objektmethode ist, wird anstelle einer Objektreferenz im ersten Parameter die null übergeben.
    var res5 = AVG.apply(null, [3, 5, 7, 9, 11, 13, 15, 18, 21, 25, 29]);


    // Symbol für Optionale Parameter
    var _ = {};

    // Funktion mit vielen PArametern, die nicht alle notwendigerweise gesetzt werden müssen
    function SetStyle(sel, color, backgroundColor, borderStyle, borderColor, borderWidht) {

        if (color !== _) {
            jQuery(sel).css("color", color);
        }
        if (backgroundColor !== _) {
            jQuery(sel).css("background-color", backgroundColor);
        }
        if (borderStyle !== _) {
            jQuery(sel).css("border-style", borderStyle);
        }
        if (borderColor !== _) {
            jQuery(sel).css("border-color", borderColor);
        }
        if (borderWidht !== _) {
            jQuery(sel).css("border-width", borderWidht);
        }
    }

    // Auslassen von Parametern mittels Platzhalter- Symbol _
    SetStyle("#ConfigObjectTest", _, '#cfe2f3ff', 'dotted', _, '4px');
    SetStyle("#ConfigObjectTest", {}, '#cfe2f3ff', 'dotted', {}, '4px');

    function SetStyle2(sel, color, backgroundColor, borderStyle, borderColor, borderWidht) {

        if (color != _) {
            jQuery(sel).css("color", color);
        }
        if (backgroundColor != _) {
            jQuery(sel).css("background-color", backgroundColor);
        }
        if (borderStyle != _) {
            jQuery(sel).css("border-style", borderStyle);
        }
        if (borderColor != _) {
            jQuery(sel).css("border-color", borderColor);
        }
        if (borderWidht != _) {
            jQuery(sel).css("border-width", borderWidht);
        }
    }

    SetStyle2("#ConfigObjectTest", {}, '#cfe2f3ff', 'dotted', {}, '4px');


    function SetStyle3(sel, color, backgroundColor, borderStyle, borderColor, borderWidht) {

        if (color != null) {
            jQuery(sel).css("color", color);
        }
        if (backgroundColor != null) {
            jQuery(sel).css("background-color", backgroundColor);
        }
        if (borderStyle != null) {
            jQuery(sel).css("border-style", borderStyle);
        }
        if (borderColor != null) {
            jQuery(sel).css("border-color", borderColor);
        }
        if (borderWidht != null) {
            jQuery(sel).css("border-width", borderWidht);
        }
    }

    SetStyle3("#ConfigObjectTest", null, '#cfe2f3ff', 'dotted', null, '4px');


    // Implementierung mit optionalen Konfigurationsobjekt
    function SetStylWithConfigObj(sel, cfg) {

        // nur wenn cfg.color definiert ist, wird auch der zweite Teil der && Operation ausgewertet
        cfg.color && jQuery(sel).css("color", cfg.color);
        cfg.backgroundColor && jQuery(sel).css("background-color", cfg.backgroundColor);
        cfg.borderStyle && jQuery(sel).css("border-style", cfg.borderStyle);
        cfg.borderColor && jQuery(sel).css("border-color", cfg.borderColor);
        cfg.borderWidht && jQuery(sel).css("border-width", cfg.borderWidht);
    }

    // Durch das Konfigurationsobjekt erhält man benannte Parameter
    SetStylWithConfigObj("#ConfigObjectTest2",
        {
            color: "blue",
            backgroundColor: '#cfe2f3ff'
        });



    console.log("Variadic end")
}

