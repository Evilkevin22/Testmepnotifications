(function(window) {

    'use strict';

    /**
     * @function defineWn()
     * @description Wrapper function for defining the library
     * @return {function} The entire library
     */
    function defineWn() {
        var wn = {};

        /**
         * @function wn.getPermission
         * @description Handles permissions for the Notifications API
         * @returns {void}
         */
        wn.getPermission = function() {

            // Check if the browser supports web notifications
            if (!('Notification' in window)) {
                console.log('Web Notification: This browser does not support system notifications');

                // If there is support, check if the permission is already set.
            } else if (Notification.permission === 'granted') {
                // Print to log if acces is granted
                console.log('Web Notifications: Permission already granted');

                // Else, we ask the user for permission
            } else if (Notification.permission !== 'granted') {

                Notification.requestPermission(function(permission) {
                    // If the user accepts, log the succes message
                    if (permission === 'granted') {
                        console.log('Web Notifications: Permission granted');
                    }
                });
            }
        };

        /**
         * @function wn.send
         * @description Sends new notifications
         * @param {string} title Title of the message
         * @param {string} body Body of the message
         * @param {string} icon URL of the icon for the message
         * @param {function} clickEvent Onclick function for the notification
         */


        wn.send = function(title, body, icon, clickEvent) {
            let options = {
                body: body,
                icon: icon,
            };
            let notif = new Notification(title, options);
            notif.onclick = function () {
                clickEvent();

            }
        };

        //Test What is in WN for testing
        console.log(wn);

        //Return the library
        return wn;

    }

    window.wn = defineWn();

})(window);
