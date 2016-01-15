// Zugriff auf Elemente über Selektoren

$(document).ready(function () {
    // Rahmen für die Ausführung JQuery- Scripten

    // 1. Click- Eventhandler für btnFilterDom
    $("#btnFilterDom").click(function (e) {
        // 2. Selektor einlesen
        var sel = $("#tbxSelector").val();

        // Alten Inhalt im Result löschen
        $("#Result").empty();

        // 3. Selektor ausführen
        $(sel).each(function (ix, el) {
            // 4. Selektierte im Result darstellen
            //$("#Result").append('<div class="DataItem">' + $(el).attr("class") + "," + $(el).attr("title") + '</div>'); 
           
            //$("#Result").append('<tr><td>' + ($(el).attr('id') || "") + ','($(el).attr('href') || "") + ','($(el).attr('src') || "") + '</td></tr>');
            $("#Result").append('<tr><td>' + $(el).html() + '</td></tr>');
        });
        
    });
});