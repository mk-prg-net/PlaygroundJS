
$(document).ready(function () {

    $('#CountH1').click(function () {
        var h1Tags = document.getElementsByTagName('h1');
        alert(h1Tags.length);
    });

    $('#Extend').click(function () {
        var sunSection = document.getElementById('sun');
        var pDiameter = document.createElement('p');
        pDiameter.innerHTML = "Durchmesser: " + '<meter value="696342">696342 km</meter>';
        sunSection.appendChild(pDiameter);
    });

});