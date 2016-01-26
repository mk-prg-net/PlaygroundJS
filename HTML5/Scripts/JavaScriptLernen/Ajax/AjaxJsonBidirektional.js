
function Add() {

    var at = $("#A").val();
    var bt = $("#B").val();
    var task = {
        A : parseFloat(at),
        B : parseFloat(bt),
        OP: "ADD",

        _stopCaching: Date.now()
    }

    Calc(task);
}


function Sub() {

    var task = {
        A: parseFloat($("#A").val()),
        B: parseFloat($("#B").val()),
        OP: "SUB"
    }

    Calc(task);
}

function Calc(task) {
    // Cache Abschalten, da sonst nur der 1. Aufruf funkt
    //$.ajaxSetup({
    //    // Disable caching of AJAX responses
    //    //cache: false
    //    cache: true
    //});

    var taskJson = JSON.stringify(task);

    // 1. Actionlink bestimmen
    var url = $("#Calculator").attr("data-websrv-url");


    $.ajax({
        type: "GET",
        //dataType: "json",
        url: url,
        data: "task=" + taskJson,
        cache: true
    }).done(function (Data, status, req) {

        // Es hat geklappt
        console.log(Data.toString());
        var Result = JSON.parse(Data);       

        $("#calcResult").html('<span class="glyphicon glyphicon-time"></span>&nbsp;' + Result.Result.toString());

    }).fail(function (jqXHR, textStatus, errorThrown) {

        // Leider ein Fehler
        console.log(jqXHR.status.toString());
    });

}
