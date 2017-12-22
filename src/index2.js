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

function killrow(i) {
    jsonfile.intro.splice(i, 1);
    console.log(jsonfile)
}

function CreateTableFromJSON() {

    var col = [];
    for (var i = 0; i < jsonfile.intro.length; i++) {
        for (var key in jsonfile.intro[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    console.log(col);

    var table = document.createElement("table");

    var tr = table.insertRow(-1);

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);
    }



    for (var i = 0; i < jsonfile.intro.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < (col.length); j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = jsonfile.intro[i][col[j]];
        }


    }

    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}