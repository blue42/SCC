module.exports = function () {
    this.Given( /^I am on the create account page$/, { timeout: 10 * 1000 }, function( done ) {
        browser
            .url( 'https://dev04-web-oreck.demandware.net/on/demandware.store/Sites-Hoover-Site/en_US/Account-StartRegister' )
            .call( done );
    });

    this.When( /^I fill out the registration fields with valid credentials$/, function( done ) {
        browser
            .setValue( '#dwfrm_profile_customer_firstname','Test' ) 
            .setValue( '#dwfrm_profile_customer_lastname','Test' )
            .setValue( '#dwfrm_profile_customer_email', 'test@test.com' )
            .setValue( '#dwfrm_profile_customer_emailconfirm', 'test@test.com' )
            .setValue( '#RegistrationForm > div:nth-child(8) > div.field-wrapper > input', 'pass4test' )
            .setValue( '#RegistrationForm > div:nth-child(7) > div.field-wrapper > input', 'pass4test' )
            .call( done );
    });

    this.When( /^I click the submit button$/, function( done ) {
        browser
            .click( '#RegistrationForm > div.form-row.form-row-button.full-width > button' )
            .call( done );
    });
};
