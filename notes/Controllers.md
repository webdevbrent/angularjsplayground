# AngularJS Controllers
---
This example assumes that you have created two files. index.html and script.js

`script.js`
```javascript
var myApp = angular
            .module('myModule', [])
            .controller('myController', function($scope) {}
```
---
`index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>AngularJS</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.js"></script>
</head>
<body>
    <div ng-app="myModule">
        <div ng-controller="myController">
        </div>
    </div>
</body>
</html>
```
---

##### Breakdown of module method
The module method takes two parameters.
1. The name of the controller (in this case it is `myController`).
2. An function that accepts the $scope object as a parameter.