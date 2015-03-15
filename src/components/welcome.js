import angular from 'angular';

import {WelcomeService} from './welcome/welcome-service';
import {WelcomeController} from './welcome/welcome-controller.js';

angular
	.module('welcome', [])
	.service('welcomeService', WelcomeService)
	.controller('WelcomeController', WelcomeController)
;
