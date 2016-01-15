// Ausprobieren der Module

// 1. Konfigurieren von RequireJS
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '/Scripts/JavaScriptLernen/Astro',

    path: {
        'QUnit': 'qunit'
    },

    shim: {
    'QUnit': {
        exports: 'QUnit',
        init: function() {
            QUnit.config.autoload = false;
            QUnit.config.autostart = false;
        }
    } 
}
});


// 2. Starten der Anwendung
requirejs(['QUnit', 'Galaxien/Galaxie', 'Sterne/Stern'],
    function (QUnit, Galaxie, Stern) {

        QUnit.test("Allgemeiner Test", function () {

            var MeineSterne = [
                new Stern("Sirius", 1000),
                new Stern("Beteigeuze", 33000),
                new Stern("Apha Centauri", 9000),
                new Stern("Sonne", 5000)
            ];

            equal(MeineSterne.length === 4);

            var MasseSonne = MeineSterne[3].GetMasse();
            var MasseSonne2 = MeineSterne[3].GetMassePrivat();

            var Milchstrasse = new Galaxie('Milchstrasse', MeineSterne);
            var Gewicht = Milchstrasse.GetMasse();
        });

        // start QUnit.
        //QUnit.load();
        QUnit.start();

    });
