// 26.2.16, allg. Prototypenvererbung


QUnit.test("Prototypen", function (assert) {


    // Verweist auf keinen übergeordneten Prototyp
    var AllgPrototyp = Object.create(null);

    AllgPrototyp.InstanceCounter = 0;
    AllgPrototyp.RegisterNewInstance = function () {
        AllgPrototyp.InstanceCounter++;
    }

    AllgPrototyp.deleteInstance = function(){
        AllgPrototyp.InstanceCounter --;
        return undefined;
    }



    var KontoPrototyp = Object.create(AllgPrototyp);

    KontoPrototyp.Einzahlen = function (betrag) {
        this.Guthaben += betrag;
    }

    var Kontofactory = {
        create: function (ktoNr) {
            var newKonto = Object.create(KontoPrototyp);

            // Fuinktionalität des allg. Prototypen nutzen
            newKonto.RegisterNewInstance();

            // Individuellen Eigenschaften des Kontos anlegen
            newKonto.Guthaben = 0;
            newKonto.KtoNr = ktoNr;

            return newKonto;
        },

        // Statischer Member
        NameBank: "Bankhaus Dagobert"


    }


    assert.equal(Kontofactory.NameBank, "Bankhaus Dagobert", "Es wurde das Bankhaus Dagobert erwartet");
    var DonaldsKonto = Kontofactory.create(4711);
    var DaisysKonto = Kontofactory.create(1234);

    assert.equal(AllgPrototyp.InstanceCounter, 2, "Aktuell sollten 2 Instanzen existieren");


    var PointPrototype = Object.create(AllgPrototyp);
    PointPrototype.Abstand = function () {
        return Math.sqrt(this.X * this.X + this.Y * this.Y);
    }


    var PointFactory = {

        create: function (x, y) {
            var newPoint = Object.create(PointPrototype);

            newPoint.RegisterNewInstance();

            newPoint.X = x;
            newPoint.Y = y;
        }

    };



    var p1 = PointFactory.create(1, 1);
    var p2 = PointFactory.create(-1, 5);


    assert.equal(AllgPrototyp.InstanceCounter, 4, "Aktuell sollten 2 Instanzen existieren");

    p1 = AllgPrototyp.deleteInstance();

});