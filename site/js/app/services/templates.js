angular.module("app").run([ "$templateCache", function($templateCache) {
    "use strict";
    $templateCache.put("templates/directives/footer.html", "<ul class=footer-info><li>101 State Street</li><li>La Crosse, WI 54601</li><li>1-866-697-7300</li><li>sign up for emails</li></ul><ul class=footer-icons><li><a class=footer-icons-facebook href=#></a></li><li><a class=footer-icons-twitter href=#></a></li><li><a class=footer-icons-instagram href=#></a></li></ul>");
    $templateCache.put("templates/directives/header.html", '<a class=site-id ui-sref=home><img src=images/logo.png alt="Charmant Logo"></a><main-nav></main-nav>');
    $templateCache.put("templates/directives/main-nav.html", '<nav class=main-nav><ul class=main-nav-list><li ng-repeat="link in links | orderBy: link.SORTORDER"><a class=main-nav-link ng-class="{active: link.PATH === currentPath}" href={{link.PATH}}>{{link.LINKTITLE}}</a></li></ul><button class="main-nav-book-now small-corners" cornered-border>Book Now</button></nav>');
    $templateCache.put("templates/directives/master-wrapper.html", '<div class=master-wrapper><div class=page-background style="background-image: url({{backgroundImage}})"></div><div class=page-content cornered-border><header></header><div class=view-content ng-transclude></div><footer></footer></div></div>');
    $templateCache.put("templates/views/home.html", "<master-wrapper><h1>Home Page</h1></master-wrapper>");
    $templateCache.put("templates/views/rooms.html", "<master-wrapper><h1>Rooms Page</h1></master-wrapper>");
} ]);