AngularJS Sample App Tutorials
====================


AngularJS Tutorial For Beginners 


AngularJS  is an open-source web application framework, maintained by Google and community, that assists with creating single-page applications, one-page web applications that only require HTML, CSS, and JavaScript on the client side. Its goal is to augment web applications with model view controller (MVC) capability  on the SPA (Single Page Application), in an effort to make both development and testing easier.

A  Single Page Application is one in which we have a shell page and we can load multiple
views into that.So a traditional app, as you know you typically blink and load everything again. It’s not very efficient on the bandwidth, especially in the mobile world.
So a traditional app, as you know you typically blink and load everything again. It’s not very efficient
on the bandwidth, especially in the mobile world.

AngularJS' two-way data binding is its most notable feature and reduces the amount of code written by relieving the server backend from templating responsibilities. Instead, templates are rendered in plain HTML according to data contained in a scope defined in the model.

  AngularJS Introduction
  AngularJS Expressions
  AngularJS Directives
  AngularJS Modules
  AngularJS Controllers
  AngularJS Filters
  AngularJS HttpRequest
  AngularJS Forms/Models
  AngularJS loops, show, hide, clicks, data binding, custyomised filter




Angular JS code begins by including this file

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>


AngularJS Expressions
Angular expressions are JavaScript-like code snippets that are usually placed in bindings such as {{ expression }}. AngularJS expressions binds data to HTML the same way as the ng-bind directive.
Angular Expressions vs. JavaScript Expressions
Angular expressions are like JavaScript expressions with the following differences:

Context: JavaScript expressions are evaluated against the global window. In Angular, expressions are evaluated against a scope object.
Forgiving: In JavaScript, trying to evaluate undefined properties generates ReferenceError or TypeError. In Angular, expression evaluation is forgiving to undefined and null.
No Control Flow Statements: you cannot use the following in an Angular expression: conditionals, loops, or exceptions.
Filters: You can use filters within expressions to format data before displaying it.


AngularJS Directives
At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler to attach a specified behavior to that DOM element or even transform the DOM element and its children.
Angular comes with a set of these directives built-in, like  ng-app, ngBind, ngModel, and ngView. Much like you create controllers and services, you can create your own directives for Angular to use. When Angular bootstraps your application, the HTML compiler traverses the DOM matching directives against the DOM elements.

<body ng-app="sampleApp" ng-controller="MainController">


AngularJS Modules
You can think of a module as a container for the different parts of your app – controllers, services, filters, directives, etc. Modules make your application more readable, and keep the global namespace clean. Most applications have a main method that instantiates and wires together the different parts of the application. Angular apps don't have a main method. Instead modules declaratively specify how an application should be bootstrapped. There are several advantages to this approach:
The declarative process is easier to understand.
You can package code as reusable modules.
The modules can be loaded in any order (or even in parallel) because modules delay execution.
Unit tests only have to load relevant modules, which keeps them fast.
End-to-end tests can use modules to override configuration.

var myAppModule = angular.module('sampleApp', []);



AngularJS Controllers
AngularJS controllers control the data of AngularJS applications. AngularJS controllers are regular JavaScript Objects. a Controller is a JavaScript constructor function that is used to augment the Angular Scope. When a Controller is attached to the DOM via the ng-controller directive, Angular will instantiate a new Controller object, using the specified Controller's constructor function. A new child scope will be available as an injectable parameter to the Controller's constructor function as $scope.
Use controllers to:
Set up the initial state of the $scope object.
Add behavior to the $scope object.

myAppModule.controller('MainController', ['$scope', '$http', function($scope, $http) {

}]);


AngularJS Filters
A filter formats the value of an expression for display to the user. They can be used in view templates, controllers or services and it is easy to define your own filter.
The underlying API is the filterProvider. Filters can be added to expressions and directives using a pipe character.
We can develop our own filter called customized Filters.


 Angular JS Filter -  Date: {{ '2014-08-01' | date:'fullDate' }}


// // Customised Filter used in the View.
myAppModule.filter('greet', function() {

 return function(name) {

 // Put your logic Here 

    return 'Hello, ' + name + '!';

  };

});



AngularJS Forms/Models
Controls (input, select, textarea) are ways for a user to enter data. A Form is a collection of controls for the purpose of grouping related controls together.
Form and controls provide validation services, so that the user can be notified of invalid input. This provides a better user experience, because the user gets instant feedback on how to correct the error. Keep in mind that while client-side validation plays an important role in providing good user experience, it can easily be circumvented and thus can not be trusted. Server-side validation is still necessary for a secure application.

<input type="text" ng-model="search" />





AngularJS HttpRequest $http 
Service can be used for AJAX Request.

myAppModule.controller('MainController', ['$scope', '$http', function($scope, $http) {


}]);



AngularJS Routing
The $route service is usually used in conjunction with the ngView directive. The role of the ngView directive is to include the view template for the current route into the layout template. This makes it a perfect fit for our index.html template.

In HTML page where routing is needed add this lines.

<li><a href="#Routing1" > Routing URL1 </a>  </li>

<li><a href="#Routing2"> Routing URL2 </a> </li>


In Controller.js
// Routing Controller from Route URL 1
myAppModule.controller('Route1Controller', function($scope) {
    $scope.routeMsg1 = 'You Clicked on Routing URL1 ';
});


// Routing Controller from Route URL 2
myAppModule.controller('Route2Controller', function($scope) {
    $scope.routeMsg2 = 'You Clicked on Routing URL2 ';
});



// Routing for HREF
myAppModule.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Routing1', {
        templateUrl: 'route1.html',
        controller: 'Route1Controller'
    }).
      when('/Routing2', {
        templateUrl: 'route2.html',
        controller: 'Route2Controller'
      }).
      otherwise({
//        redirectTo: '/routefree.html'
      });

}]);
We need to make two HTML files (route1.html, route2.html) to render files html on the view



(still more to come)



AngularJS Sample Application
Download Sample Application with reference to the doc. This will relate the tutorial with the code.
https://github.com/ajay-kr-shukla/angularjs-sample-app

Contact me @   mrajayshukla@gmail.com

