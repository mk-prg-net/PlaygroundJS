// mko, 26.5.2015
// Demo der Globalize.js- Lib
// Projektdoku: https://github.com/jquery/globalize#getting-started



// langFrom: SprachCultucode, in dem die eingelesenen Werte gültig sind
// langTo: SprachCulturcode, in dem die Werte übersetzt werden sollen
function TranslateNumber(langFrom, langTo, InputNumber, InputDate, setResult) {

    // Globalize muss erst mit den Kulturschrott von Unicode gelade werden:
    // https://github.com/jquery/globalize/blob/master/doc/cldr.md
    // Reihenfolge wichtig ! 
    // Zusatzproblem: Einfach mal ein json- File downloaden in ASP.NET MVC geth nicht (404.3 Frobidden...)
    //                Muss erst mal in der web- Konfig freigeschaltet werden:
    //                http://stackoverflow.com/questions/17626776/why-is-my-json-file-not-found
    $.when(

        $.get("/Scripts/cldr/de/numbers.json"),
        $.get("/Scripts/cldr/de-CH/numbers.json"),
        $.get("/Scripts/cldr/en-US-POSIX/numbers.json"),

        $.get("/Scripts/cldr/de/dateFields.json"),
        $.get("/Scripts/cldr/de-CH/dateFields.json"),
        $.get("/Scripts/cldr/en-US-POSIX/dateFields.json"),

        $.get("/Scripts/cldr/de/ca-gregorian.json"),
        $.get("/Scripts/cldr/de-CH/ca-gregorian.json"),
        $.get("/Scripts/cldr/en-US-POSIX/ca-gregorian.json"),

        $.get("/Scripts/cldr/de/timeZoneNames.json"),
        $.get("/Scripts/cldr/de-CH/timeZoneNames.json"),
        $.get("/Scripts/cldr/en-US-POSIX/timeZoneNames.json"),

         $.get("/Scripts/cldr/supplemental/likelySubtags.json"),
        $.get("/Scripts/cldr/supplemental/timeData.json"),
        $.get("/Scripts/cldr/supplemental/weekData.json"),
        $.get("/Scripts/cldr/supplemental/numberingSystems.json"),
        $.get("/Scripts/cldr/supplemental/ordinals.json"),
        $.get("/Scripts/cldr/supplemental/plurals.json")

    ).then(function () {
        // done:
        // Normalize $.get results, we only need the JSON, not the request statuses.
        return [].slice.apply(arguments, [0]).map(function (result) {
            return result[0];
        });
    },
        // fail:
        function () {
            alert("funkt nicht...");
        }
    ).then(Globalize.load).then(function () {

        // Jetzt kann endlich globalisiert werden !

        // Lesen der Eingaben
        var parseInput = Globalize(langFrom).numberParser();
        var val = parseInput(InputNumber);

        var parseInputDate = Globalize(langFrom).dateParser(); //({ date: "short" });
        var dat = parseInputDate(InputDate);


        // Schreiben der Ausgaben
        var outputformatter = Globalize(langTo).numberFormatter();
        var output = outputformatter(val);

        var outputDate = "";
        if (dat != null) {
            var outputformatterDate = Globalize(langTo).dateFormatter();
            outputDate =  outputformatterDate(dat);
        }

        setResult(output, outputDate);
    });



}



