


//A loop that runs through all the data from the JSON based on a timer. Sadly the function runs all the timers at once so it had to add up their time for them to pauze inbetween

function Wait() {

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



