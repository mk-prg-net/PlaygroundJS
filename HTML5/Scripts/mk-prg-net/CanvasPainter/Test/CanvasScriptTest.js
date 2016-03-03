//<unit_header>
//----------------------------------------------------------------
//
// Martin Korneffel: IT Beratung/Softwareentwicklung
// Stuttgart, den 1.3.2016
//
//  Projekt.......: CanvasPainter
//  Name..........: CanvasRobotTest.js
//  Aufgabe/Fkt...: Test der Automatisierungskomponente
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
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '/Scripts/mk-prg-net/CanvasPainter',

    paths: {
        "QUnit": "../../qunit",
        "Q": "../../q"
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


// 2. Starten der Anwendung
requirejs(['QUnit', 'Geometry/Angle', 'Basics/Defs', 'Script/Script', 'Script/Pictograms'],
    function (QUnit, Angle, Defs, Script, Pictograms) {


        function SetTrafo(FK, Phi, newTx, newTy) {
            return FK.map(function (script) {

                if (script.Name === 'rotate') {
                    return Script.Cmd('rotate')(Angle.toRad(Phi));
                }
                else if (script.Name === 'translate') {
                    return Script.Cmd('translate')(newTx, newTy);
                } else {
                    return script;
                }
            });
        }



        QUnit.test("Pictogramme zeichnen", function (assert) {

            var canvas = $("#pane").get(0);
            var ctx = canvas.getContext('2d');
            var width = $('#pane').attr('width');
            var height = $('#pane').attr('height');

            var canvasInit = [
                Script.Cmd('fillStyle')('#000000'),
                Script.Cmd('fillRect')(0,0, width, height),
            ];

            Script.plot(canvasInit, ctx);

            var FK = Pictograms.createCrosshair();
            assert.ok(FK.length > 0, 'Das Fadenkreuz sollte aus mehreren Elementen bestehen')

            // Liste modifizieren
            FK.unshift(Script.Cmd('rotate')(0))
            FK.unshift(Script.Cmd('translate')(100, 100));
            FK.unshift(Script.Cmd('save')());
            FK.push(Script.Cmd('restore')());

            Script.plot(FK, ctx);

            var FK2 = SetTrafo(FK, 30, 200, 100);
            Script.plot(FK2, ctx);
            
            var FK3 = SetTrafo(FK, 45, 200, 200);
            Script.plot(FK3, ctx);
            

            var FK4 = SetTrafo(FK, 0, 100, 200);
            Script.plot(FK4, ctx);

           
            var nonLin = [
                Script.Cmd('save')(),

                Script.Cmd('strokeStyle')('#ffaa00'),
                Script.Cmd('fillStyle')('#aaff00'),
                Script.Cmd('translate')(250, 200),

                // Figur aus quadratischen und kubischen Linien zeichnen
                Script.Cmd('beginPath')(),
                Script.Cmd('moveTo')(0,0),
                Script.Cmd('quadraticCurveTo')(100, 100, 100, 0),
                Script.Cmd('quadraticCurveTo')(150, 200, 150, 100, 100, 200),
                Script.Cmd('closePath')(),
                Script.Cmd('stroke')(),

                // Kreis zeichnen
                Script.Cmd('beginPath')(),
                Script.Cmd('arc')(200, 100, 75, Angle.toRad(270), Angle.toRad(90), false),
                Script.Cmd('closePath')(),
                Script.Cmd('stroke')(),


                // Rechtecke Zeichnen     
                Script.Cmd('beginPath')(),
                Script.Cmd('strokeRect')(300, 0, 150, 100),
                Script.Cmd('fillRect')(310, 10, 130, 80),
                Script.Cmd('clearRect')(320, 20, 110, 60),
                Script.Cmd('closePath')(),

                Script.Cmd('restore')()

            ];

            Script.plot(nonLin, ctx);

            var jsonScript = JSON.stringify(nonLin);
            var jsonPart = JSON.stringify(Script.Cmd('lineTo')(10, 20));

            var obj = JSON.parse(jsonPart);
            assert.ok('lineTo' in obj, 'Das eingelesene JSON- Objekt sollte eine lintTo Eigenschaft haben');
            if ('lineTo' in obj) {
                var lineTo = Script.CmdFromObject('lineTo')(obj.lineTo);
                assert.strictEqual(lineTo.X, 10.0, 'lineTo.X sollte 10 sein');
                assert.strictEqual(lineTo.Y, 20.0, 'lineTo.Y sollte 20 sein');
            }

           
        });

        // QUnit starten.
        QUnit.start();

    });

