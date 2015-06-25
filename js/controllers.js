
app.controller('mainCtrl', function ($scope, $location) {
	var main = $scope.main = this;
	
	main.activeTab = 'home';
});

app.controller('homeCtrl', function ($scope) {
	var home = $scope.home = this;
	
	home.btnStatus = true;
	home.left = true;
	home.middle = true;
	home.right = false;
});

app.controller('empCtrl', function($scope, employees, $modal){
	var emp = $scope.emp = this;
	
	emp.employees = employees.getEmployees();
	
	emp.open = function (empId) {
		
		$modal.open({
			animation: true,
			templateUrl: './views/templates/empModal.html',
			controller: 'empModalCtrl',
			size: 'lg',
			resolve: {
				empId: function () {
					return empId;
				}
			}
		});
	};
});

app.controller('contactCtrl', function($scope){
});

app.controller('empModalCtrl', function($scope, $routeParams, employees, empId, $modalInstance){
	var empModal = $scope.empModal = this;
	
	empModal.emp = angular.copy(employees.getEmployee(empId));
	
	empModal.save = function(){
		$scope.empForm.$valid == true;
		employees.setEmployee(empModal.emp.empId,empModal.emp);
		alert('saving');
		$modalInstance.close('');
	};
	
	empModal.ok = function(){
		$modalInstance.close('');
	};
	
	empModal.cancel = function(){
		$modalInstance.dismiss('cancel');
	};
});
