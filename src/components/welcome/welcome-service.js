import {User} from '../user/user-model';

class WelcomeService {

    createUser() {
        return new User('Nick', 'Chistyakov');
    };

}

export const welcomeService = new WelcomeService();