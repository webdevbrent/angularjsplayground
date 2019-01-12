# AngularJS Create a Custom Filter
---
This example assumes that you have created two files. index.html and script.js

`script.js`
```javascript
var myApp = angular
	.module('myModule', [])
	.filter('gender', function() {
		return function(gender) {
			switch (gender) {
				case 1:
					return 'Male';
				case 2:
					return 'Female';
				case 3:
					return 'Not Disclosed';
			}
		};
	})
	.controller('myController', function($scope) {
		var employees = [
			{ name: 'Ned', gender: 1, salary: 55000 },
			{ name: 'Sara', gender: 2, salary: 68000 },
			{ name: 'Mark', gender: 1, salary: 57000 },
			{ name: 'Pam', gender: 2, salary: 53000 },
			{ name: 'Todd', gender: 3, salary: 60000 }
		];
		$scope.employees = employees;
	});
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
            <table class="table">
                <thead>
                    <tr>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="employee in employees">
                        <td>{{ employee.name }}</td>
                        <td>{{ employee.gender | gender }}</td>
                        <td>{{ employee.salary }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>
```
---