AngularJS Sample App Tutorials
====================

<div dir="ltr" style="text-align: left;" trbidi="on">
<b><br /></b>
<br />
<div style="text-align: center;">
<b>AngularJS Tutorial For Beginners&nbsp;</b></div>
<div style="text-align: center;">
<b><br /></b></div>
<div style="text-align: center;">
<b><br /></b></div>
<b>AngularJS &nbsp;</b>is an open-source web application framework, maintained by Google and community, that assists with creating single-page applications, one-page web applications that only require HTML, CSS, and JavaScript on the client side. Its goal is to augment web applications with model view controller (MVC) capability &nbsp;on the SPA (Single Page Application), in an effort to make both development and testing easier.<br />
<br />
A &nbsp;Single Page Application is one in which we have a shell page and we can load multiple<br />
views into that.So a traditional app, as you know you typically blink and load everything again. It’s not very efficient on the bandwidth, especially in the mobile world.<br />
So a traditional app, as you know you typically blink and load everything again. It’s not very efficient<br />
on the bandwidth, especially in the mobile world.<br />
<br />
AngularJS' two-way data binding is its most notable feature and reduces the amount of code written by relieving the server backend from templating responsibilities. Instead, templates are rendered in plain HTML according to data contained in a scope defined in the model.<br />
<br />
<span class="Apple-tab-span" style="white-space: pre;">  </span>AngularJS Introduction<br />
<span class="Apple-tab-span" style="white-space: pre;">  </span>AngularJS Expressions<br />
<span class="Apple-tab-span" style="white-space: pre;">  </span>AngularJS Directives<br />
<span class="Apple-tab-span" style="white-space: pre;">  </span>AngularJS Modules<br />
<span class="Apple-tab-span" style="white-space: pre;">  </span>AngularJS Controllers<br />
<span class="Apple-tab-span" style="white-space: pre;">  </span>AngularJS Filters<br />
<span class="Apple-tab-span" style="white-space: pre;">  </span>AngularJS HttpRequest<br />
<span class="Apple-tab-span" style="white-space: pre;">  </span>AngularJS Forms/Models<br />
<span class="Apple-tab-span" style="white-space: pre;">  </span>AngularJS loops, show, hide, clicks, data binding, custyomised filter<br />
<br />
<div>
<br /></div>
<br />
<br />
<div class="western">
<b>Angular JS code begins by including this file</b></div>
<br />
<div class="western">
&lt;script
src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"&gt;&lt;/script&gt;</div>
<br />
<br />
<b>AngularJS Expressions</b><br />
Angular expressions are JavaScript-like code snippets that are usually placed in bindings such as <b><i>{{ expression }}</i></b>. AngularJS expressions binds data to HTML the same way as the ng-bind directive.<br />
Angular Expressions vs. JavaScript Expressions<br />
Angular expressions are like JavaScript expressions with the following differences:<br />
<br />
<ul style="text-align: left;">
<li>Context: JavaScript expressions are evaluated against the global window. In Angular, expressions are evaluated against a scope object.</li>
<li>Forgiving: In JavaScript, trying to evaluate undefined properties generates ReferenceError or TypeError. In Angular, expression evaluation is forgiving to undefined and null.</li>
<li>No Control Flow Statements: you cannot use the following in an Angular expression: conditionals, loops, or exceptions.</li>
<li>Filters: You can use filters within expressions to format data before displaying it.</li>
</ul>
<br />
<br />
<b>AngularJS Directives</b><br />
At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler to attach a specified behavior to that DOM element or even transform the DOM element and its children.<br />
Angular comes with a set of these directives built-in, like&nbsp;&nbsp;ng-app, ngBind, ngModel, and ngView. Much like you create controllers and services, you can create your own directives for Angular to use. When Angular bootstraps your application, the HTML compiler traverses the DOM matching directives against the DOM elements.<br />
<br />
<pre>&lt;body ng-app="sampleApp" ng-controller="MainController"&gt;</pre>
<br />
<br />
<b>AngularJS Modules</b><br />
You can think of a module as a container for the different parts of your app – controllers, services, filters, directives, etc. Modules make your application more readable, and keep the global namespace clean. Most applications have a main method that instantiates and wires together the different parts of the application. Angular apps don't have a main method. Instead modules declaratively specify how an application should be bootstrapped. There are several advantages to this approach:<br />
The declarative process is easier to understand.<br />
You can package code as reusable modules.<br />
The modules can be loaded in any order (or even in parallel) because modules delay execution.<br />
Unit tests only have to load relevant modules, which keeps them fast.<br />
End-to-end tests can use modules to override configuration.<br />
<br />
<pre>var myAppModule = angular.module('sampleApp', []);</pre>
<br />
<br />
<br />
<b>AngularJS Controllers</b><br />
<div style="text-align: justify;">
AngularJS controllers control the data of AngularJS applications. AngularJS controllers are regular JavaScript Objects. a Controller is a JavaScript constructor function that is used to augment the Angular Scope. When a Controller is attached to the DOM via the ng-controller directive, Angular will instantiate a new Controller object, using the specified Controller's constructor function. A new child scope will be available as an injectable parameter to the Controller's constructor function as $scope.</div>
<div style="text-align: justify;">
Use controllers to:</div>
<div style="text-align: justify;">
Set up the initial state of the $scope object.</div>
<div style="text-align: justify;">
Add behavior to the $scope object.</div>
<div style="text-align: justify;">
<br /></div>
<div style="text-align: justify;">
<pre>myAppModule.controller('MainController', ['$scope', '$http', function($scope, $http) {</pre>
</div>
<div style="text-align: justify;">
<br /></div>
<div style="text-align: justify;">
}]); </div>
<br />
<br />
<b>AngularJS Filters</b><br />
A filter formats the value of an expression for display to the user. They can be used in view templates, controllers or services and it is easy to define your own filter.<br />
The underlying API is the filterProvider. Filters can be added to expressions and directives using a pipe character.<br />
We can develop our own filter called customized Filters.<br />
<br />
<br />
<pre> Angular JS Filter - &nbsp;Date: {{ '2014-08-01' | date:'fullDate' }}</pre>
<br />
<br />
// // Customised Filter used in the View.<br />
<pre>myAppModule.filter('greet', function() {

&nbsp;return function(name) {

<span class="Apple-tab-span" style="white-space: pre;"> </span>// Put your logic Here<span class="Apple-tab-span" style="white-space: pre;"> </span>

&nbsp; &nbsp; return 'Hello, ' + name + '!';

&nbsp; };

});</pre>
<br />
<br />
<b><br /></b>
<b>AngularJS Forms/Models</b><br />
Controls (input, select, textarea) are ways for a user to enter data. A Form is a collection of controls for the purpose of grouping related controls together.<br />
Form and controls provide validation services, so that the user can be notified of invalid input. This provides a better user experience, because the user gets instant feedback on how to correct the error. Keep in mind that while client-side validation plays an important role in providing good user experience, it can easily be circumvented and thus can not be trusted. Server-side validation is still necessary for a secure application.<br />
<br />
<div>
<pre>&lt;input type="text" ng-model="search" /&gt;</pre>
<br />
<br />
<br />
<br />
<br />
<div class="western">
<b>AngularJS HttpRequest&nbsp;</b><span style="text-align: justify;"><b>$http</b>&nbsp;</span></div>
<span style="text-align: justify;">Service can be used for AJAX Request.</span><br />
<span style="text-align: justify;"></span><br />
<pre><span style="text-align: justify;">myAppModule.controller('MainController', ['$scope', '$http', function($scope, $http) {</span></pre>
<br />
<div style="text-align: justify;">
<br /></div>
<div style="text-align: justify;">
}]);</div>
</div>
<br />
<br />
<br />
<b>AngularJS Routing</b><br />
The <b>$route</b> service is usually used in conjunction with the <b>ngView</b> directive. The role of the ngView directive is to include the view template for the current route into the layout template. This makes it a perfect fit for our index.html template.<br />
<b><br /></b>
In HTML page where routing is needed add this lines.<br />
<br />
&lt;li&gt;&lt;a href="#Routing1" &gt; Routing URL1 &lt;/a&gt; &nbsp;&lt;/li&gt;<br />
<br />
&lt;li&gt;&lt;a href="#Routing2"&gt; Routing URL2 &lt;/a&gt; &lt;/li&gt;<br />
<b><br /></b>
<b><br /></b>
In Controller.js<br />
// Routing Controller from Route URL 1<br />
myAppModule.controller('Route1Controller', function($scope) {<br />
&nbsp; &nbsp; $scope.routeMsg1 = 'You Clicked on Routing URL1 ';<br />
});<br />
<br />
<br />
// Routing Controller from Route URL 2<br />
myAppModule.controller('Route2Controller', function($scope) {<br />
&nbsp; &nbsp; $scope.routeMsg2 = 'You Clicked on Routing URL2 ';<br />
});<br />
<br />
<br />
<br />
// Routing for HREF<br />
myAppModule.config(['$routeProvider',<br />
&nbsp; function($routeProvider) {<br />
&nbsp; &nbsp; $routeProvider.<br />
&nbsp; &nbsp; &nbsp; when('/Routing1', {<br />
&nbsp; &nbsp; &nbsp; &nbsp; templateUrl: 'route1.html',<br />
&nbsp; &nbsp; &nbsp; &nbsp; controller: 'Route1Controller'<br />
&nbsp; &nbsp; }).<br />
&nbsp; &nbsp; &nbsp; when('/Routing2', {<br />
&nbsp; &nbsp; &nbsp; &nbsp; templateUrl: 'route2.html',<br />
&nbsp; &nbsp; &nbsp; &nbsp; controller: 'Route2Controller'<br />
&nbsp; &nbsp; &nbsp; }).<br />
&nbsp; &nbsp; &nbsp; otherwise({<br />
// &nbsp; &nbsp; &nbsp; &nbsp;redirectTo: '/routefree.html'<br />
&nbsp; &nbsp; &nbsp; });<br />
<br />
}]);<br />
We need to make two HTML files (route1.html, route2.html) to render files html on the view<br />
<b><br /></b>
<b><br /></b>
<b><br /></b>
(still more to come)<br />
<br />
<br />
<br />
<b>AngularJS Sample Application</b><br />
Download Sample Application with reference to the doc. This will relate the tutorial with the code.<br />
<a href="https://github.com/ajay-kr-shukla/angularjs-sample-app">https://github.com/ajay-kr-shukla/angularjs-sample-app</a><br />
<div>
<br />
<a href="https://www.linkedin.com/pub/ajay-shukla/12/861/95">Contact me @&nbsp;&nbsp;</a>&nbsp;mrajayshukla@gmail.com<br />
<br /></div>
</div>
