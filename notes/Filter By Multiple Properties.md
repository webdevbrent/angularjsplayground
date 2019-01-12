# AngularJS Filter By Multiple Properties
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
    
    $scope.search = function(item) {
		if ($scope.searchText == undefined) {
			return true;
		} else {
			if (
				item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
				item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1
			) {
				return true;
			}
		}
		return false;
	};
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
            <div class="row">
                <div class="col">
                    <input type="text" placeholder="Search employees" ng-model="searchText.name" class="form-control">
                </div>
                <div class="col">
                    <input type="text" placeholder="Search city" ng-model="searchText.city" class="form-control">
                </div>
                <div class="col">
                    <input type="checkbox" ng-model="exactMatch"> Exact Match
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <input type="text" placeholder="Search city & name" ng-model="searchText" class="form-control">
                </div>
            </div>
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
                    <tr ng-repeat="employee in employees | filter:search">
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