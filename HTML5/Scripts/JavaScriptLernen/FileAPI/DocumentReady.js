$(document).ready(function () {

    // Q: http://www.html5rocks.com/de/tutorials/file/dndfiles/
    // Liste von Bilddateien auswählen und als Thumpnails darstellen
    $("#files").change(function handleFileSelect(evt) {

        // Alte Einträge löschen
        $("#list").empty();

        var files = evt.target.files; // FileList object

        // Loop through the FileList and render image files as thumbnails.
        //for (var i = 0, f; f = files[i]; i++) {
        for (var i = 0, f; i < files.length; i++) {

            f = files[i];
            // Only process image files.
            if (!f.type.match('image.*')) {
                continue;
            }

            var reader = new FileReader();

            // Closure to capture the file information.
            reader.onload = (function (theFile) {
                return function (e) {
                    // Render thumbnail.
                    var span = document.createElement('span');
                    span.innerHTML = ['<img class="thumb" src="', e.target.result, '" title="', escape(theFile.name), '"/>'].join('');

                    $("#list").prepend(span);
                };
            })(f);

            // Read in the image file as a data URL (Base 64 encoded)
            reader.readAsDataURL(f);
        }
    });

});