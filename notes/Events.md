# AngularJS Events
---
This example assumes that you have created two files. index.html and script.js

`script.js`
```javascript
var myApp = angular
            .module('myModule', [])
            .controller('myController', function($scope) {
            var technologies = [
		        { name: 'C#', likes: 0, dislikes: 0 },
		        { name: 'Java', likes: 0, dislikes: 0 },
		        { name: 'ASP.NET', likes: 0, dislikes: 0 },
		        { name: 'Ruby', likes: 0, dislikes: 0 },
		        { name: 'AngularJS', likes: 0, dislikes: 0 }
	        ];
	        $scope.technologies = technologies;
            $scope.incrementLikes = function(technology) {
                technology.likes++;
            };
            $scope.incrementDislikes = function(technology) {
                technology.dislikes++;
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
            <table class="table table-striped table-hover table-light">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Likes</th>
                            <th>Dislikes</th>
                            <th>Like/Dislike</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="technology in technologies">
                            <td>{{technology.name}}</td>
                            <td>{{technology.likes}}</td>
                            <td>{{technology.dislikes}}</td>
                            <td>
                                <input type="button" value="Like" ng-click="incrementLikes(technology)">
                                <input type="button" value="Dislike" ng-click="incrementDislikes(technology)">
                            </td>
                        </tr>
                    </tbody>
                </table>
        </div>
    </div>
</body>
</html>
```