import angular from 'angular';
import 'angular-new-router';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import '../tmp/templates';

import {NavigationController} from './components/navigation/navigation-controller';
import {WelcomeController} from './components/welcome/welcome-controller';

class AppController {
    constructor($router) {
        $router.config([
            {
                path        : '/',
                component   : {
                    navigation: 'navigation',
                    main: 'welcome'
                }
            }
        ]);
    }
}

AppController.$inject =['$router'];

angular
    .module('app', ['ngNewRouter', 'ngAnimate', 'ngAria', 'ngMaterial', 'templates'])
    .config(configureComponentLoader)
    .controller('AppController', AppController)
    .controller('NavigationController', NavigationController)
    .controller('WelcomeController', WelcomeController)
;

configureComponentLoader.$inject = ['$componentLoaderProvider'];
function configureComponentLoader($componentLoaderProvider) {
    $componentLoaderProvider.setTemplateMapping(function (name) {
        // name == component name
        return `src/components/${name}/${name}.html`;
    });
}
