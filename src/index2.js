//Functions die wordt aangeroepen om door de data van de JSON te loopen

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


function spitarray() {

    fetch('../src/verhaaltje.json').then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
        data['intro'].push({"title":"test","text":"test","image":"test","timestamp":"test"});
        console.log(data);
    });
};

