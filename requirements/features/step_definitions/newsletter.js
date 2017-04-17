module.exports = function () {
    this.Given( /^I am on the homepage$/, { timeout: 10 * 1000 }, function( done ) {
        browser
            .url( "http://dev04-web-oreck.demandware.net/on/demandware.store/Sites-Hoover-Site" )
            .call( done );
    });

    this.When( /^I input an invalid email address to the newsletter field$/, function ( done ) {
        browser
            .click( '//*[@id="dwfrm_newslettersignup_email"]' )
            .setValue( '#dwfrm_newslettersignup_email','test' )
            .call( done );
    });

    this.When( /^I input a valid email address to the newsletter field$/, function ( done ) {
        browser
            .click( '//*[@id="dwfrm_newslettersignup_email"]' )
            .setValue( '#dwfrm_newslettersignup_email','tester@gmail.com' )
            .call( done );
    });

    this.Then( /^I click the subscribe button$/, function ( done ) {
        browser
            .click( '#email-alert-signup > button' )
            .call( done );
    });

    this.Then( /^I should see an error validation message$/, { timeout: 5 * 1000 }, function ( done ) {
        browser
            .waitForVisible( '#dwfrm_newslettersignup_email-error', 10 )
            .call( done );
    });

    this.Then( /^I should see a success message$/, { timeout: 5 * 1000 }, function ( done ) {
        browser
            .waitForVisible( '#email-alert-signup > div.form-row.required.js-form-row-container > div.field-wrapper > span', 10 )
            .call( done );
    });
};