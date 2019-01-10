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
                $scope.reverseSort = false;

                $scope.sortData = function(column) {
                    // If $scope.sortColumn is equal to the column passed to the function
                    // toggle the value for reverseSort
                    $scope.reverseSort = $scope.sortColumn == column ? !$scope.reverseSort : false;
                    // Set the sortColumn to the value of the column passed to the function
                    $scope.sortColumn = column;
                };
                $scope.getSortClass = function(column) {
                    if ($scope.sortColumn == column) {
                        // If the $scope.reverseSort is true add the class with the down arrow
                        // Else add the class with the up arrow
                        return $scope.reverseSort ? 'fas fa-sort-down' : 'fas fa-sort-up';
                    }
                    // If column is not being sorted return an empty string for the class value
                    return 'fas fa-arrows-alt-v';
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
            <table class="table">
                <thead style="cursor:pointer;">
                    <tr>
                        <th ng-click="sortData('name')">
                            Name <div ng-class="getSortClass('name')"></div>
                        </th>
                        <th ng-click="sortData('dateOfBirth')">
                            Date of Birth <div ng-class="getSortClass('dateOfBirth')"></div>
                        </th>
                        <th ng-click="sortData('gender')">
                            Gender <div ng-class="getSortClass('gender')"></div>
                        </th>
                        <th ng-click="sortData('salary')">
                            Salary <div ng-class="getSortClass('salary')"></div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="employee in employees | orderBy:sortColumn:reverseSort">
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
