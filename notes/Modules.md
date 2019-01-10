# AngularJS Modules
---
This example assumes that you have created two files. index.html and script.js

`script.js`
```javascript
var myApp = angular.module('myModule', [])
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
    </div>
</body>
</html>
```
---

##### Breakdown of module method
The module method takes two parameters.
1. The name of the module (in this case it is `myModule`).
2. Any optional arguments passed via an array.



