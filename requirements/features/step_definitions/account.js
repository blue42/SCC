module.exports = function () {
    this.Given( /^I am on the log in page$/, { timeout: 10 * 1000 }, function( done ) {
        browser
            .url( 'https://dev04-web-oreck.demandware.net/on/demandware.store/Sites-Hoover-Site/en_US/Login-Show' )
            .call( done );
    });

    this.When( /^I fill out email and password fields with valid credentials$/, function( done ) {
        browser
            .setValue( '#dwfrm_login > fieldset:nth-child(1) > div.form-row.username.required.js-form-row-container > div.field-wrapper > input','billy.carson@blueacorn.com' ) 
            .setValue( '#dwfrm_login > fieldset:nth-child(1) > div.form-row.password.required.js-form-row-container > div.field-wrapper > input','pass4billy' )
            .call( done );
    });

    this.When( /^I click the log in button$/, function( done ) {
        browser
            .click( '#dwfrm_login > fieldset:nth-child(2) > div.form-row.form-row-button.full-width > button' )
            .call( done );
    });

    this.Then( /^I should be taken to my account dashboard$/, { timeout: 10 * 1000 }, function( done ) {
        browser
            .waitForVisible( '#primary > h2', 10000 )
            .call( done );
    });

    this.Given( /^I am on my account dashboard$/, { timeout: 10 * 1000 }, function( done ) {
        browser
            .url( 'https://dev04-web-oreck.demandware.net/on/demandware.store/Sites-Hoover-Site/en_US/Account-Show' )
            .call( done );
    });

    this.When( /^I cick on the log out link$/, function( done ) {
        browser
            .click( '#primary > h2 > span > a' )
            .call( done );
    });

    this.Then( /^I should be redirected to the login page$/, { timeout: 10 * 1000 }, function( done ) {
        browser
            .waitForVisible( '#primary > div > div.login-box.login-account', 10000 )
            .call( done );
    });
};