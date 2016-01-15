//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 23.5.2015
//
//  Projekt.......: HTML5
//  Name..........: CurrencyExchange.js
//  Aufgabe/Fkt...: Ruft einen Webdienst über JSONP auf
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

function CurrencyExchange() {   

    var betrag = parseFloat($("#fromCur").val());

    var fromCur = $("#selFromCur option:selected").attr("value");
    var toCur = $("#selToCur option:selected").attr("value");

    var fromTo = fromCur + toCur;

    var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22" + fromTo + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback="; 

    //var jquery = "JsonFromTo=" + JSON.stringify(query);
    jquery = ""
    $.ajax({
        type: "GET",
        url: url,
        data: ""
    }).done(function (Data, status, req) {
        console.log(Data.toString());

        //var currentExRate = JSON.parse(Data);

        var Ask = parseFloat(Data.query.results.rate.Ask);

        var betragInZielwaehrung = betrag * Ask;

        $("#ToCur").val(betragInZielwaehrung.toFixed(2));

    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.status.toString());
    });

    
}
