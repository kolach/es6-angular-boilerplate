describe('WelcomeController', () => {

	let ctrl;
	let service;

	beforeEach( () => {
		angular.mock.module('welcome');
	});

	beforeEach( inject((welcomeService, $controller) => {
		service = welcomeService;
		sinon.spy(service, 'createUser');
		ctrl = $controller('WelcomeController');
	}));

	it('Should call welcomeService.createUser() in constructor', () => {
		expect(service.createUser).to.have.been.called;
	});

});