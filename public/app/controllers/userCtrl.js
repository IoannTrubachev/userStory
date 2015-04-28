angular.module('userCtrl', ['userService'])

.controller('UserController', function(User) {

	var vm = this;

	Users.all()
		.success(function(data) {
			vm.users = data;
		})



})

.controller('UserCreateController', function(User, $location, $window) {

	var vm = this;

	vm.signupUser = function() {
		vm.message = '';

		User.create(vm.userData)
			.then(function(response) {

				vm.userdata = {};
				vm.message = response.data.message;

				$window.localStorage.setItem('token', response.data.token);
				$location.path('/');
			});
	}
})