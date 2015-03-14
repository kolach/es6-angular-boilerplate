import {welcomeService} from './welcome-service';

class WelcomeController {

    constructor() {
        this.user = welcomeService.createUser();
    }

    changeName(name) {
        this.user.firstName = name;
    };
}

export {WelcomeController}