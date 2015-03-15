class WelcomeController {

    /*@ngInject*/
    constructor(welcomeService) {
        this.user = welcomeService.createUser();
    }

    changeName(name) {
        this.user.firstName = name;
    };
}

export default WelcomeController;