// Create the module
var myApp = angular.module('myModule', []).controller('myController', function($scope) {
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
	var countries = [
		{
			name: 'UK',
			cities: [ { name: 'London' }, { name: 'Manchester' }, { name: 'Birmingham' } ]
		},
		{
			name: 'USA',
			cities: [ { name: 'Los Angeles' }, { name: 'Chicago' }, { name: 'Huston' } ]
		},
		{
			name: 'India',
			cities: [ { name: 'Hyderabad' }, { name: 'Chennai' }, { name: 'Mumbai' } ]
		}
	];
	$scope.countries = countries;
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

	var filteredEmployees = [
		{ name: 'Ned', dateOfBirth: new Date('November 28, 1983'), gender: 'Male', salary: 55000.788 },
		{ name: 'Sara', dateOfBirth: new Date('May 05, 1970'), gender: 'Female', salary: 68000 },
		{ name: 'Mark', dateOfBirth: new Date('August 15, 1974'), gender: 'Male', salary: 57000 },
		{ name: 'Pam', dateOfBirth: new Date('October 27, 1979'), gender: 'Female', salary: 53000 },
		{ name: 'Todd', dateOfBirth: new Date('December 30, 1983'), gender: 'Male', salary: 60000 }
	];
	$scope.filteredEmployees = filteredEmployees;
	$scope.rowLimit = 3;
});
