/**Timeout function that calls a new function that calls the notification with it's properties.
 Somehow it won't accept a normal timeout
 function Wait() {
    setTimeout(function () {
        wn.send('test','sketjhefdsa')
    }, 1000);
};
 */


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



//Another try at the loop function that would incorporate the delay
/**
function shit() {
    fetch('../src/verhaaltje.json').then(function (response) {
        return response.json();
    }).then(function (data) {
        var runner = {
            data: data,
            counter: -1,
            next: function (counter) {
                this.counter++;
                if (this.counter < data.intro.length) {
                    setTimeout(function() {
                        wn.send(data.intro[counter].title,data.intro[counter].text);
                        this.next()
                    }, this.data.intro[this.counter].timestamp);
                }
            }
        };
        runner.next();
    });
};

 */