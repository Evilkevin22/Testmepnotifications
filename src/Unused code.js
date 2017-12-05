
/**Timeout function that calls a new function that calls the notification with it's properties.
 Somehow it won't accept a normal timeout
 function Wait() {
    setTimeout(function () {
        wn.send('test','sketjhefdsa')
    }, 1000);
};
 */


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



