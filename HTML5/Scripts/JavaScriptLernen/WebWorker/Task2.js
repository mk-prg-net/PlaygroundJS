Counter = 0;

self.onmessage = function (Auftrag) {

    Counter++;

    self.postMessage(Counter.toString());

}