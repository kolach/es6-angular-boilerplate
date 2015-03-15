import WelcomeService from '../../../src/components/welcome/welcome-service';
import WelcomeController 	from '../../../src/components/welcome/welcome-controller';

describe('WelcomeController', () => {

	let ctrl;
	let service;

	beforeEach( () => {
		service = new WelcomeService();
		sinon.spy(service, 'createUser');
		ctrl = new WelcomeController(service);
	});

	it('Should call welcomeService.createUser() in constructor', () => {
		expect(service.createUser).to.have.been.called;
	});

});