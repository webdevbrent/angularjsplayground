# AngularJS ng-repeat
---
This example assumes that you have created two files. index.html and script.js

`script.js`
```javascript
var myApp = angular
            .module('myModule', [])
            .controller('myController', function($scope) {
    var employees = [
		{
			firstName: 'Brent',
			lastName: 'Phillips',
			gender: 'Male',
			salary: 100
		},
		{
			firstName: 'Bob',
			lastName: 'Hope',
			gender: 'Male',
			salary: 900
		},
		{
			firstName: 'Peggy',
			lastName: 'Sue',
			gender: 'Female',
			salary: 150
		},
		{
			firstName: 'Something',
			lastName: 'Sanders',
			gender: 'Male',
			salary: 100
		},
		{
			firstName: 'Pam',
			lastName: 'Macintosh',
			gender: 'Female',
			salary: 600
		}
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
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="employee in employees">
                        <td>{{employee.firstName}}</td>
                        <td>{{employee.lastName}}</td>
                        <td>{{employee.gender}}</td>
                        <td>{{employee.salary}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>
```
---

##### Breakdown of script.js
An `employee` array was created with objects nested inside.
Each object contains a `firstName`, `lastName`, `gender`, and `salary` key value pair.
After the object is created, `$scope.employees = employees`
is declared and set so that it may be used in `index.html`

##### Breakdown of index.html
A table with 4 headers 1 row and 4 table cells has been created. Within the table row the `ng-repeat` directive has been declared. It reads like this... `ng-repeat="for each *employee* in employees` but is expressed like `ng-repeat="employee in employees"`
Each table cell is using a binding expression to display the value. `{{ employee.lastName }}` will render the last name of the employee object referenced in the `script.js` file.

## ng-repeat loops within loops example
`script.js`
```javascript
var myApp = angular
            .module('myModule', [])
            .controller('myController', function($scope) {
    var countries = [
		{
			name: 'UK',
			cities: [ 
					{ name: 'London' }, 
					{ name: 'Manchester' }, 
					{ name: 'Birmingham' } 
				]
		},
		{
			name: 'USA',
			cities: [ 
					{ name: 'Los Angeles' }, 
					{ name: 'Chicago' }, 
					{ name: 'Huston' } 
				]
		},
		{
			name: 'India',
			cities: [ 
					{ name: 'Hyderabad' }, 
					{ name: 'Chennai' }, 
					{ name: 'Mumbai' } 
				]
		}
	];
	$scope.countries = countries;
    }
```

`index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>AngularJS</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.js"></script>
    <script src="script.js"></script>
</head>
<body>
    <div class="container" ng-app="myModule">
        <div ng-controller="myController">
            <ul class="list-group">
                <li class="list-group-item" ng-repeat="country in countries">
                    <h2>{{country.name}}
                        <span class="alert alert-warning">
                            index = {{$index}}
                        </span>
                    </h2>
                    <ul>
                        <li class="list-group-item" ng-repeat="city in country.cities">
                            {{city.name}}
                            <span class="alert alert-success">
                                    Parent Index = {{$parent.$index}}
                                </span>
                            <span class="alert alert-info">
                                index = {{$index}}
                            </span>
                            
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</body>
</html>
```