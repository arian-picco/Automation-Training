export const config = {
	// Protractor communicates directly with the Drivers of Chrome and Firefox
	directConnect: true,
	// Capabilities to be passed to the webdriver instance.
	capabilities: {
		'browserName': 'chrome'
	},
	framework: 'jasmine',
	// Spec patterns are relative to the current working directory when protractor is called.
	specs: ['Specs/simple.spec.js'],
	// Options to be passed to Jasmine.
	jasmineNodeOpts: {
		defaultTimeoutInterval: 30000
	},
	onPrepare: () =>{
		browser.driver.manage().window().maximize();
		browser.ignoreSynchronization = true;
	}
}