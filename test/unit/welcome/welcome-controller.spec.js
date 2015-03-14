
import {welcomeService} from '../../../src/components/welcome/welcome-service';
import {WelcomeController} 	from '../../../src/components/welcome/welcome-controller';

describe('WelcomeController', () => {

	let ctrl;

	beforeEach( () => {
		sinon.spy(welcomeService, 'createUser');
		ctrl = new WelcomeController();
	});

	it('Should call welcomeService.createUser() in constructor', () => {
		expect(welcomeService.createUser).to.have.been.called;
	});

});