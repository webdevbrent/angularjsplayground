# AngularJS Filters
---
This example assumes that you have created two files. index.html and script.js

`script.js`
```javascript
var myApp = angular
            .module('myModule', [])
            .controller('myController', function($scope) {
            var filteredEmployees = [
                { name: 'Ned', dateOfBirth: new Date('November 28, 1983'), gender: 'Male', salary: 55000.788 },
                { name: 'Sara', dateOfBirth: new Date('May 05, 1970'), gender: 'Female', salary: 68000 },
                { name: 'Mark', dateOfBirth: new Date('August 15, 1974'), gender: 'Male', salary: 57000 },
                { name: 'Pam', dateOfBirth: new Date('October 27, 1979'), gender: 'Female', salary: 53000 },
                { name: 'Todd', dateOfBirth: new Date('December 30, 1983'), gender: 'Male', salary: 60000 }
	        ];
            $scope.filteredEmployees = filteredEmployees;
            $scope.rowLimit = 3;
}
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
            <table class="table table-striped table-hover table-dark">
                    Rows to display <input type="number" step="1" min="0" max="5" ng-model="rowLimit">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date of Birth</th>
                            <th>Gender</th>
                            <th>Salary (number filter)</th>
                            <th>Salary (currency filter)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="emp in filteredEmployees | limitTo:rowLimit">
                            <td>{{emp.name | uppercase}}</td>
                            <td>{{emp.dateOfBirth | date:"MMM dd, yyyy"}}</td>
                            <td>{{emp.gender | lowercase}}</td>
                            <td>{{emp.salary | number:2}}</td>
                            <td>{{emp.salary | currency:"$":1}}</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    </div>
</body>
</html>
```
```html
<!--
    filters can do 3 things: Format, Sort, and Filter data 
    filter syntax using a pipe(|) character
    {{ expression | filterName:parameter }} 
-->

<!-- 
    limitTofilter
    {{ expression | limitTo : limit : begin }}
 -->

<!-- 
    Date Formats
     Format           Result
     ------    --------------------------
      yyyy     4 digit year, Example 1998
      yy       2 digit year, Example 98
      MMMM     January-December
      MMM      Jan-Dec
      MM       01-12
      M        1-12 (no leading zeros)
      dd       01-31
      d        1-31 (no leading zeros)
 -->
```