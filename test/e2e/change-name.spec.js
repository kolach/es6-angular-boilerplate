
describe('App welcome page', function() {
	it('should change user name', function() {

		browser.get('http://127.0.0.1:3001');

		var greeting = element(by.css('h2'));

		expect(greeting.getText()).toEqual('Welcome, John Smith!');

		element(by.model('name')).sendKeys('Jane');
		element(by.id('submit')).click();

		expect(greeting.getText()).toEqual('Welcome, Jane Smith!');

	});
});