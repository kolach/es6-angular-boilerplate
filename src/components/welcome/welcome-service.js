import {User} from '../user/user-model';

class WelcomeService {

    createUser() {
        return new User('John', 'Smith');
    };

}

export const welcomeService = new WelcomeService();