module.exports = function() {
	this.When( /^clicking the Checkout CTA$/, function( done ) {
			browser.click( '#wrapper > div.mini-cart-content.open > div.mini-cart-totals > a.button.btn-large.btn-secondary.mini-cart-link-checkout' );
			browser.call( done );
	});

	this.Then( /^I should be taken to the Checkout landing page$/, { timeout: 10 * 1000 }, function( done ) {
			browser.waitForVisible( '#main > header > h2', 1000 );
			browser.call( done );
	});

	this.Given( /^I am on the Checkout landing page$/, function( done ) {
			browser.url( 'https://dev04-web-oreck.demandware.net/on/demandware.store/Sites-Hoover-Site/en_US/COCustomer-Start' );
			browser.call( done );
	});

	this.Then( /^I click then Guest Checkout CTA$/, function( done ) {
			browser.click( '#primary > div > div > div:nth-child(1) > div > form > fieldset > div > button' );
			browser.call( done );
	});

	this.When( /^I fill out the login fields$/, function( done ) {
			browser.setValue( '#dwfrm_login_username_d0rmtrhxnnxa', 'billy.carson@blueacorn.com' );
			browser.setValue( '#dwfrm_login_password_d0xxqbfokfkh', 'pass4billy' );
			browser.call( done );
	});

	this.Then( /^click the Login CTA$/, function( done ) {
			browser.click( '#dwfrm_login > fieldset:nth-child(2) > div.form-row.form-row-button.full-width > button' );
			browser.call( done );
	});

	this.Then( /^I should be taken to Step 1 of checkout$/, { timeout: 10 * 1000 }, function( done ) {
			browser.waitForVisible( '#primary > div > div.step-1.active', 10000 );
			browser.call( done );
	});

	this.Given( /^I am on Step 1 of checkout$/, function( done ) {
			browser.isVisible( '#primary > div > div.step-1.active' );
			browser.call( done );
	});

	this.Then( /^I should be able to fill out the shipping form$/, function( done ) {
			browser.setValue( '#dwfrm_singleshipping_shippingAddress_addressFields_firstName', 'Billy' );
			browser.setValue( '#dwfrm_singleshipping_shippingAddress_addressFields_lastName', 'Carson' );
			browser.setValue( '#dwfrm_singleshipping_shippingAddress_addressFields_address1', '145 Williman St' );
			browser.setValue( '#dwfrm_singleshipping_shippingAddress_addressFields_city', 'Charleston' );
			browser.setValue( '#dwfrm_singleshipping_shippingAddress_addressFields_postal', '29403' );
			browser.selectByValue( '#dwfrm_singleshipping_shippingAddress > fieldset:nth-child(2) > div > div:nth-child(7) > div.field-wrapper > div > div.ba-select.ba-select-box.ba-over.open > div > ul', 'SC' );
			browser.setValue( '#dwfrm_singleshipping_shippingAddress_addressFields_phone', '843-452-5675' );
			browser.call( done );
	});

	this.Then( /^select a shipping method$/, function( done ) {
			browser.click( '#shipping-method-list > fieldset > div:nth-child(2) > label' );
			browser.call( done );
	});

	this.When( /^I click the Continue To Billing CTA$/, function( done ) {
			browser.click( '#dwfrm_singleshipping_shippingAddress > fieldset.checkout-next-step > div > button' );
			browser.call( done );
	});

	this.Then( /^the address validation should appear$/, { timeout: 5 * 1000 }, function( done ) {
			browser.waitForVisible( '#addressValidation', 5000 );
			browser.call( done );
	});

	this.Then( /^if I click the suggested address$/, function( done ) {
			browser.click( '#addressValidation > div > div > div.altAddresses > ul > li > a' );
			browser.call( done );
	});

	this.Then( /^I should be taken to Step 2 of checkout$/, { timeout: 10 * 1000 }, function( done ) {
			browser.waitForVisible( '#primary > div > div.step-2.active' );
			browser.call( done );
	});

	this.Given( /^I am on Step 2 of checkout$/, function( done ) {
			browser.isVisible( '#primary > div > div.step-2.active' );
			browser.call( done );
	});

	this.Then( /^I should be able to fill out the billing form$/, function( done ) {
			browser.setValue( '#dwfrm_billing_billingAddress_email_emailAddress', 'billy.carson@blueacorn.com' );
			//The 'Use Shipping Address as Billing' is checked by default on step 1
			//So, all other fields should be filled already since we have already completed step 1
			browser.call( done );
	});

	this.Then( /^enter payment information$/, function( done ) {
			browser.setValue( '#dwfrm_billing_paymentMethods_creditCard_owner', 'Test' );
			browser.selectByValue( '#dwfrm_billing > fieldset:nth-child(5) > div.payment-method.payment-method-expanded > div:nth-child(2) > div.field-wrapper > div > div > div > ul','Visa' );
			browser.setValue( '#dwfrm_billing > fieldset:nth-child(5) > div.payment-method.payment-method-expanded > div:nth-child(3) > div.field-wrapper > input', '4111111111111111' );
			browser.selectByValue( '#dwfrm_billing > fieldset:nth-child(5) > div.payment-method.payment-method-expanded > div.form-expiration > div > div.form-row.month.required.js-form-row-container > div.field-wrapper > div > div.ba-select.ba-select-box.ba-over.open > div > ul', '1' );
			browser.selectByValue( '#dwfrm_billing > fieldset:nth-child(5) > div.payment-method.payment-method-expanded > div.form-expiration > div > div.form-row.year.required.js-form-row-container > div.field-wrapper > div > div > div > ul', '2019' );
			browser.setValue( '#dwfrm_billing > fieldset:nth-child(5) > div.payment-method.payment-method-expanded > div.form-row.cvn.required.js-form-row-container > div.field-wrapper > input', '123' );
			browser.call( done );
	});

	this.When( /^I click the Conitnue To Place Order CTA$/, function( done ) {
			browser.click( '#dwfrm_billing > fieldset.checkout-next-step > div > button' );
			browser.call( done );
	});

	this.Then( /^I should be taken to Step 3 of checkout$/, { timeout: 5 * 1000 }, function( done ) {
			browser.waitForVisible( '#primary > div.breadcrumb.checkout-progress-indicator > div.step-3.active' );
			browser.call( done );
	});

	this.Given( /^I am on Step 3 of checkout$/, function( done ) {
			browser.isVisible( '#primary > div.breadcrumb.checkout-progress-indicator > div.step-3.active' );
			browser.call( done );
	});

	this.Then( /^I press the Place Order CTA$/, function( done ) {
			browser.click( '#ext-gen878 > form > fieldset > div > button' );
			browser.call( done );
	});

	this.Then( /^I should go to the order success page$/, { timeout: 5 * 1000 }, function( done ) {
			browser.waitForVisible( '#main > div > div.confirmation-message' );
			browser.call( done );
	});
};