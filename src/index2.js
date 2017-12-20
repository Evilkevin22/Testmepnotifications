//Functions die wordt aangeroepen om door de data van de JSON te loopen


(function (globals) {
    "use strict";
    globals.jsonfile = [];
}((1, eval)('this')));

(function loadData() {
    fetch('../src/verhaaltje.json').then(function (response) {
        return response.json();
    }).then(function (data) {
        jsonfile = data;
        console.log(jsonfile);
    })
})();


function wait() {

    fetch('../src/verhaaltje.json').then(function (response) {
        return response.json();
    }).then(function (data) {
        for (var i = 0; i < data.intro.length; i++) {
            function pass(i) {
                setTimeout(function () {
                    wn.send(data.intro[i].title, data.intro[i].text, data.intro[i].image);
                    console.log(data.intro[i].timestamp);

                }, data.intro[i].timestamp);
            };
            pass(i);

        }
    });
};


function addarray() {


    console.log(jsonfile);
    jsonfile['intro'].push({"title": "test", "text": "test", "image": "test", "timestamp": "test"});
    console.log(jsonfile);
}

function removearray() {

    console.log(data);
    jsonfile.intro.splice(1, 3);
    console.log(data);
}

