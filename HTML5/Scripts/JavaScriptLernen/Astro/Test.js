// Ausprobieren der Module

// 1. Konfigurieren von RequireJS
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '/Scripts/JavaScriptLernen/Astro',

    paths: {
        "QUnit": "../../qunit",
        jquery: "../../jquery-1.10.2"
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
requirejs(['jquery', 'QUnit', 'Galaxien/Galaxie', 'Sterne/Stern'],
    function (jquery, QUnit, Galaxie, Stern) {

        QUnit.test("Allgemeiner Test", function (assert) {

            var ver = jquery.now();

            var MeineSterne = [
                new Stern("Sirius", 1000),
                new Stern("Beteigeuze", 33000),
                new Stern("Apha Centauri", 9000),
                new Stern("Sonne", 5000)
            ];

            assert.equal(MeineSterne.length, 4);

            var MasseSonne = MeineSterne[3].GetMasse();
            var MasseSonne2 = MeineSterne[3].GetMassePrivat();

            var Milchstrasse = new Galaxie('Milchstrasse', MeineSterne);
            var Gewicht = Milchstrasse.GetMasse();
        });

        // start QUnit.
        //QUnit.load();
        QUnit.start();

    });
