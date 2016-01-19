
// 1. Konfigurieren von RequireJS
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '/Scripts/JavaScriptLernen/lodash',

    paths: {
        "QUnit": "../../qunit",
        "lodash": "../../lodash-amd/main"

    },

    shim: {
        'QUnit': {
            exports: 'QUnit',
            init: function () {
                QUnit.config.autoload = false;
                QUnit.config.autostart = false;
            }
        }
    }
});

requirejs(['QUnit', 'lodash'], function (QUnit, _) {

    QUnit.test("Listenverarbeitung mit lodash", function (assert) {

        // Beispiel aus der lodash Doku
        assert.ok(_.some([null, 0, 'yes', false], Boolean), "einer in [null, 0, 'yes', false] sollte als Boolean erkannt werden");

        var numbers = [2, 3, 9, 13, 15, 17, 18, 19, 21, 24, 27];

        var ist_durch_3_teilbar = function (num) { return num % 3 === 0 };

        assert.ok(_.some(numbers, ist_durch_3_teilbar), "in der Liste " + _.join(numbers, ", ") + " sollten durch 3 teilbare Werte erkannt werden");

        assert.equal(_.filter(numbers, ist_durch_3_teilbar).length, 7);

        var durch_3_teilbare = [3, 9, 15, 18, 21, 24, 27];

        var res1 = _.chain(numbers).filter(ist_durch_3_teilbar).value();
        var res2 = _.chain(numbers).filter(ist_durch_3_teilbar).zip(durch_3_teilbare).value();        

        assert.ok(_.chain(numbers).filter(ist_durch_3_teilbar).zip(durch_3_teilbare).every(function (pair) { return pair[0] === pair[1] }).value());

    });

    QUnit.start();

});

