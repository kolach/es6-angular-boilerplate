## ES6 Babel Browserify Boilerplate

This is an boilerplate repo to make it easy to experiment with [ES6]. It's inspired by [es6-browserify-boilerplate](https://github.com/thoughtram/es6-browserify-boilerplate) but uses babel (formerly 6to5) for transpilation which does not depend on any runtime.


### Initial setup

```bash
# Clone the repo...
git clone https://github.com/kolach/es6-angular-boilerplate.git
cd es6-angular-boilerplate

# Then, you need to install all the dependencies...
npm install

# If you wanna be able to use global commands `karma` and `gulp`...
npm install -g gulp
```

### Running in the browser
```bash
gulp build
gulp serve

# If you wanna Gulp to re-build on every change...
gulp watch
```

### Running unit tests
```bash
gulp test:unit
gulp test:unit:watch
```

### WTF is ES6?
Simply, the next version of JavaScript that contains some really cool features. You might check out some of these:

- https://wiki.mozilla.org/ES6_plans
- http://globaldev.co.uk/2013/09/es6-part-1/
- http://code.tutsplus.com/tutorials/eight-cool-features-coming-in-es6--net-33175


### What are all the pieces involved?

#### [Babel]
Transpiles ES6 code into regular ES5 (today's JavaScript) so that it can be run in a today browser. Like traceur but doesn't need a runtime to work. Formerly known as 6to5.

#### [CommonJS]
Babel is configured to transpile ES6 modules into CommonJS syntax and we use browserify to bundle the code into one file to deliver it to the browser.

#### [Browserify]
Browserify walks through all files and traces down all `require()`s to bundle all files together.  

#### [AngularJS] 
AngularJS is a toolset for building the framework most suited to your application development.

#### [AngularJS New Router]
A work-in-progress new component oriented router for Angular 1.3 and 2.0.

#### [Angular Material]
The Angular Material project is an implementation of Material Design in Angular.js. This project provides a set of reusable, well-tested, and accessible UI components based on the Material Design system.

#### [Gulp]
Task runner to make defining and running the tasks simpler.

#### [Karma]
Productive testing environment to developers

#### [Mocha]
Mocha is a feature-rich JavaScript test framework running on node.js and the browser, making asynchronous testing simple and fun.

#### [Chai]
Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

#### [Sinon]
Standalone test spies, stubs and mocks for JavaScript. No dependencies, works with any unit testing framework.

[ES6]: http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts
[Babel]: http://babeljs.io/
[CommonJS]: http://wiki.commonjs.org/wiki/CommonJS
[Browserify]: http://browserify.org/
[AngularJS]: https://angularjs.org/
[AngularJS New Router]: https://github.com/angular/router
[Angular Material]: https://material.angularjs.org
[Gulp]: http://gulpjs.com/
[Karma]: http://karma-runner.github.io/
[Mocha]: http://mochajs.org/
[Chai]: http://chaijs.com/
[Sinon]: http://sinonjs.org/

