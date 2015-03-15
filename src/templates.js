(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/components/navigation/navigation.html",
    "<md-toolbar layout=\"row\">\n" +
    "    <button ng-click=\"toggleSidenav('left')\" hide-gt-sm class=\"menuBtn\">\n" +
    "        <span class=\"visually-hidden\">Menu</span>\n" +
    "    </button>\n" +
    "    <h1>Hello World</h1>\n" +
    "</md-toolbar>");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/components/welcome/welcome.html",
    "<h1>Welcome, {{welcome.user.fullName}}!</h1>\n" +
    "\n" +
    "<md-content class=\"md-padding\">\n" +
    "\n" +
    "    <form name=\"welcomeForm\" ng-submit=\"welcome.changeName(name)\">\n" +
    "        <md-input-container>\n" +
    "            <label for=\"username\">Username</label>\n" +
    "            <input id=\"username\" ng-model=\"name\">\n" +
    "        </md-input-container>\n" +
    "\n" +
    "        <md-button id=\"submit\" class=\"md-raised md-primary\">\n" +
    "            Change Name\n" +
    "        </md-button>\n" +
    "\n" +
    "    </form>\n" +
    "</md-content>");
}]);
})();
