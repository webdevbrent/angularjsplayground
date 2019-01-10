# AngularJS Sorting Data
---
This example assumes that you have created two files. index.html and script.js

`script.js`
```javascript
var myApp = angular
            .module('myModule', [])
            .controller('myController', function($scope) {
                var employees = [
                    { name: 'Ned', dateOfBirth: new Date('November 28, 1983'), gender: 'Male', salary: 55000.788 },
                    { name: 'Sara', dateOfBirth: new Date('May 05, 1970'), gender: 'Female', salary: 68000 },
                    { name: 'Mark', dateOfBirth: new Date('August 15, 1974'), gender: 'Male', salary: 57000 },
                    { name: 'Pam', dateOfBirth: new Date('October 27, 1979'), gender: 'Female', salary: 53000 },
                    { name: 'Todd', dateOfBirth: new Date('December 30, 1983'), gender: 'Male', salary: 60000 }
	            ];
                $scope.employees = employees;
                $scope.sortColumn = '';
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
                Order By : 
                <select ng-model="sortColumn">
                    <option value="" selected >Please Select...</option>
                    <option value="name">Name ASC</option>
                    <option value="dateOfBirth">DOB ASC</option>
                    <option value="gender">Gender ASC</option>
                    <option value="-salary">Salary DESC</option>
                </select>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Gender</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="employee in employees | orderBy:sortColumn">
                        <td>{{ employee.name }}</td>
                        <td>{{ employee.dateOfBirth | date:"MMM dd, yyyy" }}</td>
                        <td>{{ employee.gender }}</td>
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
