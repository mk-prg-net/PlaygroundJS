// Namensraum für BVB.graph- Lib

function GetNamespaceBvbGraph() {

    // Existiert BVB ? wenn nicht, dann komplett
    // inklusive Graph anlegen
    var BVB = BVB || {
        graph: {}
    };

    // existiert BVB.graph ?
    BVB.graph = BVB.graph || {};

    // Speziellen Namensraum BVB.graph zurückgeben
    return BVB.graph;
}