//De bootleg fake manier van een globale variabele aanmaken. Dit is gedaan zodat ik maar 1 keer fetch hoef te gebruiken
// Hierin wordt de JSON data opgehaald en geparsed zodat de rest van de funties alleen maar jsonfile hoeven aan te roepen

(function (globals) {
    "use strict";
    globals.jsonfile = [];
}((1, eval)('this')));

(function loadData() {
    fetch('../src/verhaaltje.json').then(function (response) {
        return response.json();
    }).then(function (data) {
        jsonfile = data;
    })
})();


//De wacht functie die een voor een de notificaties van de JSON looped

function wait() {
    for (var i = 0; i < jsonfile.intro.length; i++) {
        function pass(i) {
            setTimeout(function () {
                wn.send(jsonfile.intro[i].title, jsonfile.intro[i].text, jsonfile.intro[i].image);
                console.log(jsonfile.intro[i].timestamp);

            }, jsonfile.intro[i].timestamp);
        };
        pass(i);

    }
}


// Deze functie voegt een test object toe aan het bestaande JSON bestand doormiddel van PUSH

function addarray() {


    console.log(jsonfile);
    jsonfile['intro'].push({"title": "test", "text": "test", "image": "test", "timestamp": "test"});
    // console.log(jsonfile);
}

// Deze funtie verwijderd het eerste object van de JSON door middel van de geconfigureerde splice.

function removearray() {

    console.log(data);
    jsonfile.intro.splice(0, 1);
    // console.log(data);
}

// Deze functie wordt gebruikt bij het verwijderen van een object uit de JSON tabel. Hij wordt aangeroepen als een van de delete buttons wordt geklikt.

function killrow(i) {
    jsonfile.intro.splice(i, 1);
    // console.log(jsonfile)
}

// Deze functie creert de tabel waarbij hij eerst kijkt naar de data van de JSON. Hierdoor vult hij dynamisch de tableheader aan.
// Hier wordt er tevens voor gezorgd dat de 5e kollom van de tabel bestaat uit verwijder knoppen die hun bijhorend object verwijderen.

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

    var buttonHeader = document.createElement("th");
    buttonHeader.innerHTML = "delete";
    tr.appendChild(buttonHeader);

    for (var i = 0; i < jsonfile.intro.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < (col.length); j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = jsonfile.intro[i][col[j]];
        }

        var buttonCell = tr.insertCell(-1);
        buttonCell.innerHTML = "<button onclick='killrow()'(" + i + ")'>Delete</button>"
    }

    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}

//Deze functie haalt de data uit de textvelden die staan op de HTML pagina waarbij het dan pushed naar de JSON.

function erbijerbij() {

    var inputnaam = document.getElementById("name");
    var inputtext = document.getElementById("speech");
    var inputimg = document.getElementById("image");
    var inputtime = document.getElementById("time");

    var naamvalue = inputnaam.value;
    var textvalue = inputtext.value;
    var imagevalue = inputimg.value;
    var timevalue = inputtime.value;

    jsonfile['intro'].push({"title": naamvalue, "text": textvalue, "image": imagevalue, "timestamp": timevalue})
}

