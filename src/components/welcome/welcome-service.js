import {User} from './user';

class WelcomeService {

    createUser() {
        return new User('John', 'Smith');
    };

}

export {WelcomeService};