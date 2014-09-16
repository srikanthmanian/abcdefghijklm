Application.run(function ($rootScope) {
    "use strict";
    /* perform any action with the variables inside this block(on-page-load) */
    $rootScope.onAppVariablesReady = function () {
        /*
         * variables can be accessed through '$rootScope.Variables' property here
         * e.g. $rootScope.Variables.staticVariable1.getData()
         */
    };
    
    /*this is a comment in the app.js file*/
    $rootScope.page = "App";
});
