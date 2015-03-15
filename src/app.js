import angular from 'angular';
import 'angular-new-router';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import '../tmp/templates';
import './components/navigation';
import './components/welcome';

class AppController {

    /*@ngInject*/
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

angular
    .module('app', [
        'ngNewRouter', 'ngAnimate', 'ngAria', 'ngMaterial',
        'templates',
        'navigation',
        'welcome'
    ])
    .config(configureComponentLoader)
    .controller('AppController', AppController)
;

configureComponentLoader.$inject = ['$componentLoaderProvider'];
function configureComponentLoader($componentLoaderProvider) {
    $componentLoaderProvider.setTemplateMapping(function (name) {
        // name == component name
        return `src/components/${name}/${name}.html`;
    });
}
