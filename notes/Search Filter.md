# AngularJS Search Filter
---
This example assumes that you have created two files. index.html and script.js

`script.js`
```javascript
var myApp = angular
            .module('myModule', [])
            .controller('myController', function($scope) {
    var employees = [
		{ name: 'Ned', gender: 'Male', salary: 55000.788, city: 'London' },
		{ name: 'Sara', gender: 'Female', salary: 68000, city: 'Chennai' },
		{ name: 'Mark', gender: 'Male', salary: 57000, city: 'London' },
		{ name: 'Pam', gender: 'Female', salary: 53000, city: 'Chennai' },
		{ name: 'Todd', gender: 'Male', salary: 60000, city: 'London' }
	];
	$scope.employees = employees;
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
            <input type="text" placeholder="Search employees" ng-model="searchText.city" class="form-control">
            <table class="table">
                <thead>
                    <tr>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Salary</th>
                      <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="employee in employees | filter:searchText">
                        <td>{{ employee.name }}</td>
                        <td>{{ employee.gender }}</td>
                        <td>{{ employee.salary }}</td>
                        <td>{{ employee.city }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>
```
---